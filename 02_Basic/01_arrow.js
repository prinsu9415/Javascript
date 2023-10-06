 const user ={
    name: "Prince",
    age : 23,
    wlecomeMessage : function(){
       // console.log('${this.name}, Welcome back!');
       console.log(this);
    }
 }
 // user.wlecomeMessage()

 // console.log(this);

//  function mera(){
//     let my = "Yadav"
//    console.log(this.my);  // this keyword not worked in case of function
//  }
 // mera()

//  const mera =() => {
//     let my = "Yadav"   // incase of arrow functionn you can't use this keyword
//    console.log(this.my);  
//  }
//  mera()

const add = (num1,num2) => {
    return num1 + num2
}
//console.log(add(5,4))

const add1 = (num1,num2) => (num1 +num2 )   // no need to write return
console.log(add1(32,8))
