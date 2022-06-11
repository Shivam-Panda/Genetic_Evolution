class ChildNN {
    bias_1 = 0;
    bias_2 = 0;
    weight_1 = 0;
    weight_2 = 0;
       
    constructor(parent_1, parent_2) {
        this.bias_1 = ((parent_1.bias_1 + parent_2.bias_1) /2)  + (Math.random() * (0.2) +(-0.1));
        this.weight_2 = ((parent_1.weight_2 + parent_2.weight_2) /2) + (Math.random() * (0.2) +(-0.1));
        this.weight_1 = ((parent_1.weight_1 + parent_2.weight_1) /2) + (Math.random() * (0.2) +(-0.1));
        this.bias_2 = ((parent_1.bias_2 + parent_2.bias_2) /2) + (Math.random() * (0.2) +(-0.1));
    }

    sigmoid(x) {
        const exp = -1 * (x / 300);
        const den = 1 + Math.pow(2.718, exp);
        return 1 / den;
    }

    make_decision(angle, distance) {
        const val_1 = (this.weight_1 * angle) + this.bias_1; 
        const val_2 = (this.weight_2 * distance) + this.bias_2;

        const sum = (val_1 + val_2);

        const fin = (this.sigmoid(sum));

        // Change range
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