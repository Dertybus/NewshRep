//task1
function getAge(birthYear) {
    const currentYear = new Date().getFullYear(); 
    const age = currentYear - birthYear; 
    return age; 
}
console.log(getAge(1976));

// task2
function filter(emails, blackList) {
    const filteredEmails = emails.filter(email => !blackList.includes(email));
    return filteredEmails; 
}
const emailList = [
    'julio32@example.com',
    'sigma543@example.com',
    'whynot123@example.com',
    'noImaginathion932@example.com'
];

const blackList = [
    'whynot123@example.com',
    'julio32@example.com'
];

const result = filter(emailList, blackList); 
console.log(result);

//task3
function arrSort(arr) {
    const sortedArray = arr.sort((a, b) => a - b);
    return sortedArray; 
}

console.log(arrSort([54, 32, 11, 323, 44])); 
