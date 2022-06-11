
let gen = [];

let t = 0

let cur_t = 0;

let generation_time = 5;

function setup() {
    setInterval(() => {
        t++;
    }, generation_time * 1000);

    createCanvas(2500, 2500);

    for(let i = 0; i < 30; i++) {
        gen.push(new Parent(200, 200));
    }

    return_parents(gen);
}

const return_parents = (gen) => {
    for(let i = 0; i < gen.length; i++) {
        console.log(gen[i].calcScore());
    }
    let sorted = gen.sort((a, b) => a.calcScore() - b.calcScore());
    return [sorted[0], sorted[1]];
}

const next_gen = () => {
    let copy = gen;
    gen = [];
    let parents = return_parents(copy);
    for(let i = 0; i < 29; i++) {
        let c = new Child(200, 200, parents[0], parents[1]);
        gen.push(c);
    };
}

function draw() {
    background(0, 0, 0);

    if(t != cur_t) {
        cur_t++;
        console.log("New Generation")
        next_gen();
    }

    for(let i = 0; i < gen.length; i++) {
        gen[i].draw();
    };

    // Enemy (Randomize Movement Later)
    fill(255, 0, 0);
    circle(200,200,50);
}

const save = () => {
    let parent = return_parents(gen)[0];
    console.log(parent.getN());
}