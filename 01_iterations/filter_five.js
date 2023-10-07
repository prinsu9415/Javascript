// map filter

const myArr = ['a','b','c','d','e']
let myarr = myArr.forEach((item) =>{
    return item   //foreach doesn't return any value so I move forward
})
// console.log(myarr);

const newArr = [1,2,3,4,5,6,7,8,9,10]
// let mynum = newArr.filter((num) => num <8)
// console.log(mynum);
let mynum = newArr.filter((num) =>{
   return num <8    //  if I use scope then it is compulsury to use return
})
console.log(mynum);

const myNum = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
 const myNew =myNum.map((num) => num * 10)
 .map((num) => num +  1)
 .filter((num) => num >= 50)
 console.log(myNew);
