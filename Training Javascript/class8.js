// string
const myString = "Hello Ji"
const myString1 = "where are you going 'Prince' ji"
const myString2= " and how are you"
console.log(myString)  //fro printing string

console.log(myString.length)  // to find length of the string

console.log(myString1)

const resultStriing = myString.concat(myString1,myString2)
console.log((resultStriing)) // To cancat multiple string

const myString3 = "  Jai Hind Doston "
console.log(myString3.trim())  // To remove space start and end

console.log(myString3.toUpperCase())
//
var mytext = "Hellohow are Hello yaou Hello yaou hello you";
//console.log(mytext.slice(2,4));
//console.log(mytext.slice(2));
//console.log(mytext.slice(-2));
//console.log(mytext.slice(-6,-1));
//console.log(mytext.substring(2,4));
//console.log(mytext.substring(2));
console.log(mytext.substring(6));

console.log(mytext.substr(2,5));
console.log(mytext.replaceAll('hello','hi'));
console.log(mytext.toUpperCase());
console.log(mytext.toLowerCase());
console.log(mytext.length);
console.log(mytext.padStart(50,'-'));
console.log(mytext.padEnd(50,'-'));
console.log(mytext.charAt(7));



