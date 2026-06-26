import {initColorBuffer} from "./initcolorbuffer.js"

main()

function main(){
    const canvas = document.getElementById('video-canvas');
    const video  = document.getElementById('background-video');

    const gl = canvas.getContext("webgl");
    if (gl === null){
        alert("Your browser failed to start WebGL!!! Whatever man!!");
        return;
    }

    

}