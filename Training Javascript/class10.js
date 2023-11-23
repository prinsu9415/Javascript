// email validation
var emale = "14353"
var regExp = (/[a-z 0-9]{4,9}/)
 if(emale.match(regExp)){
    console.log("Matched")
 }
 else{
    console.log("Not Matched")
 }