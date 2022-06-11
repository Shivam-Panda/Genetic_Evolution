
let gen = [];

let t = 0

let cur_t = 0;

let generation_time = 1;

function setup() {
    setInterval(() => {
        t++;
    }, generation_time * 1000);

    createCanvas(2500, 2500);

    for(let i = 0; i < 30; i++) {
        gen.push(new Parent(200, 200));
    }
}

const return_first = (gen) => {
    for(let i = 0; i < gen.length; i++) {
        console.log(gen[i].calcScore());
    }
    let sorted = gen.sort((a, b) => a.calcScore() - b.calcScore());
    console.log(sorted);
    console.log(sorted[0])
    return sorted[0];
}

const next_gen = () => {
    let copy = gen;
    gen = [];
    let top_5 = return_first(copy);
    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 6; j++) {
            let c = new Child(200, 200, top_5[i]);
            gen.push(c); 
        }
    }

    console.log(gen);
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