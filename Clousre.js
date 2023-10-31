// Clousre
// using  traditional   function
function outerFunction(name,age){
    var myAge = age;
    var myName = name;
   
    function innerFunction(){
        console.log("my name is : " + myName +" and I am " +myAge+" year old")
     
    }
    return innerFunction;
}
outerFunction("Mahesh Dalle",21)();

// using Arrow Function 
const outer = (name,age)=>{
    var Myname = name;
    var Myage = age
    const inner = () =>{
        console.log("my name is :" + Myname +" and I am " +Myage+" year old")
    }
    return inner;
}
outer("akhil",22)();
