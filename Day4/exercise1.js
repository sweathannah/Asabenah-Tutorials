
let userAge = parseFloat(prompt("Enter your age:"));
if (userAge >= 18){
    alert("You are old enough to drive.")
}else{
    alert(`You are left with ${18 - userAge} years to drive.`)
}

let older = parseFloat(prompt('who is older, me or you? “Enter your age:”'));
let myAge = parseFloat(16);
if (older > myAge) {
    console.log(`You are ${older-myAge} years older than me`);
}else if (older < myAge) {
    console.log(`I am ${myAge -older} years older than you`);
}else{
    console.log(`We are agemate`);
}

let a = 4
let b = 3
if (a > b){
    console.log(`${a} is grater than ${b}`);
}else{
    console.log(`${a} is less than ${b}.`);
}

let result = a > b ? 
    'a is greater than b' 
    : 'a is less than or equal to b';
console.log(result);

const number = prompt("whats number do you wish to know if its even or odd");
if(+number%2===0){
    alert( `${number} is an even number`)
}else{
    alert( `${number} is an 0dd number`)
}




