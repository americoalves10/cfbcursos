let dados = {
    nome: "Demerval",
    idade: 25,
    status: "A",
    ola:()=>{console.log("Oi!!!!!!!!!!!!!")},
    info:(p:string)=>{console.log(p)}

} 

dados.nome = "JOSEBIAS";

console.log(typeof(dados));
console.log(dados);

dados.ola();
dados.info(dados.nome);
