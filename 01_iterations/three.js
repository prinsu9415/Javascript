const num = [1,2,3,4,5]
for (const item of num) {   //array
   // console.log(item); 
}

const mystring = "Good Morning!"  // string
for (const item of mystring) {
    //console.log(item); 
}
const map = new Map();
map.set('a' , 1)
map.set('b' , 2)
map.set('c' , 3)
// console.log(map);
// for (const key of map) {
//     console.log(key);    
// }
for (const [key,value] of map) {
    //console.log(key ,':-', value );    
}

const myObj ={
    name : 'Prince',
    age : 23,
    loggedIn : false
}

for (const key in myObj) {
   // console.log(key);
     //  console.log(key,myObj[key]);   
}

const myArr = ['a','b','c','d','e']
for (const key in myArr) {  //its give index but we want value  so we use foreach loop
    console.log(key);
}


