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
const scobki = [];
const chislo = 5;

for (let i = 1; i < chislo + 1; i++) {
    scobki.push(i);
}

for (let i = 0; i < chislo; i++) {
    const r = Math.floor(Math.random() * chislo);
    [scobki[i], scobki[r]] = [scobki[r], scobki[i]];
}

console.log(arrfg, fng);
//task3
const area = [];
const testnum = 7;
const testnum2 = 3

for (let i = 1; i < testnum + 1; i++) {
    area.push(i);
}

for (let i = 0; i < testnum; i++) {21
    const ra = Math.floor(Math.random() * testnum);
    [area[i], area[ra]] = [area[ra], area[i]];
}
console.log(area);
console.log(area.indexOf(3));
//task4
const area1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];

const area2 = [12, 44, 23, 5];

const arra3 = area1.concat(area2);

console.log(area3)
