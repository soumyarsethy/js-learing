/*90-100 - A
80-70 -B
60-50 - C
40-30 - D
30-0 - F
*/

let score = 82;
let grade;
if (score >= 90 && score <= 100){
    grade = "A";
}else if ( score >= 70 && score <= 80 ){
    grade = "B";
}


console.log(`Your Score is ${score} and your grade is ${grade}`);