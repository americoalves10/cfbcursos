"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    saldo() {
        return this.saldoconta;
    }
    deposito(valor) {
        this.saldoconta += valor;
    }
    saque(valor) {
        if (valor >= this.saldoconta) {
            this.saldoconta -= valor;
        }
        else {
            console.log(`Saldo insuficiente !!!!!`);
        }
    }
}
class ContaPf extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
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
}
const c1 = new ContaPf(111, "Bruno");
const c2 = new ContaPj(222333, "CFBCursos");
c1.deposito(800);
c1.deposito(200);
c1.deposito(1000);
console.log(c1.saldo());
c2.deposito(10000);
c2.deposito(10000);
c2.deposito(10000);
console.log(c2.saldo());
//c1.info();
//c2.info();
//console.log(c1.titular);
//console.log(c1.numero);
//console.log(c2.titular);
//console.log(c2.numero);
