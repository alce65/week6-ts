class Person {
    // name: string;
    // age: number;
    // constructor(name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    // }
    constructor(public name: string, public age: number) {}
    teeth = 32;
    greetings() {
        console.log(`Hola soy ${this.name} y tengo ${this.age} años`);
    }
}

// Person.isLive = function () {
//     console.log('Estamos vivos', this);
// };

const p1 = new Person('Pepe', 23);
const p2 = new Person('Rose', 35);

p1.greetings();
p2.greetings();
// Imposible en TS p2.heigth = 176;
// Imposible en TS delete p2.age;
console.log(p1, p2);

class Alumno extends Person {
    // course;
    constructor(name: string, age: number, public course: string) {
        super(name, age);
        // this.course = course;
    }
    greetings() {
        super.greetings();
        console.log(` y estudio ${this.course}`);
    }
    birthday() {
        this.age++;
    }
}

const a1 = new Alumno('Carlota', 31, 'JavaScript');
a1.greetings();
console.log(a1);
a1.birthday();
console.log(a1.teeth);
