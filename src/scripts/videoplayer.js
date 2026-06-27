import * as THREE from 'three';

import {bayerFrag} from "./shaders/bayerdither.js";
import {defaultFrag} from "./shaders/defaultfrag.js";
import {defaultVert} from "./shaders/defaultvert.js";

const canvas = document.getElementById('video-canvas');
const video  = document.getElementById('background-video');

function initShaders(){
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.autoClearColor = false
    const fragmentShader = bayerFrag;

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

    const texture = new THREE.VideoTexture(video);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;

    const uniforms = {
        iTime: {value:0},
        iResolution: {value: new THREE.Vector3()},
        iChannel0: {value: texture},
    };

    const material = new THREE.ShaderMaterial({
        fragmentShader,
        uniforms,
    });

    scene.add(new THREE.Mesh(plane, material));

    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }

    function render(time) {
        time *= 0.001;  // convert to seconds
        
        resizeRendererToDisplaySize(renderer);
        
        const canvas = renderer.domElement;
        uniforms.iResolution.value.set(canvas.width, canvas.height, 1);
        uniforms.iTime.value = time;
        
        renderer.render(scene, camera);
        
        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

}

initShaders()