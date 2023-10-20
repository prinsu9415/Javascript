// newArray = [1,2,3,4,5]
// newArray.forEach((element) => {
//    const hello =  element*10
//     console.log(hello);
// });
// newArray.forEach(function (ele){
//    const mynum =  ele*5
//    console.log( mynum);

// })

const mpNew = [1,5,6,7,9,8]
mpNew.map((num) => {
   const myle = num*9
   console.log(myle);
})
const map1 = new Map();
map1.set("Prince",1)
console.log(map1.get("Prince"));