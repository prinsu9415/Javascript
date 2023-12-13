//Pop an element into an array
function myfunction(arr,index){
    let newArray = []
    for(let  i = 0 ; i < index ; i++){
         newArray[i] = arr[i]
    }
    
     for(let i = index  ; i < arr.length-1 ; i++){
         newArray[i] = arr[i+1]
     }
     return newArray;
}
let myArray = [1, 2, 3, 4, 5,6,7];

let deleteIndex = 3;
let newArray = myfunction(myArray,deleteIndex)
console.log(newArray)
