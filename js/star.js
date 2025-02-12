const MIN_STAR_SIZE = 3;
const MAX_STAR_SIZE = 6;
const MAX_COLOUR_DEVIATION = 10;
const REPULSE_FORCE = 2;
const DAMPENING = 0.1;
const REPULSE_DIST = 10;

export const STARS = []

function getRGB(){
    return Math.floor(Math.random() * (210-180)) + 180;
}

export class Star {

    position;
    velocity;
    acceleration;
    size;
    radius;
    rotation;
    colour;
    ogColour;

    constructor(pX, pY){
        this.position     = createVector(pX,pY);
        this.velocity     = createVector();
        this.acceleration = createVector();
        this.size         = Math.floor(Math.random() * MAX_STAR_SIZE) + MIN_STAR_SIZE;
        this.radius       = this.size / 2;
        this.ogColour     = [getRGB(), getRGB(), getRGB()];
        this.colour       = this.ogColour.slice(0); // Slice to copy array
        STARS.push(this);
    }

    draw(){
        this.borders();
        let mousepos = createVector(mouseX, mouseY);
        fill(this.deviateValue(this.colour[0], 0), this.deviateValue(this.colour[1], 1), this.deviateValue(this.colour[2], 2));
        strokeWeight(0);

        this.acceleration = p5.Vector.sub(this.position, mousepos).setMag(
            map(this.position.dist(mousepos), 0, 150, REPULSE_FORCE, 0, true)
        );

        for (var i = 0; i < STARS.length; i++){
            let starAcc = p5.Vector.sub(this.position, STARS[i].position).setMag(
                map(this.position.dist(STARS[i].position), 0, REPULSE_DIST * this.size, REPULSE_FORCE, 0, true)
            );
            this.acceleration = p5.Vector.add(this.acceleration, starAcc);
        }

        this.velocity.add(this.acceleration);
        this.position.add(this.velocity.mult(1-DAMPENING));
        push();
        translate(this.position.x, this.position.y);
        rotate(0.7853982);
        square(this.radius, this.radius, this.size);
        pop();
    }

    deviateValue(val, index){
        switch(Math.floor(Math.random() * 3) - 1){
            case(-1):
            if(val-1 > this.ogColour[index] - MAX_COLOUR_DEVIATION){
                val = val - 2;
                this.colour[index] = val;
            }
            break;
            
            case(0):
            break;
            
            case(1):
            if(val+1 < this.ogColour[index] + MAX_COLOUR_DEVIATION){
                val = val + 2;
                this.colour[index] = val;
            }
            break;
        }
        return val;
    }

    borders() {
        if (this.position.x < -this.size) {
          this.position.x = width + this.size;
        }
    
        if (this.position.y < -this.size) {
          this.position.y = height + this.size;
        }
    
        if (this.position.x > width + this.size) {
          this.position.x = -this.size;
        }
    
        if (this.position.y > height + this.size) {
          this.position.y = -this.size;
        }
      }
}