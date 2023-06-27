//Array
const shopping = ['bread', 'Milk', 'Cheese','Bornvita', 'noodles'];
console.log(shopping);

//lenth
console.log(shopping.length);

//index 
console.log(shopping[0]);
console.log(shopping[1]);
console.log(shopping[2]);
console.log(shopping[3]);
console.log(shopping[4]);

shopping[0] = 'Sabudana';
console.log(shopping);

//IndexOf
const birds = ['Parrot', 'Owl', 'Picock'];
console.log(birds.indexOf('Parrot'));
console.log(birds.indexOf('Rabbit'));

//Push-Add in the Last
const Cities1 = ['Amdavad', 'Mumbai', 'Navsari'];
Cities1.push('Valsad', 'Chikhli');
console.log(Cities1);
console.log(Cities1.length);

//Pop-Remove in the Last
const Cities2 = ['Amdavad', 'Mumbai', 'Navsari'];
Cities2.pop();
console.log(Cities2);

const RemoveCity = Cities2.pop();
console.log(RemoveCity);

//Unshift- Add in the Start
const Cities3 = ['Amdavad', 'Mumbai', 'Navsari'];
Cities2.unshift('Saputara')
console.log(Cities3);

//shift- Remove in the Start
const Cities4 = ['Amdavad', 'Mumbai', 'Navsari'];
Cities4.shift()
console.log(Cities4);

//splice
const student = ['Jaitry', 'Om', 'Jeel' , 'Khushi'];
const index = student.indexOf('Om');
if (index !== -1) {
    student.splice(index,2);
}
console.log(student);

const student1 = ['Jaitry', 'Om', 'Jeel' , 'Khushi'];
if (index !== -1) {
    student1.splice(index,1);
}
console.log(student1);

//for of 
const birds1 = ['Parrot', 'Owl', 'Sparow'];
for (const bird of birds1);
console.log(birds1);

//Coverting Array To String
console.log(birds1.toString());

//map
function double(number) {
    return number*2;
}
const numbers =[5,2,7,6];
const doubled = numbers.map(double);
console.log(doubled);

//filter 
function Long(city) {
    return city.length >6;
}
const City = ["Amdavad", "Maharastra","Goa", "Mumbai", "Arvali"]
const longer = City.filter(Long);
console.log(longer);

console.log(Array.of('Jaitry', 11, 'Chinu', true, false));
console.log(Array.of());



//String

//anchor tag
const myString = "Table of Contents";
console.log(myString.anchor("contents_anchor"));

//small,big, fontsize tag
const worldString = "Hello, world";
console.log(worldString.small());
console.log(worldString.big());
console.log(worldString.fontsize(7));

//blink, bold, italics,strike tag
const worldStrings = "Hello, world";
console.log(worldStrings.blink()); 
console.log(worldStrings.bold()); 
console.log(worldStrings.italics()); 
console.log(worldStrings.strike()); 

//Char At
const  text = "HELLO WORLD";
const letter = text.charAt(0);
console.log(letter);

const letter1 = text.charAt(1);
console.log(letter1);

//Include
let txt = "Hello world, welcome to the universe.";
let result = txt.includes("world");
console.log(result);

let txt1 = "Hello world, welcome to the universe.";
let result1 = txt.includes("world,12");
console.log(result1);

//Indexof
let str = "Hello world, welcome to the universe.";
let output = str.indexOf("Welcome");
console.log(output);

let str1 = "Hello world, welcome to the universe.";
let output1 = str1.indexOf("e");
console.log(output1);

//lastIndexog
let String = "Hello planet earth, you are a great planet.";
let r1 = String.lastIndexOf("planet");
console.log(r1);

let String1 ="Hello planet earth, you are a great planet.";
let r2 = String1.lastIndexOf("Planet");
console.log(r2);

//length
let long = String1.length;
console.log(long);

//Repeat
const  hi = "HELLO WORLD. ";
const h1 = hi.repeat(2);
console.log(h1);

//Replace
let my = "Visit Microsoft!";
let m1 = my.replace("Microsoft", "W3Schools");
console.log(m1);

//Search
let t = "Mr. Blue has a blue house";
let t1 = t.search("Blue");
console.log(t1);

//Slice
let t2 = t.slice(0,8);
console.log(t2);

//split
let world = "How are you doing today?";
const myArray = world.split(" ");
console.log(myArray);

//StartsWith
let hello = "Hello world, welcome to the universe.";
let Arr = hello.startsWith("Hello");
console.log(Arr);

//toUpperCase
let upper = hello.toUpperCase();
console.log(upper);

//toLowerCase
let lower = hello.toLowerCase();
console.log(lower);



