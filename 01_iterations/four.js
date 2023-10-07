// foreach loop
const myArr = ['a','b','c','d','e']
myArr.forEach(function (value){
// console.log(value);
})
// also we can use arrow function
myArr.forEach((value)=>{
// console.log(value);
})

function printMe(item){
  //  console.log(item);
}
myArr.forEach(printMe)

myArr.forEach((item,index,myArr) =>{
    // console.log(item,index,myArr);
})

const myLangausges = [
    {
        languageName : "Javascript",
        languageFile : "js"
    },
    {
        languageName : "python",
        languageFile : "py"
    },
    {
        languageName : "Matlab",
        languageFile : "mb"
    }
]
myLangausges.forEach((item) =>{
  console.log(item.languageName);
}
)

