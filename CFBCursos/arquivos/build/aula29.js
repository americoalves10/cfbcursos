function f_teste(v, r) {
    return r;
}
console.log(f_teste(10, "Paulo"));
console.log(f_teste("10", 20));
console.log(f_teste(true, false));
class c_teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const ct1 = new c_teste(100000);
const ct2 = new c_teste("100000!!!!!!!!!!!");
console.log(ct1.valor);
console.log(ct2.valor);
export {};
