let firstName = "Sultanat";
let lastName = "Bashir";
let country = "Nigeria";
let city = "Kwara";
let age = 16
let isMarried = false;

console.log(firstName, lastName, country, city, age, isMarried);
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried);

let string = "10";
let no = 10;

console.log(string===no);

let compare = parseInt("9.8");;
let num = 10;
console.log(compare==num);

let nonZeroNumber = 10, isTrue = true, nonEmptyString = "string";
console.log(nonZeroNumber, isTrue, nonEmptyString);

let ZeroNumber = 0,  isFalse = false, EmptyString = "";
console.log(ZeroNumber, isFalse, EmptyString);

console.log(4 > 3, 4 >= 3 ,4 < 3 ,4 <= 3, 4 == 4, 4 === 4, 4 != 4, 4 !== 4, 4 != '4', 4 == '4', 4 === '4');

let pythonLenght = "python", jargonLenght = "jargon";
console.log(pythonLenght.length, jargonLenght.length);
console.log(pythonLenght == jargonLenght);

console.log(4 > 3 && 10 < 12, 4 > 3 && 10 > 12, 4 > 3 || 10 < 12, 4 > 3 || 10 > 12, !(4 > 3), !(4 < 3), !(false), !(4 > 3 && 10 < 12), !(4 > 3 && 10 > 12), !(4 === '4'));

let dragon = "dragon";
let python = "python";
let result = dragon.includes('on') && python.includes('on');
console.log(result)

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

// Get the number of milliseconds since January 1, 1970
let millisecondsSince1970 = now.getTime();

// Convert milliseconds to seconds
let secondsSince1970 = Math.floor(millisecondsSince1970 / 1000);

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) 
console.log("Seconds elapsed from January 1, 1970, to now:", secondsSince1970);

