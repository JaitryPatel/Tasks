//JavaScript Task-2        Date- 20/03/2023

//1.Create an object to hold information about you.It should have properties for name (string), age(number), gender(string) and hobbies (array of strings)

const mydetails =  {
    'name' : 'JaitryPatel',
    'age' : 21,
    'gender' : 'Female',
    'hobbies' : '[Reading a books,Listening a Music]' ,
}
console.log(mydetails);


//2.
const sampleObject = {
    a : "test" ,
    b : 12,
    c : true,
    }

    //Write a function to get an array of sampleObject keys.
    const keys = Object.keys(sampleObject);
    console.log(keys);

    //Write a function to get an array of sampleObject values.
    const values = Object.values(sampleObject);
    console.log(values);

    //Write a function to get an array of sampleObject key-value pairs.
    console.log(sampleObject);


//3.Write a function to check if given property exists in an object.
const mydetails1 =  {
    'name' : 'JaitryPatel',
    'age' : 21,
    'gender' : 'Female',
    'hobbies' : '[Reaing a books,Listening a Music]' ,
}
let gender = mydetails1.hasOwnProperty('gender');
console.log(gender);


//4. Write a function to check if an object is empty.
function isObjEmpty (Obj) {
    return Object.keys (Obj).length === 0;
}

var myemptyObject = {};
var myobject = {"Apple": "Rose-Apple"}

console.log(isObjEmpty(myemptyObject))
console.log(isObjEmpty(myobject))
 
 
//5. Write a program to demonstrate Explicit Type Conversion (Type Casting).
let result;

// string to number
result = Number('324');
console.log(result);

result = Number('324e-1')  
console.log(result);

// boolean to number
result = Number(true);
console.log(result); 

result = Number(false);
console.log(result);