var today = new Date()
// for day
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is : " + daylist[day] + ".");
// for date
var currentMonthOfYear = today.getMonth()
var currentDayOfYear = today.getDate()
var currentYear = today.getFullYear()
console.log(currentDayOfYear+"-"+currentMonthOfYear+ "-" +currentYear)
// for time
var hours = today.getHours()
var minutes = today.getMinutes()
var seconds = today.getSeconds()
if(hours <10)
{
   hours = '0'+hours
}
if(minutes <10)
{
   minutes = '0'+minutes
}
if(seconds <10)
{
   seconds = '0'+seconds
}

console.log(hours+":"+minutes+":"+seconds)

