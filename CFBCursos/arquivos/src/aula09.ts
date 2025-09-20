enum diasdasemana {
    domingo=0,
    segunda=1,
    terca=2,
    quarta=3,
    quinta=4,
    sexta=5,
    sabado=6
}

console.log(diasdasemana.domingo);
console.log(diasdasemana["domingo"]);
console.log(diasdasemana[1]);

const d = new Date();
console.log(d);
console.log(d.getDate());
console.log(d.getDay());
console.log(diasdasemana[d.getDay()]);

enum usuario{
    user,
    admin,
    super    
}

console.log(usuario.super)

const tp:usuario = usuario.user;

console.log(tp);
console.log(usuario[tp]);
