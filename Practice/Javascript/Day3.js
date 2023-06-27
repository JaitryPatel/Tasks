//if (condition) {
//}

//if (condition) {
//}   else {
//}

//if (condition) {
//}   else if (condition) {
//}   else {
//}
for (let index = 1; index < 10; index++) {
    console.log(index);
}
const fName = 'Jaitry';
for (let index =0; index < fName.length; index++) {
    /*console.log(fName.charAt(0));
    console.log(fName.charAt(1));
    console.log(fName.charAt(2));
    console.log(fName.charAt(3));
    console.log(fName.charAt(4));
    console.log(fName.charAt(5));*/

    console.log(fName.repeat(3));
}

const numberArray =  [1,2,3,4,5,6,7,8,9,10,'Patel', 'Jaitry', 'Chetu', true, false, {a:11}]
for (let index =0; index < numberArray.length; index++) {
    console.log(numberArray[index]);
}

for (const interator of numberArray) {
    console.log(interator);
}

function PrintOddNumber (num) {
    for (let index = 1; index < num; index++) {
        if (index % 2 === 0) {
            continue;
        }
        console.log(index);
    }
}
PrintOddNumber(12);

/*function PrintOddNumber (number) {
    firstloop : for (let index = 1; index < number; index++) {
        if (index % 2 === 0) {
            break firstloop;
        }
        console.log(index);
    }
}
PrintOddNumber(20);*/

const user = {
    firstName : 'Jaitry',
    lastName : 'Patel',
    age :21,
}

/*for (let index = 0; index < Object.keys(user).length; index++) {
    console.log();
}*/

for (const interator of Object.keys(user)) {
    console.log(interator, user[interator]);
}

const date = new Date();
const n = date.toDateString();
const time = date.toLocaleTimeString();
console.log('Date: ' + n);
console.log('Time: ' + time);