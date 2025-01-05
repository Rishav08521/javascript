function myName(){
    console.log("A");
    console.log("R");
    console.log("P");
    console.log("A");
    console.log("N");
    console.log("A");  
}
//myName()

function addTwo(num1,num2){
  console.log((num1+num2));
  
}
addTwo(3,6)

function loginUser(usename="sam"){
    if(!usename){
        console.log("enter the username");
        return  
    }
    return '${usename} just login him'
}
console.log(loginUser());
