// generate random number

var guessTheNumber = prompt("Guess the number :")
const randomNumber = Math.floor(Math.random()*10+1)
console.log(randomNumber)
if(randomNumber === guessTheNumber){
    console.log("Good work")
}else{
console.log("keep try")
}