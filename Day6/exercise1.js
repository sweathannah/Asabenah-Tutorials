// Iterate 0 to 10 
//using for loop, 

for (let i = 0; i <= 10 ; i++) {
    console.log(i);
}

//using while
let i = 0;
while (i <= 10) {
    console.log(i)
    i++ 
}

//and do while loop
do {
    console.log(i)
    i++;
} while (i <= 10);



// iterate 10 to 0 
// using for loop,
for (let i = 10; i <= 10; i++) {
    console.log(i);
} 
//using while 
let e = 10
while (e <= 10) {
  console.log(e)
  e++;  
}
//and do while loop
do {
    console.log(e)
    e++;
} while (e <= 10);


//terate 0 to n using for loop
let n = 10;
for (let i = 0; i <= n; i++) {
    console.log(i);
}

//Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######
for (let i = 1; i <= 7; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += '#'
    }
    console.log(line);
}

//Use loop to print the following pattern:
for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
}

for (let i = 0; i <= 10; i++) {
    let iSqr = Math.pow(i, 2);
    let iCube = Math.pow(i, 3)
    console.log(`${i}\t ${iSqr}\t ${iCube}`);
}

    //Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <=100; i++) {
   if (i % 2 === 0) {
    console.log(i);
   }
}

//Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0 ) {
        console.log(i);
    }
}

//Use for loop to iterate from 0 to 100 and print only prime numbers
    for (let i = 0; i <= 100; i++) {
        let isPrime = true;
    
        // Check if i is prime
        if (i <= 1) {
            isPrime = false;
        } else {
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
    
        // Print prime numbers
        if (isPrime) {
            console.log(i);
        }
    }
//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i   
}console.log("The sum of numbers from 0 to 100 is:", sum);

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumOfEven = 0;
let sumOdd = 0;
for (let i = 0; i <=100; i++) {
    if (i % 2 === 0) {
     sumOfEven += i;
    }else{
        sumOdd += i
    }
}console.log(`The sum of all evens from 0 to 100 is ${sumOfEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`);
console.log("Sum of evens and odds:", [sumOfEven, sumOdd]);

//  Develop a small script which generate array of 5 random numbers
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 101); // 0 to 100
    randomNumbers.push(randomNumber);
}console.log("Array of 5 random numbers:", randomNumbers);

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomId = '';
for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
}console.log("Random six-character ID:", randomId);


