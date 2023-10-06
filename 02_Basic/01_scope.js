// let a = 5;
// const b =10;
// var c = 15

// console.log(a);
// console.log(b);
// console.log(c);

{
    let a=10
    const b =20
    var c =25
}
//console.log(a);  // we can't access outside of the scope with let and const
// console.log(b);
// console.log(c)    //  with the var we can
  
// function outerFunction(){
//     const a = "Prince"
//     function innerFunction(){
//        console.log(a);
//     }
//     innerFunction()
// }
// outerFunction()
console.log(myFun(4));  //here hoisting doesn't work
const myFun= function(d){
   return d +1
}

myFun1(6)   // here Hoisting will work
function myFun1(e){
 return e +2
}
