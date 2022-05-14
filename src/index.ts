import { sample } from './sample.js';

// Tipo any

let bar: any;
bar = 12;

// Posibles tipos primitivos

let foo: null | undefined | string | number | boolean | bigint | symbol;

foo = null;
foo = undefined;
foo = 'pepe';
foo = 22;
foo = true;
foo = 22n;

// Inferencia de tipos

let x = 34;
// Error x = ''

// Tipos array

let data: Array<number> = [];
let number: number[] = [];

// Tipos Object

let obj: { foo: number; bar?: string };
obj = { foo: 34 };
obj.bar = '';

// Alias

type userName = string;

let u: userName;

type myObject = {
    foo: number;
    bar?: string;
};

let o: myObject;

sample();
