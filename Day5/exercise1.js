
const array = Array ();
console.log(array);

let classMates = ['Basheeroh', 'Halimah', 'Hadizat', 'Fatimah', 'Aminat']
console.log(classMates);    //an array with more than 5 number of elements
console.log(classMates.length); // length of your array
console.log(classMates[0]); //the first item
console.log(classMates[2]); //the middle item
console.log(classMates[classMates.length - 1]); //the last item

let  mixedDataTypes = ['strings', 10, true, {colors: 'blue',}, {food: "Jollof rice",}, { country: 'Finland', city: 'Helsinki' }, 'sultanat', 20, false]
console.log(mixedDataTypes);    //an array with more than 5 mixed datatypes
console.log(mixedDataTypes.length); // length of your array

let  itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies);   //an array with more than 6 values
console.log(itCompanies.length);    // length of your array
console.log(itCompanies[0]); //the first item
console.log(itCompanies[3]); //the middle item
console.log(itCompanies[itCompanies.length - 1]); //the last item

console.log(itCompanies[0]);
console.log(itCompanies[1]); 
console.log(itCompanies[2]); 
console.log(itCompanies[3]); 
console.log(itCompanies[4]); 
console.log(itCompanies[5]); 
console.log(itCompanies[6]); 

    itCompanies[0] = 'FACEBOOK';
    itCompanies[1] = 'GOOGLE';
    itCompanies[2] = 'MICROSOFT';
    itCompanies[3] = 'APPLE';
    itCompanies[4] = 'IBM';
    itCompanies[5] = 'ORACLE';
    itCompanies[6] = 'AMAZON';
console.log(itCompanies);

console.log(itCompanies + ' are big IT companies.');

let index = itCompanies.indexOf('FACEBOOK')  // 0
if(index === -1){
    console.log( `it  is not found`)  
 } else {
     console.log(`it is found`)
 }

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(3,7));
console.log(itCompanies.slice(0,4));
// console.log(itCompanies.slice(3,3));
console.log(itCompanies.slice(1,7));
console.log(itCompanies.slice(0,6));
console.log(itCompanies.splice());