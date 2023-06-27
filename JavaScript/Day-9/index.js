//SetInterval
function Display() {
    console.log("Hello World");
}
setInterval(Display, 5000);

function FunctionStop() {
    clearInterval(Display);
}


//SetInterval
const myInterval = setInterval(myTimer, 5000);
function myTimer() {
  const date = new Date();
  console.log(date.toLocaleTimeString());
}

function myStopFunction() {
  clearInterval(myInterval);
}


//SetTimeOut
let myData = document.querySelector("#myData");

function welcome() {
  console.log('Welcome My website');
}

function startTimer(){
 console.log('loading data.....');
  setTimeout(welcome, 1000)
}


//SetInterval
let mydata = document.querySelector("#mydata");
let num = 0;
let timerRefrence;
function startTimer() {
  console.log('loading data.....');
  timerRefrence = setInterval(() => {
    console.log('I am guessing your Lucky Number Is it ${num}');
    num++;
  }, 1000)
}
function stopTimer() {
  clearInterval(timerRefrence);
}


function myDisplayer(some) {
  console.log(some);
}
function myFirst() {
  myDisplayer("Hello");
}
function mySecond() {
  myDisplayer("Goodbye");
}
myFirst();
mySecond();


// //SetTimeOut
function taskOne() {
  console.log("task 1");
}
function taskTwo() {
  console.log("task 2");
}
setTimeout(taskOne, 2000);
taskTwo();


// function
function greet(name, callback) {
  console.log('Hi' + ' ' + name);
  callback();
}
// callback function
function callMe() {
  console.log('I am callback function');
}
greet('Jaitry', callMe);

const promiseA = new Promise((resolve, reject) => {
  resolve(777);
});
promiseA.then((val) => console.log("asynchronous logging has val:", val));
console.log("immediate logging");

//Set Interval & Clear Interval
const myInterval1 = setInterval(myTimer, 1000);
function myTimer() {
    const date = new Date();
    // console.log(date);
}
// date.toLocaleTimeString();
function myStopFunction() {
    clearInterval(myInterval1);
}

//Set Timeout & Clear TimeOut
const myTimeOut = setTimeout(Wish, 3000);
function Wish() {
    console.log("Happy Birthday!");
}
function StopFunction() {
    clearTimeout(myTimeOut)
}

//CallBack Function
function mYDisplayer(some) {
    console.log(some);
}
function myFirst() {
    mYDisplayer("Hello");
}
function mySecond() {
    mYDisplayer("Goodbye");
}
myFirst();
mySecond();

mySecond();
myFirst();


function myDisplayers(some) {
    console.log(some);
}
function mycalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
console.log(mycalculator(11,24) );


function myDisplay(someone) {
    console.log(someone);
}
function calculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback (sum);
}
calculator(11,11, myDisplay);


//Set Interval With callback
setTimeout(function() {
    myFunction("Hello World!"); }, 3000);
function myFunction(value) {
    console.log(value);
}


//Promise
let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() {
        myResolve("How are You?");}, 3000);
});
myPromise.then(function(value) {
    console.log(value);
});

//Promise Constructor
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('Jaitry');
    }, 100);
});
promise1.then((value) => {
    console.log(value);
});
console.log(promise1);


//Promise Chain
const c1 = new Promise ((resolve,reject) => {
    resolve('Winner');
});
c1.then((value) => {
    console.log(value);
});


const c2 = new Promise ((resolve,reject) => {
    throw new Error('Ohh');
});
c2.catch((error) => {
    console.log(error);
});


function checkMail() {
    return new Promise((resolve,reject) => {
        if (Math.random() > 0.5) {
            resolve('Mail arrived');
        } else {
            reject(new Error ('Not arrived'));
        }
    });
}
checkMail().then((mail) => {
    console.log(mail);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log('Complete');
})


//Promise.all()
const promise2 = Promise.resolve(11);
const promise3 = 24;
const promise4 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 100, 'Chetu');
});
Promise.all([promise2, promise3, promise4]).then((values) => {
    console.log(values);
});


const p1 = Promise.resolve(17);
const p2 = 2;
const p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Jetu");},100);
});
Promise.all([p1, p2, p3]).then((values) => {
    console.log(values);
});


const Pro1 = Promise.all([1,2,3]);
const Pro2 = Promise.all([1,2,3,Promise.resolve(111)]);
const Pro3 = Promise.all([1,2,3,Promise.reject(222)]);
setTimeout(() => {
    console.log(Pro1);
    console.log(Pro2);
    console.log(Pro3);
})

const P1 = Promise.all([1,2,3]);
const P2 = Promise.all([1,2,3,Promise.reject(111)]);
const P3 = Promise.all([1,2,3,Promise.reject(222)]);
setTimeout(() => {
    console.log(P1);
    console.log(P2);
    console.log(P3);
})


//Promise.allSettled()
const s1 = Promise.resolve(11);
const s2 = new Promise((resolve,reject) => setTimeout(reject, 101, Je2));
const Pros = [s1, s2];
Promise.allSettled(Pros).then((results) => results.forEach((result) => console.log(result.status)));


Promise.allSettled([Promise.resolve(11),new Promise((resolve) => setTimeout(() => resolve(22), 0)),
66,Promise.reject(new Error("error")),]).then((values) => console.log(values));


//Promise.any()
const a1 = Promise.reject(0);
const a2 = new Promise ((resolve) => setTimeout(resolve,101,'Fast'));
const a3 = new Promise ((resolve) => setTimeout(resolve,501,'Normal'));

const Promises = [a1, a2 ,a3];
Promise.any(Promises).then((value) => console.log(value));


const PErr = new Promise((resolve,reject) => {
    setTimeout("Always Fails");
});
const PSlow = new Promise((resolve,reject) => {
    setTimeout(resolve,500,"Done eventually");
});
const PFast = new Promise((resolve,reject) => {
    setTimeout(resolve,500,"Done Fast");
});
Promise.any([PErr, PSlow, PFast ]).then((value) => {
    console.log(value);
})


//Promise.race()
const r1 = new Promise((resolve,reject) => {
    setTimeout(resolve, 500, 'one');
});
const r2 = new Promise((resolve,reject) => {
    setTimeout(resolve, 100, 'two');
});
Promise.race([r1,r2]).then((value) => {
    console.log(value);
});
