const num = 5;

console.log("String: " + num);
let number;
number = false;
let num1 = 5;
let num2 = "5"
let num3 = 5;
let num4 = 15;
console.log("math: " + (num1 - num2))
console.log("math: " + (num3 - num4))

let num5 = 5;
num5--;
console.log(num5);

let str1 = Number("12");
let str2 = Number("2");
console.log(str1 + str2);

console.log("MATH PI and E " + Math.PI + "  " + Math.E);
console.log("MATH min " + Math.min(32,45,21,60,3,1,0.6)); */

let numbrs = 15;
let isHasHouse = true;
if (numbrs == 5 && isHasHouse == true) {
    console.log("Ok");
} else if(numbrs < 10) {
    console.log("poop");
} else if (numbrs == 7) {
    console.log("7!!!!");
} else if (numbrs >= 15) {
    console.log(" YES YES");
} else {
    console.log("NOT CORRECT");
}
let stroka = "word23"

switch (stroka) {
    case "4":
        console.log("string with value 4");
        break;
    case "45":
        console.log("string with value 45");
        break;
    case "word":
        console.log("string with value 'word'");
        break;
    default:
        console.log("Default");
}
//Начиная от сюда я перешел на сайт с курсом https://stepik.org/lesson/41645/?unit=20085
//alert("Hello world!")
//В этом задании у вас есть некоторый рабочий код, который закомментирован. Вам нужно убрать все команды комментариев, чтобы код заработал, и нажать кнопку "Отправить".
function testComment(a, b) { 
    var x;
    x = a * b;
  return x;
}
//В указанное место напишите код, который поместит значение из переменной a в переменную x.

function testA(c) {

    var xd = "";

    xd = c

    return xd;
}

//В этом задании вам нужно вписать в указанное место код, который будет присваивать переменной "х" значение суммы переменных "a" и "b".

function testSum(aba, bob) {
    var xfg;
    xfg = aba + bob;
    return xfg;

}
//Пометьте галочками все верные утверждения. (  мне нужнл было перепровериться)

let x = 3;
let y = 6;
str = (x + y, y - x);
console.log(str)*/

//В этом задании вам нужно вписать в указанное место код, который будет присваивать переменной "х" удвоенное значение остатка от деления произведения переменных "a" и "b" на их сумму.
//Частая ошибка: вам не нужно задавать значения переменных a и b, они уже заданы и передаются в аргументы вашей функции. Просто используйте их.
/*function testOperation(a, b) {
    var x;
    x = ((a * b) / (a + b)) * 2
    return x;
    console.log(x)
}*/

//В этой задаче вам нужно вернуть результат дизъюнкции (операции логическое ИЛИ, описанной во втором шаге этого урока) переменной a с переменной b.

//не смог сделать, постоянно вылезает ошибка JS '(' expected
/*function getOlderUser Array(users); {
    if (users.length === 0) {
        return null;
    }
    let oldestUser = users[0];

    for (let i = 1; i < users.length; i++) {
        if (users[i].age > oldestUser.age) {
            oldestUser = users[i];
        }
    }
    return oldestUser.name;
}
let allUsers = [
    { name: 'Женя', age: 11 },
    { name: 'Петр', age: 24 },
    { name: 'Петрно2', age: 21 },
    { name: 'Раоьбин', age: 34 },
    { name: 'Эльтоморио', age: 7 }
];

let result = getOlderUser.Array(allUsers);

console.log(result); */