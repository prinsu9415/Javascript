 const instagram = {}

 instagram.email = "sjdhj@gmail.com"
 instagram.id = 123
 instagram.loggedIn = false

 // console.log(instagram);
 // console.log(Object.keys(instagram)); // To access the key of an object
// console.log(Object.values(instagram)); // To access the values of an object


 const myObj1 = {
    email : "dfhsddjfjds@.com",
    fullname : {
                 userfullname : {
                             firstname : "Prince",
                             lastname : "Yadav"
                 }
    }
 }
 // console.log(myObj1.fullname.userfullname.firstname); // if you want call name 

 const obj1 = {1 : "A", 2 : "B"}
 const obj2 = {3 : "C", 4 : "D"}

 const obj3 = Object.assign(obj1,obj2)
 console.log(obj3);
// 
const obj4 = Object.assign({},obj1,obj2)
console.log(obj4);
// most of the time we are using this method

const obj5 = {...obj1,...obj2}
console.log(obj5);
