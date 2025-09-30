var diasdasemana;
(function (diasdasemana) {
    diasdasemana[diasdasemana["domingo"] = 0] = "domingo";
    diasdasemana[diasdasemana["segunda"] = 1] = "segunda";
    diasdasemana[diasdasemana["terca"] = 2] = "terca";
    diasdasemana[diasdasemana["quarta"] = 3] = "quarta";
    diasdasemana[diasdasemana["quinta"] = 4] = "quinta";
    diasdasemana[diasdasemana["sexta"] = 5] = "sexta";
    diasdasemana[diasdasemana["sabado"] = 6] = "sabado";
})(diasdasemana || (diasdasemana = {}));
console.log(diasdasemana.domingo);
console.log(diasdasemana["domingo"]);
console.log(diasdasemana[1]);
const d = new Date();
console.log(d);
console.log(d.getDate());
console.log(d.getDay());
console.log(diasdasemana[d.getDay()]);
var usuario;
(function (usuario) {
    usuario[usuario["user"] = 0] = "user";
    usuario[usuario["admin"] = 1] = "admin";
    usuario[usuario["super"] = 2] = "super";
})(usuario || (usuario = {}));
console.log(usuario.super);
const tp = usuario.user;
console.log(tp);
console.log(usuario[tp]);
export {};
//# sourceMappingURL=aula09.js.map