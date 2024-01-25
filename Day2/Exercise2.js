console.log("There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

let typeOf = "10 ";
let num = 10;
console.log(typeOf===num)       //false
console.log(+typeOf===num)      //its now true

let number = 9.8
let check=10;
console.log(number===check)     //false
console.log(Math.ceil(number)===check); //now true

let pyt = 'python';
let jag = 'jagon';
console.log(pyt.includes('on'), jag.includes('on'));

let line = "I hope this course is not full of jargon";
console.log(line.includes(" jargon"));

let randomNum = Math.random()         // generates 0 to 99.999
let numBtnZeroAndHundred = (randomNum) * 101 //(100-0)+1

console.log(numBtnZeroAndHundred)         // this gives: min 0 and max 100.99

//0 and hundred

let randomNumRoundToFloor = Math.floor(numBtnZeroAndHundred)
console.log(randomNumRoundToFloor)    // this gives between 0 and 100

//fifty and hundres

// let numBtnZeroAndFifty = (randomNum) * (100-50)+1    //51
// console.log(numBtnFiftyAndHundred)         // this gives: min 0 and max 51
// let numBtnFiftyAndHundred = numBtnZeroAndFifty + 50 //This part shifts the range so that it starts from 50

let randomNumber = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(randomNumber);

//0 and 255
let random = Math.floor(Math.random() * 251)
console.log(random);


// access a character at a random index using a random number
let myString = "Javascript";
let randomIndex = Math.floor(Math.random() * myString.length)
console.log(randomIndex)
randomCharacter = myString.charAt(randomIndex);
console.log(randomCharacter);

console.log('1\t1\t1\t1\t1\t\n2\t1\t2\t4\t8\t\n3\t1\t3\t9\t27\t\n4\t1\t4\t16\t64\t\n5\t1\t5\t25\t125\t');

let because = 'You cannot end a sentence with because because because is a conjunction'
let regrex = /because/gi;
console.log(because.replace(regrex , ""));

let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(love.match(/love/gi))
