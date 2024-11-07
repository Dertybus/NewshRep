
function passwordcheck(x){
    if (String(x).length < 5) {
        console.log("WRONG,MAKE A DIFERENT PASSWORD")
    }
    else if ((x.includes("-")) || (x.includes("_"))) {
        console.log("good password")
    }
    else {
        console.log("Where is '-' or '_' ?")
    }
}

passwordcheck("-" + 12697)

//task2

let userName = "MicHaLL";
let userSurname = "WiLliOn";
x = String(userName).length;
z = String(userSurname).length;
d = userSurname.slice(1, z)
y = userName.slice(1, x);
let chUserName = userName.toUpperCase()[1, 0] + y.toLowerCase();
let chUserSurname = userSurname.toUpperCase()[1, 0] + d.toLowerCase();
console.log(chUserName);
console.log(chUserSurname);

//task3
let numberchet = 6
if (numberchet % 2 != 0) {
    console.log("nechectnoe")
}
else {
    console.log("chetnoe")
}