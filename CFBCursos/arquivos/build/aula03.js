"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Curso {
    nome = null;
    escola = null;
    curso = null;
    constructor(nome, escola, curso) {
        this.nome = nome;
        this.escola = escola;
        this.curso = curso;
    }
}
let a1 = new Curso("Americo", "SOFTEX", "JAVASCRIPT");
console.log(a1.nome);
console.log(a1.escola);
console.log(a1.curso);
