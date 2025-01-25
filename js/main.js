main();


function main(){
    const canvas = document.getElementById("WGLCanvas");
    const gl = canvas.getContext("webgl");

    if(gl === null){
        alert("Your browser does not support WebGL! Please consider enabling JavaScript or using a more modern browser.");
        return;
    }

    // This is set to tailwind's slate #950
    gl.clearColor(0.008, 0.024, 0.094, 1.000);
    gl.clear(gl.COLOR_BUFFER_BIT);
}
