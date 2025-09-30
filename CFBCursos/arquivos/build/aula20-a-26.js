class Conta {
    numero;
    titular;
    saldoconta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoconta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular : ${this.titular} `);
        console.log(`Número  : ${this.numero} `);
    }
    get saldo() {
        return this.saldoconta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log(`VALOR INVÁLIDO !!!!!`);
            return;
        }
        this.saldoconta += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log(`VALOR INVÁLIDO !!!!!`);
            return;
        }
        if (valor <= this.saldoconta) {
            this.saldoconta -= valor;
        }
        else {
            console.log(`Saldo insuficiente !!!!!`);
        }
    }
}
class ContaPf extends Conta {
    taxaCalculo = 10;
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    calcularTributo(valor) {
        return valor * this.taxaCalculo;
    }
    info() {
        console.log(`Tipo    : Conta PF`);
        super.info();
        console.log(`CPF     : ${this.cpf} `);
        console.log(`----------------------------`);
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log(`Valor de depósito muito grande para esse tipo de conta!!`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 1000) {
            console.log(`Valor de saque muito grande para esse tipo de conta!!`);
        }
        else {
            super.saque(valor);
        }
    }
}
class ContaPj extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        console.log(`Tipo    : Conta PJ`);
        super.info();
        console.log(`CNPJ    : ${this.cnpj} `);
        console.log(`----------------------------`);
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log(`Valor de depósito muito grande para esse tipo de conta!!`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 10000) {
            console.log(`Valor de saque muito grande para esse tipo de conta!!`);
        }
        else {
            super.saque(valor);
        }
    }
}
const c1 = new ContaPf(111, "Bruno");
const c2 = new ContaPj(222333, "CFBCursos");
c1.deposito(800);
c1.deposito(200);
c1.deposito(1000);
//c1.saque(1000);
c1.saque(500);
//c1.saque(500);
//c1.saque(10);
console.log(c1.saldo);
//c2.deposito(10000);
//c2.deposito(10000);
//c2.deposito(10000);
//c2.saque(10000);
//c2.saque(5000);
//c2.saque(5000);
//c2.saque(7000);
//c2.saque(4000);
//console.log(c2.saldo());
c1.info();
export {};
//c2.info();
//console.log(c1.titular);
//console.log(c1.numero);
//console.log(c2.titular);
//console.log(c2.numero);
//# sourceMappingURL=aula20-a-26.js.map