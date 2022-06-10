class Parent {
    x = 500;
    y = 500;

    tar_x = 0;
    tar_y = 0;

    distance = 0;

    ang = 0;

    n = null;

    color = [0, 0, 0];

    PI = 3.14159265359;

    move_count = 50;
    cur_count = 0;

    done = true;

    calcDistance(cur_x, cur_y, tar_x, tar_y) {
        const x_dif = (tar_x - cur_x) ** 2;
        const y_dif = (tar_y - cur_y) ** 2;

        return Math.sqrt(x_dif + y_dif);
    };

    calcAngle(cur_x, cur_y, tar_x, tar_y) {
        const x_dif = Math.abs(tar_x - cur_x);
        const y_dif = Math.abs(tar_y - cur_x);

        const raw_ang = Math.atan(y_dif / x_dif);

        if(tar_x > cur_x && tar_y > cur_y) {
            // Quadrant 1
            return raw_ang;
        } else if(tar_x < cur_x && tar_y > cur_y) {
            return PI - raw_ang;
        } else if(tar_x < cur_x && tar_y < cur_y) {
            return PI + raw_ang;
        } else {
            return (2 * PI) - raw_ang;
        }
    }

    constructor(tar_x, tar_y) { 

        this.done = true;

        this.tar_x = tar_x;
        this.tar_y = tar_y;

        const a = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const c = Math.floor(Math.random() * 256);

        this.color = [a, b, c]

        this.n = new NeuralNetwork();

        this.makeMove();
    }

    /*
    constructor(tar_x, tar_y, parent) {
        this.tar_x = tar_x;
        this.tar_y = tar_y;
        
        a = parent.color[0] + Math.floor(Math.random() * 20);
        b = parent.color[1] + Math.floor(Math.random() * 256);
        c = parent.color[2] + Math.floor(Math.random() * 256);

        this.color = [a, b, c]

        n = NeuralNetwork(parent.n);     
        
        // Run the simulation
        while(this.cur_count <= move_count) {
            this.cur_count++;
            
            this.makeMove();
        }
    }
    */

    draw() {
        fill(this.color[0], this.color[1], this.color[2])
        rect(this.x, this.y, 50, 50);
    }

    makeMove() {
        const dist = this.calcDistance(this.x, this.y, this.tar_x, this.tar_y);
        const ang = this.calcAngle(this.x, this.y, this.tar_x, this.tar_y);
        const s = this.n.make_decision(dist, ang);

        switch(s) {
            case "LEFT":
                this.x -= 5;
                break;
            case "RIGHT":
                this.x += 5;
                break;
            case "UP":
                this.y += 5;
                break;
            case "DOWN":
                this.y -= 5;
                break;
        };
    }

    calcScore() {
        return this.calcDistance(this.x, this.y, this.tar_x, this.tar_y);
    }

}
