"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numeros = [10, 20, 30, 40];
//let numeros: Array<number|string>= [10, 20, 30, 40, "Bruno"];
//let numeros:(number|strig)[]  = [10, 20, 30, 40, "Bruno"]
numeros.push(5);
console.log(numeros);
numeros.shift();
console.log(numeros);
numeros.unshift(10);
console.log(numeros);
numeros.pop();
console.log(numeros);
numeros.push(50, 60);
console.log(numeros);
let numeros_ro = [100, 200, 300, 400, 500];
console.log(numeros_ro);
