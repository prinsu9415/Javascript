// reduce


const myNum = [3,4,5,8]

// const mySum = myNum.reduce(function (acc, currval) {
//      return acc + currval
// }, 0)
// console.log(mySum);

//try with arrow function
 const mySum = myNum.reduce((acc,currval) => acc + currval,0)
 console.log(mySum);

 const myCart =[
    {
        itemName : "shirt",
        price : 599,
    },
    {
        itemName : "t-shirt",
        price : 1599,
    },
    {
        itemName : "shoes",
        price :5599,
    }
 ]
const subTotal= myCart.reduce((acc,item) => acc + item.price ,0)

console.log(subTotal);
