//1. Write a JavaScript function that reverse a number.
function reverse_number(Number) {
    string = Number.toString();
    return string.split("").reverse().join("");
}
console.log(Number(reverse_number(123456789)));


//2. function alphabet_order(str)
function alphabet_order(str) {
    return str.split('').sort().join('');
}
console.log(alphabet_order("Welcome to 1Rivet. 1Rivet is multi-national  company"));


//3. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
function uppercase(str) {
    var array = str.split(' ');
    var word = [];
    for (var x = 0; x < array.length; x++) {
        word.push(array[x].charAt(0).toUpperCase() + array[x].slice(1));
    }
    return word.join(' ');
}
console.log(uppercase("i have learned something new today"));


//4. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function long(str) {
    str = str.split(" ")
    return str.sort((a, b) => b.length - a.length)[0]
}
console.log(long("The quick brown fox jumped over the lazy dog"));
console.log(long("I have learned something new today"));


//5. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function countVowel(str) {
    const count = str.match(/[aeiou]/gi).length;
    return count;
}
const result = countVowel("I have learned something new today");
console.log(result);


//6. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function LongCountryName(countries) {
    return countries.sort((c2, c1) => c1.length - c2.length)[0];
}
console.log(LongCountryName(["Maharastra", "Amdavad", "United States of America", "Goa", "Mumbai", "Maharastra"]));
console.log(LongCountryName(["Maharastra", "Amdavad", "Goa", "Mumbai", "Maharastra"]));


//7. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function divide(a, b) {
    console.log(divide = (a / b));
}

function Values(value1, value2, callback) {
    callback(value1, value2)
}
Values(22, 2, divide);


//8. Write a JavaScript function to get the function name.
function getFunctionName() {
    console.log(getFunctionName.name);
}
getFunctionName();


const getFunctionname = () => {
}
console.log(getFunctionname.name);


//1. Write a JavaScript function to retrieve all the values of an object's properties.
const person = {
    firstName: "Jaitry",
    lastName: "Patel",
    age: 21
}
console.log(Object.values (person));

//2. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
const arr = [ ["0", "a"], ["1", "b"], ["2", "c"], ["3", "d"], ["4", "e"] ]
const object = Object.fromEntries(arr);
console.log(object);


//3. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.
// const user = {
//     firstName: "Jaitry",lastName: "Patel",age: 21,emailid : "pateljaitry1122@gmail.com",village : "Vankal"
// }
function CopyObject(object) {
    const  Convert = Object.entries(object).map(([key, Values]) => [Values,key]);
    return Object.fromEntries(Convert);
}
const Copyresult = CopyObject({Name: "JaitryPatel",emailid : "pateljaitry1122@gmail.com",village : "Vankal"});
console.log(Copyresult);


//4. Write a JavaScript program to find the most frequent item of an array.
var arr1=[1,2,11,3,4,5,11,12,11,6,7,11,8,9,11,0,11,8,11,];
var index = 1;
var startindex = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 index++;
                if (startindex<index)
                {
                  startindex=index; 
                  item = arr1[i];
                }
        }
        index=0;
}
console.log(item+" ( " +startindex +" times ) ") ;


//5. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
const nums = [1, 2, 3, 4, 5, 1, 2, 3, 4, 11];
console.log([...new Set(nums)])


function Unique(Array) {
    let uniqueArray = [...new Set(Array)];
    console.log(uniqueArray);
}
const Array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 11];
Unique(Array);


//6. Write a JavaScript function to merge two arrays and removes all duplicates elements.
function getMerge(array1, array2) {
    let array = [...array1, ...array2];
    let uniquearray = [...new Set(array)];
    console.log(uniquearray);
}
const array1 = [1, 2, 3, 4 ,5];
const array2 = [11, 12, 13, 4 ,5];
getMerge(array1, array2);


//7. Write a JavaScript function to remove a specific element from an array.
let forDeletion = [2, 3, 5]
let array = [1, 2, 3, 4, 5, 3]
array = array.filter(item => forDeletion.includes(item))
console.log(array)


function removearr(arr, n) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== n) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
console.log(removearr([1, 2, 3, 4, 5, 6, 7, 8], 2, 9, 10, 11));


function removeArray(array, n) {
    const index = array.indexOf(n);
    if(index > -1) {
        array.splice(index, 1);
    }
    return array;
}
console.log(removeArray([1, 2, 3 , 4, 5, 6, 7, 8], 2, 9, 10, 11));


function removeSpecificElement(array,item) {
    let index = array.findIndex((element) => element === item);
    if (index != -1);
        array.splice(index, 1);
        return array;
}
console.log(removeSpecificElement(["Jaitry","jaitry","Chetu","Jemi","Om"],"Jemi"));

//8. Write a JavaScript function to get a random item from an array.[1,2,3,4,5,6,7,8,9,10]
function randomitem(items) { 
return items[Math.floor(Math.random()*items.length)];  
}
var items = [1,2,3,4,5,6,7,8,9,10];
console.log(randomitem(items));

//9. Write a JavaScript function to filter false, null, 0 and blank values from an array.[58, '', 'abcd', true, null, false, 0]
function filterarray(arr) {
    arr = arr.filter(Filter);
    return arr;
}
function Filter(value) {
    if (value!== false || value!== null || value!== 0 || value!== "") {
        return value;
    }
}
const filterresult = filterarray([58, '', 'abcd', true, null, false, 0]);
console.log(filterresult);


/*function Filter(array) {
    return array.filter(Boolean);
}
const Filterresult  = Filter([58, '', 'abcd', true, null, false, 0]);
console.log(Filterresult);*/