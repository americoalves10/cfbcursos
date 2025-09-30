class Computador {
    id;
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        this.id = 0;
    }
    info() {
        console.log(`Nome..: ${this.nome}`);
        console.log(`RAM...: ${this.ram}`);
        console.log(`CPU...: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? "Sim" : "Nao"}`);
        console.log(`---------------------------`);
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upRam(qtde) {
        if (qtde >= 0 && qtde <= 1000) {
            this.ram = qtde;
        }
        else {
            console.log(`A quantidade ${qtde} para o computador ${this.nome} não é permitido!!!!!`);
        }
    }
}
//instanciar criar o objeto da classe
const comp1 = new Computador("rapidao", 64, 10);
const comp2 = new Computador("carao", 32, 5);
const comp3 = new Computador("gamer", 128, 10);
//pode alterar pelo metodo da classe apesar do atributo ser private
comp1.ligar();
comp3.ligar();
comp1.upRam(128);
//o atributo nome pode ser alterado fora da classe public
comp1.nome = "Super Rapidão";
comp1.info();
comp2.info();
comp3.info();
export {};
//# sourceMappingURL=aula16-a-19.js.map