const secDBoys = ['Princce','Karthik','Charan']
const secABoys = ['Chetan','Ishan','Dhruv']

//secDBoys.push(secABoys)   // not a coreect method to add to array
//console.log(secDBoys);

//const allBoys = secDBoys.concat(secABoys)  // correct method  to concat arrays
//console.log(allBoys);

const new_allBoys = [...secDBoys,...secABoys] //another method to concat  arrays
// console.log(new_allBoys);

const anothe_name = (Array.from("Prince"))  // way to make a string in array
//console.log(anothe_name);

const new_number = [1,2,3,[5,6],7,[8,[9,0]]]
console.log(new_number);
const new_number1 = new_number.flat(Infinity) // used to convert  straight array
console.log(new_number1);
