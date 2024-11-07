//task1
function randomArray (count, na, m) {
    const min = Math.min(na, m);
    const max = Math.max(na, m);
    const array = new Array(count);
    for (let i = 0; i < count; i++) {
        array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return array;
}
console.log(randomArray(100, 0, 100));

//task2
function shuflingArray(count) {
    let array = [];
    for (let i = 1; i <= count; i++) {
        array.push(i);
    }
    let reshuflArr = [];
    while (array.length > 0) {
        const randind = Math.floor(Math.random() * array.length);
        reshuflArr.push(array[randind]);
        array.splice(randind, 1);
    }

    console.log(reshuflArr);
}

shuflingArray(5);
shuflingArray(7); 
shuflingArray(3);
/*
function createAndShuffleArray(count) {
    let array = [];
    for (let i = 1; i <= count; i++) {
        array.push(i);
    }

    // Перемешиваем массив с помощью алгоритма Фишера — Йетса
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
}

createAndShuffleArray(5);
createAndShuffleArray(7);
createAndShuffleArray(3); 
*/

//task3
function findElementIndex(arraything, elementalrno) {
    let index = -1;

    for (let i = 0; i < array.length; i++) {
        if (arraything[i] === elementarno) {
            index = i;
            break;
        }
    }

    if (index == -1) {
        console.log(`Элемент ${element} не найден в массиве.`);
    } else {
        console.log(`Элемент ${element} найден на индексе ${index}.`);
    }
}

// Пример использования
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
findElementIndex(a, 5);


//task4
let area1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];

let area2 = [12, 44, 23, 5];

console.log(area1.concat(area2))
