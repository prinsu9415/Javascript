let stringNumber  = "33"

let numberNew = Number(stringNumber)
console.log(typeof stringNumber)
console.log(numberNew);
console.log(typeof numberNew);

let stringNewNumber = "32df"
let newNumber = Number(stringNewNumber) // It convert in NaN(its a number but not have any value)
console.log(newNumber);

let isBooleanLogged= "prince" //boolean conversion
let conBooleanLogged = Boolean(isBooleanLogged)
console.log(typeof conBooleanLogged)

//"33" => 33
//"32df" => NaN
// true =>1 false =>0

//************ Operations****************

console.log("2" + 2);;
console.log(2 + "2");
console.log("2" + 2 +2);
console.log(2 + 2 + "2");

