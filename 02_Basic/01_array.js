const myArr = [1,2,3,4,5,6]
// console.log(myArr);    to print the elementss in the array
console.log(typeof myArr);

const newArr = new Array(4,3,2,1)
// console.log(newArr);
const newArr1 = newArr.join();  // used to convert array into string

//console.log(typeof newArr);

// console.log(myArr.indexOf(2));  // To find the index of 2

myArr.push(0);
// console.log(myArr);  // To add the number(0) in the  array at the end of array

myArr.pop()  // To remove thre last element from the array
// console.log(myArr);

myArr.shift()
console.log(myArr);


// slice  and splice

console.log(myArr.slice(0,3));  // it is not include last index

const newArr2 = myArr.splice(0,3)  // its include last index

console.log(newArr2);