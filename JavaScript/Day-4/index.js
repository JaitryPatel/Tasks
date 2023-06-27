//JSON
const user = {
    firstName : 'Jaitry',
    lastName : 'Patel',
    age : 21,
}
console.log(JSON.stringify(user));

/*function localStorage(title,value)
{
localStorage.setItem(title,JSON.stringify(value));
}
document.write(user);
localStorage('user', user);*/

//Add a value
number = [1,2,3,4,5,6,7,8,9,10]

//Starting add Value
number.unshift(11)

//Middle add Value
number.splice(4,1,21)

//Last add Value
number.push(24);
console.log(number);

//remove value 
num = [11,12,13,14,15,16,17]

//starting remove value
    //num.shift(0)

//middle remove value
    num.splice(2,1)

//Ending remove value
num.pop(17)
console.log(num);

//Spread Operator
//console.log(...a,20,30,40,50,...b);
//combinind and slicing
var users = [ {a:10} , {a:20} ]
//findIndexof(function(element));
//{
   // return (JSON.stringify(element)) === (JSON.stringify{a:10});
//}


//Concat
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const combinedArray = arr1.concat(arr2);
console.log(combinedArray);

//slice
numbers = [1,3,5,7,9];
console.log(numbers.slice(1,3));

//Empty Array
array = []
console.log(array);


const fruits = ['Rose-Apple', 'Apple', 'Banana', 'Orange', 'Mango', 'Grapes','Blueberry']

console.log(fruits.indexOf('Orange'));

console.log(fruits.lastIndexOf('Blueberry'));

console.log(fruits.includes('Apple'));


const array1 = [ 5, 12, 8, 130, 44, 11, 24, 2, 28, 17, 10, 29];
const found = array1.find(element => element > 10);
console.log(found);

console.log(array1.indexOf(4));
console.log(array1.indexOf(130));
console.log(array1.includes(11));
console.log(array1.includes(41));

const numbersOne = [1, 2, 3,'Jaitry'];
const numbersTwo = ['Patel',4, 5, 6];
const Combine = [...numbersOne, ...numbersTwo];
console.log(Combine);

//localStorage.setItem("myCat", "Tom");


const Friends = [ 'Jaitry', 'Om', 'Jemi', 'Damyanti', 'Khushi', 'Jeel', 'Shiv', 'Vibhu']
document.write(Friends);

//parse 
const person = '{"name":"John", "age":30, "city":"New York"}'
console.log(JSON.parse(person));

//stringfy
const obj = {name: "John", age: 30, city: "New York"};
console.log(JSON.stringify(obj));