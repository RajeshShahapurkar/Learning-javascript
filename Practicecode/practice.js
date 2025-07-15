// get user to input a number. check if the number is a multiple of 5 or not.
let Num=prompt("Enter a number:");
if(Num%5==0){
    console.log(Num  + " is a multiple of 5");
}


// check number is even or odd
let num= prompt("enter the number:");
if(num%2==0){
    console.log(num+ " is a even number!")
}else{
    console.log(num+" is a odd number!")
}


//check if a number is prime or not
let number = prompt("Enter the number:");
let isPrime = true;

if (number <= 1) {
  isPrime = false;
}

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(number + " is a prime number.");
} else {
  console.log(number + " is NOT a prime number.");
}


// check if a number is positive, negative, or zero.
num=prompt("Enter the number:")
if(num<0){
    console.log(num + " is a negative number");
}else if(num==0){
   console.log(num + " is zero");
}else if(num>0){
    console.log(num + " is a positive number")
}


// program to check the leap year.
year=prompt("Enter the year:");
if(year%400==0){
    console.log(year+ " is a leap year")
}else{
    console.log(year+ " is not a leap year")
}


// Functions in js
function greet(name){
    console.log("welcome to my js journey "+ name)
}
greet("raj")

function greet(name){
    console.log("welcome to my js journey "+ name)
}
greet(prompt("Enter your name:"))

// reversing a string.
function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}
let reversed=reverseString(prompt("Enter a string:"));
console.log("Reversed string:", reversed);