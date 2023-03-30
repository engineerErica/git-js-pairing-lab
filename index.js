//Code your solutions in this file
// Problem #1
function fiveToOneHundred() {
    for (let i = 5; i <= 100; i++) {
        console.log(i)
    }
}
//fiveToOneHundred()

// Problem #2
// function multiplesOfThree() {
//     for (let i = 3; i < 100; i+=3) {
//         console.log(i)
//     }
// }
//multiplesOfThree()

function multiplesOfThree() {
    for (let i = 1; i < 100; i++) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }
}
// multiplesOfThree()

// Problem #3
function multiplesOfThreeOrFive() {
    for (let i = 3; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i)
        }
    }
}
// multiplesOfThreeOrFive()

// Problem #4 
function untilNum(int) {
    for (let i = 1; i <= int; i++) {
        console.log(i)
    }
}
// untilNum(72)

// Problem #5
function multiply(num1, num2) {
    return num1 * num2
}
// console.log(multiply(9, 3))

// Problem #6 
function add(num1, num2) {
    if (num1 !== num2) {
        return num1 + num2
    }
    else {
        return num1 * 3
    }
}

// console.log(add(6, 6))

// Problem #7
function isNegative(int) {
    return int < 0 ? true : false
}
// console.log(isNegative(-5)) 

// Problem #8
function triangleArea(height, base) {
    return height * base / 2
}
// console.log(triangleArea(7, 10))

//Problem #9
function betweenTwentyAndForty(int) {
    if (int >= 20 && int <= 40) {
        return true
    }
    else {
        return false
    }
}
// console.log(betweenTwentyAndForty(0)); 

// Problem #10 
function largest(int1, int2, int3) {
    if (int1 > int2 && int1 > int3) {
        return int1
    }
    else if (int2 > int1 && int2 > int3) {
        return int2
    }
    else return int3
}
// console.log(largest(10, 9, 8))

// Problem #11 
//const printTime = () => {
//    console.log(new Date(time))
//}

//printTime()
// Jowel said to leave this problem.

// Problem #12 
const isLeapYear = (year) => {
    /* divisible by four – except for end-of-century years, 
    which must be divisible by 400 */
    if (year % 4 === 0 &&
        (year % 100 !== 0 || year % 400 === 0)) {
        return true
    }
    else {
        return false
    }
}

// console.log(isLeapYear(2000))
// console.log(isLeapYear(1900))
// console.log(isLeapYear(2020))
// console.log(isLeapYear(1999))

// Problem #13 
const getExtention = (fileName) => {
    // return fileName.substr(fileName.lastIndexOf('.'), fileName.length - 1)

    const parts = fileName.split(".");
    console.log(parts)

    return ` .${parts[parts.length - 1]}`
}

console.log(getExtention("hello.txt"))
console.log(getExtention("app.js"))
console.log(getExtention("README.md"))
