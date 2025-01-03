// singleton
// object literak

const mySyn=Symbol("key1");

const jsuser={
    name:" arpana",
    age:21,
    email:"arpana@gmail.com",
    location:"bihar",
    login:"false",
    lastloginDay:["mondat","sunday"],
   [ mySyn]:"mykey"

}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser[mySyn]);
// jsuser.email="simpyaaaaa2gmail.com"
//Object.freeze(jsuser);
jsuser.email="amitosh@gmail.com"
//console.log(jsuser);
 // function
 jsuser.greeting=function(){
    console.log("hello js user");
    
 }
 jsuser.greetinTwo=function(){
    console.log('hello js developer,${this.name}');
    
 }
 console.log(jsuser.greeting());
 console.log(jsuser.greetinTwo());
 
 


