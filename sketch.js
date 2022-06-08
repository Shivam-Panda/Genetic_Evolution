import { Person } from "./Person";

let cur_gen = 1;
let gen_text = document.getElementById("generation");

let move_count = 100;
let cur_count = 0;

let gen_population = 30;

let lead_population = 5;

let cur_population = [];
export let cur_pop_scores = []

let top_5 = null;

let player_size = 50;

function setup() {
    createCanvas(1000, 1000);
}

const tar_x = 100;
const tar_y = 100;

const return_top_5 = () => {
    // Sort list
    // Return top 5;
    return [];
}

function draw() {
    background(0, 0, 0);

    // Enemy (Randomize Movement Later)
    fill(255, 0, 0);
    circle(tar_x, tar_y, 50);

    while(true) {
        for(let i = 0; i < gen_population; i++) {
            if(top_5 != null) {
                let i = Math.floor(Math.random() * top_5.length);
                let cur_player = new Person(tar_x, tar_y, top_5[i]);

                cur_population.push(cur_player);

                fill(cur_player.color[0], cur_player.color[1], cur_player.color[2]);
                rect(cur_player.x, cur_player.y, player_size, player_size);
                
                while(cur_count <= move_count) {
                    cur_count++;
                    cur_player.makeMove();
                };

                cur_pop_scores.push(cur_player.calcScore());
                // Generation 1 no Parents
                // Not Generation 1 add Parents
            } else {
                let cur_player = new Person(tar_x, tar_y);

                cur_population.push(cur_player);

                fill(cur_player.color[0], cur_player.color[1], cur_player.color[2]);
                rect(cur_player.x, cur_player.y, player_size, player_size);
                
                while(cur_count <= move_count) {
                    cur_count++;
                    cur_player.makeMove();
                };

                cur_pop_scores.push(cur_player.calcScore());
                // Generation 1 no Parents
            }
            // Create Individual Players, run each player
        }

        top_5 = return_top_5();

        cur_population = []
        cur_pop_scores = []

        cur_gen += 1;
        gen_text.innerText = `Generation ${cur_gen}`; 
    }
}

const sort_population = () => {
    // Return new sorted list of scores
}

const save_current = () => {
    let sorted_population = sort_population();

    let leader = sorted_population[0];
    console.log("Leading Weight 1: " + leader.n.weight_1);
    console.log("Leading Weight 2: " + leader.n.weight_2);
    console.log("Leading Bias 1: " + leader.n.bias_1);
    console.log("Leading Bias 2: " + leader.n.bias_2);
    // Work on this later
}
