 const mysymb = Symbol("key1")
const myobj = {
    name:'prince',
    age:23,
    [mysymb] :'mykey1', 
    email:'prins67@gmail.com',
    isloggedIn : false,
    loggedDays : ['Monaday','Wednesday','Friday']
}

// console.log(myobj.email);  //It is method to call element in object but its not a correct one.

// here is the secondd method to get element in object
// console.log(myobj['email']);

// console.log(myobj[mysymb]);

myobj.email = 'hdghv@gmail.com'
// console.log(myobj['email']);
// console.log(myobj);

// to avoid the change ,we can freeze the object

// Object.freeze(myobj)
// myobj.name = 'Akhil'
// console.log(myobj); // now this time name will be not change because I freeze the object

myobj.greeting = function(){
    console.log("Hello ji ,Good Morning");
}
// console.log(myobj.greeting); //its give anonymous function
// console.log(myobj.greeting())

myobj.greeting2 = function(){
    console.log('Hello ji  Good morning ,${this.name}');
}
console.log(myobj.greeting2());



