// // get user to input a number. check if the number is a multiple of 5 or not.
// let Num=prompt("Enter a number:");
// if(Num%5==0){
//     console.log(Num  + " is a multiple of 5");
// }


// // check number is even or odd
// let num= prompt("enter the number:");
// if(num%2==0){
//     console.log(num+ " is a even number!")
// }else{
//     console.log(num+" is a odd number!")
// }


// //check if a number is prime or not
// let number = prompt("Enter the number:");
// let isPrime = true;

// if (number <= 1) {
//   isPrime = false;
// }

// for (let i = 2; i < number; i++) {
//   if (number % i === 0) {
//     isPrime = false;
//     break;
//   }
// }

// if (isPrime) {
//   console.log(number + " is a prime number.");
// } else {
//   console.log(number + " is NOT a prime number.");
// }


// // check if a number is positive, negative, or zero.
// num=prompt("Enter the number:")
// if(num<0){
//     console.log(num + " is a negative number");
// }else if(num==0){
//    console.log(num + " is zero");
// }else if(num>0){
//     console.log(num + " is a positive number")
// }


// // program to check the leap year.
// year=prompt("Enter the year:");
// if(year%400==0){
//     console.log(year+ " is a leap year")
// }else{
//     console.log(year+ " is not a leap year")
// }


// // Functions in js
// function greet(name){
//     console.log("welcome to my js journey "+ name)
// }
// greet("raj")

// function greet(name){
//     console.log("welcome to my js journey "+ name)
// }
// greet(prompt("Enter your name:"))

// // reversing a string.
// function reverseString(str) {
//   let reversed = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }

//   return reversed;
// }
// let reversed=reverseString(prompt("Enter a string:"));
// console.log("Reversed string:", reversed);

// // checking palindrome number.
// function reverseString(str) {
//   let reversed = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }

//   return reversed;
// }

// let string=prompt("Enter a string:")
// if(string===reverseString(string)){
//     console.log(string + " is a palindrome!")
// }else{
//     console.log(string + " is not a palindrome!")
// }

// // calculator.
// num1=prompt("Enter a number:");
// num2=prompt("Enter a number:");
// op=prompt("which operation do you prefer to do +,-,*,/");
// if(op=="+"){
//     console.log("addition of " +num1 +" and " +num2+ "is", num1+num2);
// }else if(op=="-"){
//     console.log("subtraction of " +num1 +" and " +num2+ "is", num1-num2);
// }else if(op=="*"){
//     console.log("multiplication of " +num1 +" and " +num2+ "is", num1*num2);
// }else if(op=="/"){
//     console.log("division of " +num1 +" and " +num2+ "is", num1/num2);
// }


// // write a code which can give grades to students accourding to their scroes.
// student=prompt("Enter name of the student:");
// marks=prompt("Enter the grades for the student:");

// if(marks>80 && marks<100){
//     console.log(student+ " scrored grade A")
// }else if(marks>70 && marks<89){
//     console.log(student+ " scrored grade B")
// }else if(marks>60 && marks<69){
//     console.log(student+ " scrored grade C")
// }else if(marks>50 && marks<59){
//     console.log(student+ " scrored grade D")
// }else if(marks>0 && marks<49){
//     console.log(student+ " scrored grade F")
// }


// // Arrays in js
// const persons =["ram","hari","sita","bishal","gita"];
// console.log(persons[0])


// print all even number from 0 to 100.
// for(let i=0; i<100; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }


// game where we start with a random number, user keeps guessing it until gets it right.
// const secretNumber = Math.floor(Math.random() * 100) + 1;
//     let guess;
//     let attempts = 0;

//     while (true) {
//       guess = prompt("Guess a number between 1 and 100:");
//       attempts++;

//       // Convert input to number
//       guess = Number(guess);

//       if (guess === secretNumber) {
//         alert(`Correct! The number was ${secretNumber}. You guessed it in ${attempts} attempts.`);
//         break;
//       } else if (guess < secretNumber) {
//         alert("Too low! Try again.");
//       } else if (guess > secretNumber) {
//         alert("Too high! Try again.");
//       } else {
//         alert("Please enter a valid number.");
//       }
//     }


//generate username using his fullname .
// let fname=prompt("Enter your full name:");
// console.log(`Your user name is: @${fname}${fname.length}`)


// finding average of students given marks.
// let marks=[85,97,44,37,76,60];
// avg=marks[0]+marks[1]+marks[2]+marks[3]+marks[4]+marks[5]/6;
// console.log("the average is:", avg);


// create a new btn.give it text "click me", bgcolor of red and text color of white,insert the btn as the first element inside the body tag.

let btn=document.createElement("button");
btn.innerText="click me";
btn.style.backgroundColor="red";
btn.style.color="white";
let body=document.querySelector("body")
body.prepend(btn)
 