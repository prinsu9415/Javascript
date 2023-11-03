// Vraiable

// let const var
//  var is a global variable ,if a variable is define with var 
//  keyword we can access it every where in that  code
 var a = 10
 console.log(a)
 {
    console.log(a)
 }
  // output  10 and 10
  var b = 1;
   console.log(b)
   {
      var b =2;
      console.log(b)  
   }
   // output  1 and 2
   var d = 3;
   {
      var d =4;
      console.log(d)  
   }
   console.log(d)
   // output  4 and 4
  
 // let
//  {
//    let p =20 // we can not access it outside of the scope
//  }
//  cponsole.log(p)
// its trough error
let q =13
{
   console.log(q)  
}
// output 13

 //
  let c  = 5;
  console.log(c)
  {
  
   console.log(c)
  }
  // output  5 and 15
  let e  = 5;
 
  {
   let e = 15
   console.log(e)
  }
  console.log(e)
  // output  5 and 15

  // const
   const f =9
   {
      const f= 11
      console.log(f)
   }
   console.log(f)