interface iPerson {
    name: string;
    age: number;
}

interface iCitizen {
    dni: string;
}

let p: iPerson;

p = { name: '', age: 2 };

class Alumni implements iPerson, iCitizen {
    constructor(
        public name: string,
        public age: number,
        public dni: string,
        public course: string
    ) {}
}

let a: Alumni;
a = { name: '', age: 7, dni: '', course: '' };
