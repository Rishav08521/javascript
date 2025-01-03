// singleton
const tinder=new Object()
console.log(tinder);
tinder.id="2206092"
tinder.name="risahv"
tinder.login=false;
const regulatorUser={
    email:"rishav@gmail.com",
    fullname:{
        userfulname:{
            firstname:"rishav",
            lastname:"kumar"
        }
    }
}
console.log(regulatorUser.fullname);

const object1={1:"a",2:"b"}
const object2={3:"c",4:"d"}
//const object3={object1 ,object2} not use
const object4=Object.assign({},object1,object2)

console.log(object4);


