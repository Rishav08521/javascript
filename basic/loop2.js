const arr=["virat","rohit","rishav pant"];
for(const num of arr){
    console.log(num);
    
}
const greeting="hello world";
for(const greet of greeting){
    console.log(`each char is ${greet}`);
    
}
const app="hello arpana";
for(const num of app){
    console.log(num);
    
}
 
const sur="now i am currently second year student of b.tech cse. nit patna";
for(const num of sur){
    console.log(num);
    
}
const map=new Map();
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('FR',"France")
map.set('Ws',"west indies")
console.log(map);

for(const [key,value] of map){
    console.log(key,":-",value);
    
}

const myObject={
    js:"javascript",
    cpp:"c++",
    sw:"swift",
    rb:"ruby"
}
for(const key in myObject){
    //console.log(myObject[key]);
    console.log(`${key} shorcut is for ${myObject[key]}`);
    
    
}
const programming =["js","java","cpp","c programming","ruby","html","python"];
for(const key in programming){
    console.log(programming[key]);
    
}
const myGame={
    pg:"pubg",
    fre:"free Fire",
    cla:"clash clan",
    snip:"sniper"
}
for(const key in myGame){
    console.log(myGame[key]);
    
}

const myNumber={
    arav:20,
    arpana:25,
    sumit:30,
    abhishek:30,
    rishav:30
}
for(const key in myNumber){
    console.log(key);
    
    console.log(myNumber[key]);
    
}
const Mysyllabus={
    chem:"chemistry",
    phy:"physics",
    mat:"math",
    bio:"biology"
}
for(const key in Mysyllabus){
    //console.log(key);
    console.log(Mysyllabus[key]);
    
    
}
const coding=["jis","java","oops","os","dbms"]
coding.forEach(function (val){
  console.log(coding);
  
})
const cosing=["java","cpp","web","android development","backend","fronted"]
const item=["toy","biscuits","tortoise"]
cosing.forEach((itme=>{
    console.log(cosing);
    
})) 
