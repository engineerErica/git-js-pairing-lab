//Code your solutions in this file
// Problem #1
function fiveToOneHundred(){
    for (let i = 5; i <= 100; i++){
        console.log(i)
    }
}
//fiveToOneHundred()

// Problem #2
function multiplesOfThree() {
    for (let i = 3; i < 100; i+=3) {
        console.log(i)
    }
}
//multiplesOfThree()

// Problem #3
function multiplesOfThreeOrFive(){
    for (let i = 3; i <= 100; i++){
        if (i % 3 === 0 || i % 5 === 0){
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
function multiply(num1, num2){
 return num1 * num2   
}
// console.log(multiply(9, 3))

// Problem #6 
function add(num1, num2) {
    if (num1 !== num2) {
        return num1 + num2
    } else {
        return num1 * 3
    }
}

// console.log(add(6, 6))

// Problem #7
function isNegative(num){
    return num < 0 ? true : false
}
// console.log(isNegative(-5)) 

// Problem #8
function triangleArea(height, base) {
    return height * base / 2
}
// console.log(triangleArea(7, 10))