"use strict"
function rand(x,y)
{

    return y+Math.floor(Math.random()*(x-y));
} 
console.log(rand(1,10));
/////////
function bin2dec(str) { 
   let binary="1010101";
   return parseInt(binary, 2);
}
console.log(bin2dec("10101010"));

// alert("welcome to my page \n please answer questions in the field");
// const firstname=prompt("what is your firstname?");
// const lastname=prompt("what is your lastname?");
// const age=prompt("enter your age");
// const gender=prompt("what is your gender?(F/M/unbinary) ");
// alert(firstname + ' ' +lastname  + ' ' + gender);
// const number1=prompt("please enter your first number");
// const number2=prompt("please enter your second number");
  
// alert (number1 +'&'+number2);
// alert (number2 +'&'+number1);

// alert(
//     `name: ${firstname}`+" "+`lastname: ${lastname}`+" "+`age: ${age}`+" "+`gender: ${gender}`
// )



// let answer= prompt("enter a world in the field");
// alert(answer);
