// date
let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let createMydate=new Date(2025,0,3,5,3)
//console.log(createMydate.toDateString());
console.log(createMydate.toLocaleDateString());
let myCreteDa=new Date("01-03-2025")
console.log(myCreteDa.toLocaleDateString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(createMydate.getTime());

console.log(Math.floor(Date.now()/1000));

let neDte=new Date()
console.log(neDte);
console.log(neDte.getMonth());
console.log(neDte.getDay());
neDte.toLocaleDateString('default',{
    weekday:"long"
})














