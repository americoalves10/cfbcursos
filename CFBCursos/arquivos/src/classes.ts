const coisas = ["corda", "pilha", "lampada", "chave"]

class pessoa {
    nome: string;
    altura: number;
    constructor (nome: string, altura: number){
        this.nome= nome;
        this.altura= altura;
    }
}

class objeto {
    nome: string;
    constructor (nome: string){
        this.nome= nome;        
    }
}

export default pessoa
export {objeto, coisas}