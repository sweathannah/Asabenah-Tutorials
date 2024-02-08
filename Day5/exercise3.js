let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());
let minAge =  ages[0]
let maxAge =  ages[ages.length -1]
console.log("Min Age:", minAge);       //minage
console.log("Max Age:", maxAge);  //maxage
let middleIndex = Math.floor(ages.length / 2);
console.log('Middle Index:', middleIndex);
console.log('median age:', ages[middleIndex]);  //medianage
let sum = ages.reduce((total, ages) => total + ages , 0)
let averageAge =  sum % ages.length -1 
console.log("average age:", averageAge);  //averageage
console.log("Range:", maxAge -  minAge );    //range
let minDiff = Math.abs(minAge - averageAge );
let maxDiff = Math.abs(maxAge - averageAge);
console.log("Difference between Min and Average:", minDiff);
console.log("Difference between Max and Average:", maxDiff);



console.log(countries.slice(0,10));
let midIndex = Math.floor(countries.lenght / 2)
if (midIndex % 2) {
    const middleCountries = [countries[middleIndex - 1], countries[middleIndex]];
    console.log("Middle Countries:", middleCountries);
} else {
    // If the number of countries is odd, there is one middle country
    const middleCountry = countries[middleIndex];
    console.log("Middle Country:", middleCountry);
}

midIndex = Math.ceil(countries.lenght / 2)
let firstHalf = countries.slice(0, middleIndex)
let secondHalf = countries.slice(middleIndex)
console.log("First Half:", firstHalf);
console.log("Second Half:", secondHalf);
