        // primitive datatypes
let word = 'JavaScript';
    word[0] = "Y";
console.log(word); //notice that d J didnt change to y its because its not modifyable!

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false

//Non-Primitive Data Types
        // let code = [javascript];
        //     code[0] = 'Y'
        // console.log(code);

        let nums = [1, 2, 3]
            nums[0] = 10;
        console.log(nums)  // [10, 2, 3];

        let userOne = {
            name:'Asabeneh',
            role:'teaching',
            country:'Finland'
            }
            
            let userTwo = {
            name:'Asabeneh',
            role:'teaching',
            country:'Finland'
            }
            
            console.log(userOne == userTwo) // false we do not compare arrays and objects

            //Random Number Generator
            let randomNum = Math.random() // generates 0 to 0.999...
            console.log(randomNum);
            let randomNumBtwn = randomNum *11;
            console.log(randomNumBtwn)// this gives: min 0 and max 10.99
            let randomNumBtwnFloor = Math.floor(randomNumBtwn);
            console.log(randomNumBtwnFloor)

            //Long Literal Strings
            const paragraph = "My name is bashir Su;tanat. I live in Finland, Helsinki.\
                    I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
                    Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
                    In the end of 2019, I was thinking to expand my teaching and to reach \
                    to global audience and I started a Python challenge from November 20 - December 19.\
                    It was one of the most rewarding and inspiring experience.\
                    Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
                    I hope you are enjoying too."

            console.log(paragraph)
