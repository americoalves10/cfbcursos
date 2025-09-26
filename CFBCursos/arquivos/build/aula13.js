function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(soma(2, 8));
function novouser(user, pass, nome) {
    let dados = { user, pass, nome };
    console.log(dados);
}
novouser("americo", "123");
export {};
