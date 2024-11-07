//task1
function getOlderUser(user1, user2) {
    return user1.age > user2.age ? user1.name : user2.name;
}
let user1 = {
    name: 'Елена',
    age: 17
};

let user2 = {
    name: 'Татяна',
    age: 21
};
let result = getOlderUser(user1, user2);

console.log(result); 

//task3
function filter(array, property, value) {
    return array.filter(item => item[property] === value);
}
let objects = [
    { name: 'Евгений', surname: 'Неевгеневьич' },
    { name: 'Женя', surname: 'Женилович' },
    { name: 'Петр1', surname: 'Невозможнович' }
];

let lastthing = filter(objects, 'name', 'Женя');

console.log(lastthing);

