/*Let's Practice Qsl. Get user to input a number using prompt("Enter a number:"). Check if the number is
a multiple of 5 or not. */

let userNum = prompt("enter a number to check");

if (userNum % 5 === 0){
    console.log(userNum , "is divisiable with 5")
}else{
    console.log(userNum, "is not divisiable with 5")
}