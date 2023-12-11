//convert this array in string using foor loop
var books  =['Hindi', 'English','science','Chemistry','Physics']
var booksStore =[]
for(var i=0;i<books.length;i++){
    booksStore += books[i] +' '
}
console.log(booksStore)