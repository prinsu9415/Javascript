//
const books = ['Hindi','english','Science','Maths']
// console.log(books)

// using arrow function
books.forEach((ele,ind) =>{
    //console.log(ele +" : " + ind)
})

// using traditional function
books.forEach(mybooks)
  function mybooks (book){
    //console.log(book)
  }

  books.forEach(function mybooki(lel){
    //console.log(lel)
  })

  // lets understand  Map
//   Use forEach when you want to perform some action on each element of an array without creating a new array.
// Use map when you want to create a new array by applying a function to each element of the original array.

  const rollNumber = [12,23,34,45,56,67,78,89,90]

  rollNumber.map((ele) => {
   // console.log(ele)
  })

  // now use filter
 const myfilter = rollNumber.filter((num) =>{
     return num >=35
  })
  console.log(myfilter)
  // now use reduce

 const myreduce = rollNumber.reduce((total,value) =>{
    return total+value
  })
  console.log(myreduce)

  // use of every
  const myevery = rollNumber.every((ele) =>{
    return ele >10
  })
  console.log(myevery)

  //if you want compare any perticular position
  const myevery1 = rollNumber.every((ele) =>{
    return rollNumber[1] >20
  })
  console.log(myevery1)
 