//Develop a small script which generate any number of characters random id:
let id1 = '';
let id2 = '';
for (let i = 0; i < 11; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    id1 += characters.charAt(randomIndex);
}
for (let i = 0; i < 25; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    id2 += characters.charAt(randomIndex);
}
console.log("Random ID 1:", id1);
console.log("Random ID 2:", id2);


//Write a script which generates a random hexadecimal number.
let hexChars = '0123456789ABCDEF'
let randomHexadecimal= '#';
for (let i = 0; i < 6; i++) {
    let ranHexa = Math.floor(Math.random()* hexChars.length);
    randomHexadecimal += hexChars.charAt(ranHexa);
}console.log("Random Hexadecimal Number:", hexNumber);

//Write a script which generates a random rgb color number.
let red = Math.floor(Math.random() * 256);
let green  = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
let rgbColor = rgb(`${red}, ${green}, ${blue}`);
console.log(rgbColor);


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
//Using the above countries array, create the following new array.
const countriesToUppercase = countries.map(countries => countries.toUpperCase());
console.log(countriesToUppercase);
//Using the above countries array, create an array for countries length'.
let countriesLenght = countries.map(countries => countries.length);
console.log(countriesLenght);
//Use the countries array to create the following array of arrays:[
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
//   ]
let countriesArray = countries.map(countries => [countries, countries.slice(0, 3).toUpperCase, countries.length])
console.log(countriesArray);

//In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let countriesWithLand = [];

