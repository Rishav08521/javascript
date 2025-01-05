const user={
    username:"arpana",
    price:1999,
    welcome: function(){
     console.log('${this."username" }, welcome the by website');
     console.log(this);
     
     
    }
}
//console.log(this);

// user.welcome()
// user.username="rupesh"
// user.welcome()
// function chai(){
//     console.log(this);
    
// }
// chai()

// const budd=function tea(){
//     let userna="rishav";
//     console.log(this.userna());
    
// }
// tea()

// arrow function
// const bett=()=>{
//     let usernam="rishav";
//     console.log(this.usernam);
    
// }
// bett()

const addtwoNum=(num1,num2)=>{
    return num1+num2;
}
console.log(addtwoNum(3,4));
