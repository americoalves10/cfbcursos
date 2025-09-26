const teste = (txt = "...") => {
    console.log(txt);
};
const fsoma2 = (n1, n2) => {
    return n1 + n2;
};
const fsoma3 = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
teste("Olá!!!!");
teste("Bom dia!!!!!!!!!");
teste("Tudo bem?!!!!!!!!!!!!!");
teste();
console.log(fsoma2(90, 60));
let numeros = [10, 20, 30, 40, 60];
console.log(fsoma3(numeros));
export {};
