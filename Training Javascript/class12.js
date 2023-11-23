var x = 10;
var y = 10.06
console.log(typeof(x))
console.log(typeof(y))

var z = '10'
console.log(typeof(x+z)+ " and output is "+(x+z))

console.log(Math.floor(y))
var a = 12345e5;
console.log(typeof(a))

var b = z/x;    // string/number = number
console.log(typeof(b))  // number

var c = "hello"
var d = c/x;
console.log(d)  // value is NAN
console.log(typeof(d)) // Number

let x1 =x.toString()
console.log(typeof(x1))

var  x2 =x.toExponential(5);
console.log(x2)

var p =12343545
var q = 9575
var r = p/q;
console.log(r)
console.log(r.toFixed(2))



