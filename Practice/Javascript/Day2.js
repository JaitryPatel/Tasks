//Create Object using Object Literal
const person = {
    firstName: 'Jaitry',
    middleName: 'Jayantibhai',
    lastName: 'Patel',
    logFullName: function () {
        console.log(person.firstName + '' + person.middleName + '' + person.lastName);
    }
}
person.logFullName();

const personOne = {
    firstName: 'Damyantiben',
    middleName: 'Jayantibhai',
    lastName: 'Patel',
    logFullName: function () {
        console.log(personOne.firstName + '' + personOne.middleName + '' + personOne.lastName);
    }
}
personOne.logFullName();

//Using Factory Function
function createUser(fname, lname) {
    return {
        firstName: fname,
        lastName: lname,
        logFullName: function () {
            console.log(user.firstName + '' + user.lastName);
        }
    };
}
const user = createUser('Chetu', 'Patel');
const user1 = createUser('Jetu', 'Patel');
console.log(user);
console.log(user1);

function User(fname, lname) {
    return {
        firstName: fname,
        lastName: lname,
        logFullName: function () {
            console.log(user.firstName + '' + user.lastName);
        }
    };
}
const user2 = new User('Chetu', 'Patel');
const user3 = new User('Jetu', 'Patel');
console.log(user2);
console.log(user3);

//Using Contractor Function
function User(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
    this.logFullName = function () {
        console.log(this.firstName + '' + this.lastName);
    }
}
const user4 = createUser('Chetu', 'Patel');
const user5 = createUser('Jetu', 'Patel');
console.log(user4);
console.log(user5);

//Add Name
const userOne = {
    firstName : 'Jaitry',
    lastName : 'Patel',
    logFullName : function () {
        //console.log(userOne.firstName + '' + userOne.lastName);
        console.log(`$(userOne.firstName) $(userOne.lastName)`);
    }
}
// var newUserOne = user;
// newUserOne.firstName = 'Chinu';

// console.log(userOne);
// console.log(newUserOne);
const newObject = new Object ();

const keys = Object.keys(userOne);
console.log(keys);

const values = Object.values(userOne);
console.log(values);

console.log(Object.entries(userOne));

console.log(new Number('123'));
console.log(new Number('abc'));

console.log(new String('123'));
console.log(new Boolean('abc'));
console.log(new Boolean('0'));
