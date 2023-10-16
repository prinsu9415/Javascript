// const promisOne = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log("Asynkc task is completed");
//         resolve()
//     },1000)
// })
// promisOne.then(function(){
//     console.log("promise consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async2 completed");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("promise consumed");
// })

// const promisThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         const error = false;
//         if(!error){
//             resolve({username:"prince" , password : "123"})
//         }
//         else{
//             reject('Error : something went wrong')
//         }
      
//     },1000)
// }).then(function(user){
//     console.log(user);
//     return user.username
// }).then(function(username){
//     console.log(username);
// }).catch((eror)=>{
//     console.log(eror);
// }).finally(() => console.log("your  promise resolved or rejected"))

// we can do the same with async function

const promisFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        const error = true;
        if(!error){
            resolve({username:"prince" , password : "123"})
        }
        else{
            reject('Error : something went wrong')
        }
    
      
    },1000)
})
async function consumepromisFour(){
    try {
        const response = await promisFour
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}
consumepromisFour();