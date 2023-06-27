//Join Array
const message = 'create array using Javascript';
const split = message.split(' ');
console.log(split);
console.log(split.join('_'));

//sorting array
numbers = [11,2,3,4,5,6,7,8,9]
numbers.sort((a,b) => {
    if (a<b) {
        return -1;
    }
    if (a>b) {
        return 1;
    }
})
console.log(numbers.sort());
console.log(numbers.reverse());

const courses =[
    {id:1, name: 'python'},
    {id:2, name: 'JavaScript'}
]
courses.sort((a, b) => {
    //a.name = a.name.toUpperCase
        if (a.name < b.name) {
            return 1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    console.log(courses)

//Testing the elements of array
num1 = [0,1,2,3,4,5,6,7,8,9]
console.log(num1.every((value) => value === 0));
console.log(num1.every((value) => value = 1));

num2 = [1,2,3,4,5,6,7,8,9,-1]
console.log(num2.some((value) => value === -1));
console.log(num2.every((value) => value === 1 ));

let students = [
    {name: 'Jaitry', Address:'USA'},
    {name: 'Jemi',   Address:'Navsari'},
    {name: 'Om',     Address:'Mumbai'},
    {name: 'Jeel',   Address:'Manali'},
    {name: 'Khushi', Address:'Goa'},
    {name: 'Shiv',   Address:'Dandi'},
    {name: 'Vibhu',  Address:'Amdavad'},
]
//Filter
console.log(students.filter((element) => element.Address.length >= 6));

//Map
console.log(students.map(element => ({name:element.name})));

//Chaining
console.log(students.filter((element) => element.Address.length >= 6).map(element => ({name:element.name})));

//reduce method
let number = [1,2,3,4,5];
console.log (number.reduce((value,CurrentValue) => (value+ CurrentValue)));

//Object to String
console.log(number.toString())

const output1 = console.log([1,2,3,4,5].map((element,index ) =>({index:element})));

const output2 = 
console.log([1,2,3,4,5].map((element,index ) =>({index:element})).filter(element=>true))

const output3 = console.log([1,2,3,4,5].map((element,index ) =>({index:element})).filter(element => false));

const output = [1,2,3,4,5,6,7,8,9];
//for Each -Lock krva
console.log(output.forEach(element => console.log(element)));

//flat
let n1= [1, 2, [3, 4, [5, 6, [7, 8]]]];
let flatArray = n1.flat(2);
console.log(flatArray);

let flatArray1 = n1.flat(3);
console.log(flatArray1);

//flatmap
const arr1 = [1, 2, 3, 4];

const arr3 = arr1.flatMap((x) => [x * 2]);
console.log(arr3);
console.log([1, 2 , 3, 4].flatMap((x) => [x, x * 2]));  
console.log([1, 2, 3, 4].flatMap((x) => [ x * 2])); 

