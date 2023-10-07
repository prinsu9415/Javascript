// for loop
for (let i = 0; i < 10; i++) {
    const element = i;
   // console.log('Hey your numbers :' +" " +i);
    
}

for (let i = 1; i <= 10; i++) {
   // console.log('Your ' + i + ' table');
    for (let j = 1; j <= 10; j++) {
      //  console.log( i+ '*' + j+ '='  + i*j);
        
    } 
}
 for (let i = 0; i < 10; i++) {
   if(i==5){
   // console.log('Number '+ i + ' is detected');
   }
   // console.log(i);   
 }

 // break and continue keyword

 for (let i = 0; i < 5; i++) {
   console.log(i);
   if(i == 3){
      break;
   }  
 }
 for (let i = 0; i < 5; i++) {
    console.log(i);
    if(i == 3){
       continue;
    }  
  }