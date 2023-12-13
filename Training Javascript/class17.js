//Push an element into an array

function myfunction(arr,element,index){
    let newArray = []
    for(let  i = 0 ; i < index ; i++){
         newArray[i] = arr[i]
    }
     newArray[index] = element;
     for(let i = index +1 ; i <= arr.length ; i++){
         newArray[i] = arr[i-1]
     }
     return newArray;
}
let myArray = [1, 2, 3, 4, 5];
let elementToInsert = 20;
let insertIndex = 3;
let newArray = myfunction(myArray,elementToInsert,insertIndex)
console.log(newArray)
