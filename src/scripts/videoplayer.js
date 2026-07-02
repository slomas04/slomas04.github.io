import * as THREE from 'three';

import { bayerFrag } from "./shaders/bayerdither.js";
import { blueNoiseFrag } from './shaders/blueNoise.js';

const canvas = document.getElementById('video-canvas');
const video  = document.getElementById('background-video');
const blueNoise  = document.getElementById('blue-noise');

var prevScale = 0;
var lastMs = 0

function initShaders(vWidth, vHeight){
    
    /* Init render with no AA for performance
        and specify high-perf so that Chrome doesn't out-efficient us */
    const renderer = new THREE.WebGLRenderer({
        canvas, 
        powerPreference: "high-performance",
        antialias: false});
    renderer.autoClearColor = false
    const fragmentShader = blueNoiseFrag;

    // Init camera with default positions
    const camera = new THREE.OrthographicCamera(
        -1, 1, 1, -1, -1, 1);

    const scene = new THREE.Scene();
    const plane = new THREE.PlaneGeometry(2, 2);

    // Load textures
    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.colorSpace = THREE.SRGBColorSpace;
    videoTexture.minFilter = THREE.NearestFilter;
    videoTexture.magFilter = THREE.NearestFilter;

    const noiseTexture = new THREE.TextureLoader(blueNoise);
    noiseTexture.wrapS = THREE.RepeatWrapping; // Hehehe
    noiseTexture.wrapT = THREE.RepeatWrapping;

    // Uniforms for GLSL
    const uniforms = {
        iTime: {value:0},
        iResolution: {value: new THREE.Vector3()},
        iChannelResolution: {value: [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]},
        iChannel0: {value: videoTexture},
        iChannel1: {value: noiseTexture}
    };

    const material = new THREE.ShaderMaterial({
        fragmentShader,
        uniforms,
    });

    scene.add(new THREE.Mesh(plane, material));

    // This is janky asf
    function resizeRendererToDisplaySize(renderer) {
        // For some reason inner (and any other measures) were leaving a border or were just straight up wrong
        const heightMeasure = window.outerHeight; 
        const widthMeasure  = window.outerWidth;

        const portrait = heightMeasure > widthMeasure;
        const scaleFactor =  (portrait) ? heightMeasure / vHeight
                                        : widthMeasure / vWidth;
        // Only bother rescaling if aspect has changed (for your GPU's sanity)
        if (prevScale != scaleFactor){
            const targetHeight = (portrait) ? heightMeasure
                                            : vHeight * scaleFactor;
            const targetWidth =  (portrait) ? vWidth * scaleFactor 
                                            : widthMeasure;

            renderer.setSize(targetWidth, targetHeight, true)
            prevScale = scaleFactor
        }
        
    }

    function render(time) {
        time *= 0.001;  // convert to seconds
        const ms = Math.round(time * 1000);
        if (ms > lastMs + 20){ // Render at 20fps
            resizeRendererToDisplaySize(renderer);
            
            const canvas = renderer.domElement;
            uniforms.iResolution.value.set(canvas.width, canvas.height, 1);
            uniforms.iTime.value = time;
            renderer.render(scene, camera);
            lastMs = ms;
        }
        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}

// We need to make sure the video is cached and loaded first
// Just getting video dimensions at load time causes things to sometimes get zeroed at load time (on chrome)
function checkVideoState() {
    // If cached, then great
    if (video.readyState >= 1) { 
        initShaders(video.videoWidth, video.videoHeight);
        video.play().catch(err => console.log("Autoplay blocked:", err));
    } else {
        // If not cached, I hate the antichrist
        video.addEventListener('loadedmetadata', () => {
            initShaders(video.videoWidth, video.videoHeight);
            video.play().catch(err => console.log("Autoplay blocked:", err));
        });
    }
}

checkVideoState();

