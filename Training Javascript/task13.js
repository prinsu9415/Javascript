//constructor function

function Person(fname,lname,age,eye){
    this.firstName = fname
    this.lastName = lname
    this.age = age
    this.eyecolor = eye
}
  const myName = new Person("prince","yadav",23,"blue")
  console.log(myName)
  myName.nationality = "Indian"
   console.log(myName)
   
   myName.name = function(){
       return this.firstName +" "+ this.lastName
   }
   console.log(myName.name())
   
   Person.city = "Noida" //we can not do it
   //To add a new property to a constructor, you must add it to the constructor function
   //You cannot add a new property to an object constructor the same way you add a new property to an existing object:
  // So for that reason   
  