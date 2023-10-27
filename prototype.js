function Intro (firstName,lastName){
    this.firstName =firstName;
    this.lastName =lastName;
}
const name = new Intro("Prince","Yadav")
    console.log(name)

    Intro.prototype.fullName = function(){
        console.log('${this.firstName} ${this.lastName}')
    }
   name.fullName()