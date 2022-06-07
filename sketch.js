function setup() {
    createCanvas(1000, 1000);
}
  
let x = 50;

function draw() {
    background(0, 0, 0);

    // Enemy (Randomize Movement Later)
    fill(255, 0, 0);
    circle(100, 100, 50);


    if(keyIsPressed) {
        x += 20;
    }


    // Player Testing
    fill(0, 0, 255);
    circle(x, 0, 50);
}