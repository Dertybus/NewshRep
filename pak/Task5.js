//task1
function getOlderUser(user1, user2) {
    return user1.age > user2.age ? user1.name : user2.name;
}
let user1 = {
    name: 'Нартуров',
    age: 17
};

let user2 = {
    name: 'олеоран',
    age: 21
};
let result = getOlderUser(user1, user2);

console.log(result); 

//task2


//task3
function filter(array, property, value) {
    return array.filter(item => item[property] === value);
}
let objects = [
    { name: 'Ромавич', surname: 'Ромав' },
    { name: 'Ионыв', surname: 'Артуриор' },
    { name: 'Пётр', surname: 'Можетпервый' }
];

let lastthing = filter(objects, 'name', 'Ионыв');

console.log(lastthing);

