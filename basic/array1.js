const marvelhero=["bagheera","slaar","marco"]
const dc=["kgf","pushpa","kanguva"]
marvelhero.push(dc);

// console.log(marvelhero);
// console.log(marvelhero[3][2]);
// marvelhero.concat(dc);
// console.log(marvelhero);
// const allhero=marvelhero.concat(dc);
// console.log(allhero);
const allHero=[...marvelhero,...dc]
console.log(allHero);
const allArray=[2,3,4,[1,5,7],7,[1,7,9,[5,7,10]]];
console.log(allArray);
console.log(Array.from("arpana"));
console.log(Array.from({name:"simpy"}));
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));




