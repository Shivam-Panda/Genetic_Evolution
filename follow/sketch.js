
let parents = [];

function setup() {
    createCanvas(2500, 2500);

    for(let i = 0; i < 30; i++) {
        parents.push(new Parent(200, 200));
    }
}

function draw() {
    background(0, 0, 0);

    for(let i = 0; i < parents.length; i++) {
        parents[i].draw();
    };

    // Enemy (Randomize Movement Later)
    fill(255, 0, 0);
    circle(200,200,50);
}