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
const arrfg = [];
const ne = 5;

for (let i = 1; i < ne + 1; i++) {
    arrfg.push(i);
}

for (let i = 0; i < ne; i++) {
    const r = Math.floor(Math.random() * n);
    [arrfg[i], arrfg[r]] = [arrfg[r], arrfg[i]];
}

console.log(arrfg, fng);
//task3
const arreo = [];
const ngl = 7;
const fng = 3

for (let i = 1; i < ngl + 1; i++) {
    arreo.push(i);
}

for (let i = 0; i < ngl; i++) {21
    const ra = Math.floor(Math.random() * n);
    [arreo[i], arreo[ra]] = [arreo[ra], arreo[i]];
}
console.log(arreo);
console.log(arreo.indexOf(3));
//task4
const arra1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];

const arra2 = [12, 44, 23, 5];

const arra3 = arra1.concat(arra2);

console.log(arra3)
