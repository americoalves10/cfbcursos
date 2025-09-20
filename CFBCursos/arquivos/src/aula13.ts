function soma(n1: number=0, n2: number=0): number {
    return n1+n2;
}

console.log(soma(2, 8))

function novouser(user: string, pass: string, nome?:string): void {
    let dados = {user, pass, nome}
    console.log(dados);
}

novouser("americo", "123")
