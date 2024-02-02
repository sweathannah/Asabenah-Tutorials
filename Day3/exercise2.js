let base = prompt('Enter the base of the triangle ')
    base= parseFloat(base); //converts the input to number
console.log("Base is", base  );
let height = prompt('Enter the height of the triangle')
    height= parseFloat(height);
console.log("Height is", height);
let area = 0.5 * base * height;
console.log("The area is = ",area);
alert("The area of the triangle is:" + area )

let sideA = prompt('Enter side a of the triangle')
    sideA = parseFloat(sideA);
console.log("Side A is", sideA);
let sideB =  prompt('Enter side b of the triangle')
    sideB = parseFloat(sideB);
console.log("side B is", sideB);
let sideC =  prompt('Enter side c of the triangle')
    sideC = parseFloat(sideC);
console.log("side C is", sideC);
let perimeter = sideA + sideB +sideC;
console.log("The perimeter is", perimeter);
alert("The perimeter is:" + perimeter)

let lenght = parseFloat(prompt('Enter the lenght of the rectangle:'));
console.log("The lenght of the rectangle is =", lenght);
let width = parseFloat(prompt("Enter the width of the rectangle:"));
console.log("The width of the rectangle is =", width);

let areaa = lenght * width;
let perimeterr = 2 * (lenght + width);
console.log("The area is =", areaa);
console.log("The perimeter is =",perimeterr);

// Display the results
alert("Area of the rectangle: " + areaa + "\nPerimeter of the rectangle: " + perimeterr);

let radius = parseFloat(prompt("Enter the radius of the circle"));
const pi = 3.14;
let areea = pi * radius *radius;
let circumference = 2 * pi * radius;
console.log("The area is =", areea);
console.log("the circumference is =", circumference);
alert("Area of the cicle is: " +areea + "\nCircumference of the circle: " + circumference)

// Given equation: y = 2x - 2
let slope1 = 2;
let yIntercept = -2
// Calculate x-intercept (where y = 0);
let xIntercept = -yIntercept / slope1;
console.log("slope:" + slope1);
console.log("Y-intercept:" + yIntercept);
console.log("X-intercept:" + xIntercept);

let x1  = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
// Calculate slope
let slope2 = (y2-y1) / (x2 -x1);
console.log(console.log("Slope between points (" + x1 + ", " + y1 + ") and (" + x2 + ", " + y2 + "): " + slope2));

// Compare slopes
if (slope1 > slope2 ){
    console.log("Slope 1 is greater.");
} else if (slope1 < slope2) {
  console.log("Slope 2 is greater.");
} else {
  console.log("The slopes are equal.");
}

// Given equation: y = x^2 + 6x + 9

// Function to calculate y for a given x
    function calculateY(x) {
        return x*x + 6*x + 9;
    }
// Try different x values
let xvalues = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
//Find x value at which y is 0
let zeroX = null;
for (let i = 0; i < xvalues.length; i++) {
    let currentX = xvalues[i];
    let currentY = calculateY(currentX);
    console.log("For x = " + currentX + ", y = " + currentY);
    if (currentY === 0) {
        zeroX = currentX;
        break;
    }
}

if (zeroX !== null) {
console.log("The value of x at which y is 0: " + zeroX);
} else {
console.log("No value of x found for which y is 0.");
}


let hour = prompt('Enter how many hours you have worked')
    hour = parseFloat(hour);
console.log("Hours worked is =", hour);
let ratePerHour = prompt('Enter your rate per hour');
    ratePerHour = parseFloat(ratePerHour);
console.log("Rate per hour =", ratePerHour);
let weeklyEarning = hour * ratePerHour;
console.log("Your weekly earning is", weeklyEarning);

let name = prompt('Enter your name:');
if (name.length > 7) {
    alert("your name is long ");
}else {
    alert("your name is short.");
}


let firstname = "Sultanat"
let lastname = "Bashir"
if (firstname.length > lastname.length ) {
    console.log("Your first name," + firstname + " is longer than your family name," + lastname)
}else if (lastname.length > lastname.length) {
    console.log("Your family name," + lastname + "is longer than your firstname," + firstname)
}else{
    console.log("Your family name," + lastname + "is of same lenght as your firstname," + firstname);
}


let myAge = 250
let yourAge = 25
console.log(`I am  years ${myAge - yourAge} older years than you.`);


let birthYear = prompt('"Please enter the year you were born:"');
let currentYear = new Date().getFullYear();
let howOld = parseFloat(currentYear - Number(birthYear));
if (howOld >= 18) {
    console.log(`You are ${howOld}. You are old enough to drive`)
}else{
    let waitYear = parseFloat(18 - howOld);
    console.log(`You are ${howOld}. You will be allowed to drive after ${waitYear}  years.`)
}

let yearsYouLive = parseInt(prompt("Enter number of years you live:"));
let secondsInMinute = 60;
let minutesInHour = 60;
let hoursInDay = 24;
let daysInYear = 365;
let yearsLifespan = 100;
let totalSeconds = yearsYouLive * daysInYear * hoursInDay * minutesInHour * secondsInMinute;
console.log(`You lived ${totalSeconds} seconds in ${yearsYouLive} years.`);

const day = new Date()
const yearr = day.getFullYear() // return year
const monthh = day.getMonth() + 1 // return month(0 - 11)
const datee = day.getDate() // return date (1 - 31)
const hourss = day.getHours() // return number (0 - 23)
const minutess = day.getMinutes() // return number (0 -59)

// Format: YYYY-MM-DD HH:mm
console.log(`${yearr}-${monthh}-${datee} ${hourss}:${minutess}`) ;

// Format: DD-MM-YYYY HH:mm
console.log(`${date}-${month}-${year} ${hours}:${minutes}`) ;

// Format: DD/MM/YYYY HH:mm
console.log(`${date}/${month}/${year} ${hours}:${minutes}`) ;