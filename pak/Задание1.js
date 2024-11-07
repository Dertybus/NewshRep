//task1
let x1 = -5;
let y1 = 8;
let x2 = 10;
let y2 = 5;
console.log("Task1 " + Math.abs(x1 - x2) * Math.abs(y1 - y2))

//task2
let a = 13.123456789;
let b = 2.123;
let n = 5;
x = (a - Math.floor(a))
y = (b - Math.floor(b))

console.log(x.toFixed(n) > y.toFixed(n));

//task3

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumbers(n, m) {
    const min = Math.min(n, m);
    const max = Math.max(n, m);

    const randomNum1 = getRandomInt(min, max);
    const randomNum2 = getRandomInt(min, max);

    console.log(`random numbers: ${randomNum1}, ${randomNum2}`);

    console.log(`comparison:`);
    console.log(`${randomNum1} > ${randomNum2}: ${randomNum1 > randomNum2}`);
}

generateRandomNumbers(100, 0);
