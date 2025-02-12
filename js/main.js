import { sketch } from 'p5js-wrapper';
import { Star, STARS } from './star';
p5.disableFriendlyErrors = true;

const MAX_NUMBER_STARS = 150;

var stars = [];

function createStars(){
  for(let i = 0; i < MAX_NUMBER_STARS; i++){
    stars.push(new Star(Math.random() * windowWidth, Math.random() * windowHeight))
  }
}


sketch.setup = function () {
  createStars();
  createCanvas(windowWidth, windowHeight);
};

sketch.windowResized = function() {
  stars = [];
  STARS.forEach((item) => {STARS.pop(item)});
  createStars();
  resizeCanvas(windowWidth, windowHeight);
}

sketch.draw = function () {
  background(5, 14, 37); 

  stars.forEach(function(elem){
    elem.draw();
  });
};

