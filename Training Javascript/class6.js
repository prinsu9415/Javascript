const array = ['English','Hindi','Math','Physics']

console.log(array)

array.push('Chemistry')  // used to add new element in the end of the array
console.log(array)

array.pop()        // used to remove last element of the array
console.log(array)

array.unshift('Biology')  // used to add new element at the start of the array
console.log(array)

array.shift()    // used to remove begining element of the array
console.log(array)

array.sort()    
console.log(array)

array.reverse()  // used to revese the array
console.log(array)

const sliceArray = array.slice(0,2)
console.log(sliceArray)

const  myarray1 = [1,2,3,4,5]
const myarray2 = [6,7,8,9]
const myarray3 = myarray1.concat(myarray2)
console.log(myarray3)

const myarray4 = [12,13,14,15,16]

const myarray5 = myarray1.concat(myarray2,myarray4)
console.log(myarray5)

const singleArray = [[1,2,3],[4,3],[6,7],[10,20,30,40]]
const flatArray = singleArray.flat()
console.log(flatArray)