class NeuralNetwork {
    bias_1 = 0;
    bias_2 = 0;
    weight_1 = 0;
    weight_2 = 0;
    
    weight_3 = 0;

    weight_4 = 0;
    weight_5 = 0;

    constructor() {
        this.bias_1 = Math.random() * (2) +(-1);
        this.bias_2 = Math.random() * (2) +(-1);
        this.weight_1 = Math.random() * (2) +(-1);
        this.weight_2 = Math.random() * (2) +(-1);
        
        console.log(this.bias_1)
        console.log(this.bias_2)
        console.log(this.weight_1)
        console.log(this.weight_2)

        this.weight_4 = Math.random();
        this.weight_5 = Math.random();

       
    } 
       
       
    /*
    constructor(parent) {
        this.bias_1 = parent.bias_1 + (Math.random * (0.1));
        this.weight_1 = parent.weight_1 + (Math.random * (0.1));
        this.bias_2 = parent.bias_2 + (Math.random * (0.1));
        this.weight_2 = parent.weight_2 + (Math.random * (0.1));
    }
    */

    sigmoid(x) {
        const exp = -1 * (x / 10);
        const den = 1 + Math.pow(2.718, exp);
        return 1 / den;
    }

    make_decision(angle, distance) {
        const val_1 = (this.weight_1 * angle) + this.bias_1; 
        const val_2 = (this.weight_2 * distance) + this.bias_2;

        const sum = (this.weight_4 * val_1) + (this.weight_5 * val_2);

        console.log(sum);

        const fin = this.sigmoid(sum);

        if(fin < 0.25) {
            return "LEFT"
        } else if(fin < 0.5) {
            return "RIGHT";
        } else if(fin < 0.75) {
            return "UP"
        } else {
            return "DOWN"
        }
    }
}