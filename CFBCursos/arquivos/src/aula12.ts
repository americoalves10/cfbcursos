function logar(user:string, pass:string): void {
    console.log(`User  : ${user}`);
    console.log(`Senha : ${pass}`);
}

logar("americo", "123");
logar("teste", "000");

function soma2(n1:number, n2:number): number {
    let r = n1+n2
    return r;
}

let nres:number = soma2(10, 15);
let sres:string = soma2(2, 8).toString();

console.log(nres);
console.log(sres);


