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
untilNum(72)