//Function Declaration, Function Expressions, Deference between them explain about let cons, Function Arguments, Rest Operstors, Default Parameters, Getters and Setters, Try and Catch
function sumNumber(a, b) {
    let total = 0;
    console.log(arguments);
    for (const interator of arguments) {
        total += interator;
    }
     total;
}
console.log(sumNumber (10,20,30,40));


function sumNumber(...args) {
    let total = 0;
    console.log(args);
    for (const interator of args) {
        total += interator;
    }
     total;
}
console.log(sumNumber(10,20,30,40));


function sumNumber(start,...args) {
    let total = start;
    console.log(args);
    for (const interator of args) {
        total += interator;
    }
     total;
}
console.log(sumNumber(10,1, 1, 1, 1, 1));


function interest(principal, rate, years) {
    let rate1 = rate || 8;
    let year = rate || 5;
     principal *rate1 / 100 *year;
}


function interest(principal, rate= 8, years = 5) {
     principal * rate / 100 *years;
}
console.log (interest(10000));


var sumNumber = function (a, b) {
     a +b;
}
console.log(sumNumber (10,20,30,40));

const user = {
    firstName : 'Jaitry', 
    lastName : 'Patel',
    get fullName () {
         this.firstName + '' + this.lastName;
    },
    set fullName(value) {
        if (typeof value !== "string") {
            throw new Error ('Value is not a String');
        }
        const parts = value.split('');
        if (typeof value !== 2) {
            throw new Error ('Enter a First and Last Name');
        }
        this.firstName = parts[0];
        this.lastName = parts[1];

        //const values = value.split('');
        //this.firstName = values[0];
        //this.lastName = values[1];
        //this.lastName = values[2];
        //this.lastName = values[3];
        //this.lastName = values[4];
    }
}

//user.fullName = 'Chetu Patel';
/*user.fullName = 10;
try {
}   catch (error) {
        console.log (error);
}
console.log(user.fullName);*/

//let NumberLet = 10;
//const NumberConst = 10;
//var NumberVar = 10;
//console.log(number);
//debugger

/*function typeof (value) {
    typeof value;
}*/

console.log(typeof(10));
console.log(typeof(2.4));
console.log(typeof('10'));
console.log(typeof(null));
console.log(typeof("Jaitry"));

var array = [1, 2, 3, 4, 5];
for (const key in array) {
    console.log (key);
}