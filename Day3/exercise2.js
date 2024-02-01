let base = prompt('Enter the base of the triangle ')
    base= parseFloat(base); //converts the input to number
console.log("Base is", base  );
let height = prompt('Enter the height of the triangle')
    height= parseFloat(height);
console.log("Height is", height);g
let area = 0.5 * base * height;
console.log("The area is = ",area);

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


let hour = prompt('Enter how many hours you have worked')
    hour = parseFloat(hour);
console.log("Hours worked is =", hour);
let ratePerHour = prompt('Enter your rate per hour');
    ratePerHour = parseFloat(ratePerHour);
console.log("Rate per hour =", ratePerHour);
let weeklyEarning = hour * ratePerHour;
console.log("Your weekly earning is", weeklyEarning);