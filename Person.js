export class Person {
    x = 500;
    y = 500;

    color = [0, 0, 0];

    Person() { 
        a = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        c = Math.floor(Math.random() * 256);

        this.color = [a, b, c]


    }
}