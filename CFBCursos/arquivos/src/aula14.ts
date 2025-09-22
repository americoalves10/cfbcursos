const teste=(txt:string="..."): void=> {
    console.log(txt);
}

const fsoma2=(n1: number, n2: number): number=> {
    return n1+n2
}

const fsoma3=(n: number[]): number=> {
    let s: number=0;
    n.forEach((e)=>{
        s+=e;
    });        
    return s
}


teste("Olá!!!!");
teste("Bom dia!!!!!!!!!");
teste("Tudo bem?!!!!!!!!!!!!!");
teste();

console.log(fsoma2(90, 60));

let numeros:number[]= [10, 20, 30, 40, 60]
console.log(fsoma3(numeros));