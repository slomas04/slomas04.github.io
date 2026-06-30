import * as THREE from 'three';

import { bayerFrag } from "./shaders/bayerdither.js";
import { blueNoiseFrag } from './shaders/blueNoise.js';

const canvas = document.getElementById('video-canvas');
const containerElem = document.getElementById('video-container');
const video  = document.getElementById('background-video');

const videoHeight = video.videoHeight;
const videoWidth = video.videoWidth;
var prevScale = 0;
var lastMs = 0

function initShaders(){
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.autoClearColor = false
    const fragmentShader = blueNoiseFrag;

    const camera = new THREE.OrthographicCamera(
        -1, // left
        1, // right
        1, // top
        -1, // bottom
        -1, // near,
        1, // far
    );
    const scene = new THREE.Scene();
    const plane = new THREE.PlaneGeometry(2, 2);

    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.colorSpace = THREE.SRGBColorSpace;
    videoTexture.minFilter = THREE.NearestFilter;
    videoTexture.magFilter = THREE.NearestFilter;

    const noiseTexture = new THREE.TextureLoader()
                                .load( '/src/images/bluenoise_rgba_1024.png' );
    noiseTexture.wrapS = THREE.RepeatWrapping;
    noiseTexture.wrapT = THREE.RepeatWrapping;


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

    function resizeRendererToDisplaySize(renderer) {
        const heightMeasure = window.outerHeight; 
        const widthMeasure  = window.outerWidth;


        const portrait = heightMeasure > widthMeasure;
        const scaleFactor =  (portrait) ? heightMeasure / videoHeight
                                        : widthMeasure / videoWidth;
        if (prevScale != scaleFactor){
            const targetHeight = (portrait) ? heightMeasure
                                            : videoHeight * scaleFactor;
            const targetWidth =  (portrait) ? videoWidth * scaleFactor 
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

initShaders()