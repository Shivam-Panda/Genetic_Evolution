function setup() {
    createCanvas(1000, 1000);

    for(let i = 0; i < 30; i++) {
        let p = new Parent(200, 200);
    }
}

function draw() {
    background(0, 0, 0);

    // Enemy (Randomize Movement Later)
    fill(255, 0, 0);
    circle(200,200,50);
}