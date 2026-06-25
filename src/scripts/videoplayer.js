// Grafted from https://stackoverflow.com/questions/4429440/html5-display-video-inside-canvas

var canvas = document.getElementById('video-canvas');
var ctx = canvas.getContext('2d');
var video = document.getElementById('background-video');

video.addEventListener("play", () => {
  function step() {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
});