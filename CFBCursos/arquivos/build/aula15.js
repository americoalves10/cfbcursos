function fsoma(...n) {
    let s = 0;
    for (let en of n) {
        s += en;
    }
    /*    n.forEach((en)=>{
            s+=en;
        })
    */
    return s;
}
console.log(fsoma(10, 20, 30, 40, 100));
export {};
//# sourceMappingURL=aula15.js.map