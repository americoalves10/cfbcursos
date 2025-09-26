function f_teste<T, U>(v:T, r:U): U {
    return r
}

console.log(f_teste<number, string>(10, "Paulo"));
console.log(f_teste<string, number>("10", 20));
console.log(f_teste<boolean, boolean>(true, false));

class c_teste<T> {
    public valor: T;
    constructor (valor:T){
        this.valor = valor;
    }    
} 

const ct1 = new c_teste<number>(100000);
const ct2 = new c_teste<string>("100000!!!!!!!!!!!");

console.log(ct1.valor);
console.log(ct2.valor);