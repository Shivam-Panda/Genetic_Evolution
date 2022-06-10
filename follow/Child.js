class Child {
    x = 1000;
    y = 1000;

    tar_x = 0;
    tar_y = 0;

    distance = 0;

    ang = 0;

    n = null;

    color = [0, 0, 0];

    PI = 3.14159265359;

    move_count = 15;
    cur_count = 0;

    done = true;

    calcScore() {
        return this.calcDistance(this.x, this.y, this.tar_x, this.tar_y);
    }

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

    constructor(tar_x, tar_y, parent) {
        this.tar_x = tar_x;
        this.tar_y = tar_y;
        
        let a = parent.color[0] + Math.floor(Math.random() * 20);
        let b = parent.color[1] + Math.floor(Math.random() * 256);
        let c = parent.color[2] + Math.floor(Math.random() * 256);

        this.color = [a, b, c]

        this.n = new ChildNN(parent.getN());     
        
        // Run the simulation
        while(this.cur_count <= this.move_count) {
            this.cur_count++;
            
            this.makeMove();
        }
    }

    getN() {
        return this.n;
    }

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
                this.x -= 50;
                break;
            case "RIGHT":
                this.x += 50;
                break;
            case "UP":
                this.y += 50;
                break;
            case "DOWN":
                this.y -= 50;
                break;
        };
    }

    calcScore() {
        return this.calcDistance(this.x, this.y, this.tar_x, this.tar_y);
    }

}
