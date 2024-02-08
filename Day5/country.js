let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let punctuations = /[.,]/g;
console.log(text.replace (punctuations, ""));   //remove all the punctuations
let words = text.split(' ');    //change the string to array
console.log(words);
console.log(words.length);  //he number of words in the array


let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
    console.log(shoppingCart);

shoppingCart.push('Sugar')
    console.log(shoppingCart);

let indexOfHoney =  shoppingCart.indexOf('Honey');
console.log( shoppingCart.splice(indexOfHoney, 1));
console.log(shoppingCart);

shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

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

let ethiopia = countries.includes('Ethiopia');
if (ethiopia = true ) {
    console.log("ETHIOPIA");
}else {
    countries.push('Ethiopia');
    console.log(countries);
}


let webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
let sass = webTechs.indexOf('Sass');
console.log(sass);
if (sass !== -1) {
    console.log('Sass is a CSS preprocess');
}else {
    webTechs.push('Sass');
    console.log(webTechs);
}

let frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
let backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)