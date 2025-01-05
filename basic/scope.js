// global scope
let a=300;
if(true){
    // block scope
    let a=3
    console.log("inner:", a);
    
    const b=4
    var c=5
}
console.log(a);
//console.log(b);
//console.log(c);
