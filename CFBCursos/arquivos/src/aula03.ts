class Curso{
    nome=null;
    escola=null;
    curso=null;
    constructor(nome:any, escola:any, curso:any){
        this.nome=nome;
        this.escola=escola;
        this.curso=curso;
    }
}
let a1 = new Curso("Americo", "SOFTEX", "JAVASCRIPT")
console.log(a1.nome);
console.log(a1.escola);
console.log(a1.curso);
