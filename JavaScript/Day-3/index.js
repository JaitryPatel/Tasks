//JavaScript Task-3  Date-21/03/2023
//1) Write a JavaScript function that reverse a number.
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));


function ReverseNumber(num) {
  return (
    parseFloat(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    )
  )
}

console.log(ReverseNumber(12345))
console.log(ReverseNumber(67891))

//2) Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
function CheckPrimeNumber(n) {

  if (n === 1) {
    return false;
  }
  else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(CheckPrimeNumber(24));
console.log(CheckPrimeNumber(11))
//3) Write a JavaScript function which accepts an argument and returns the type.
function dataType(variable) {
  type = typeof variable;
  console.log("Data type is: " + type)
}

let a = {
  'name': 'JaitryPatel',
  'age': 21,
  'gender': 'Female',
  'hobbies': '[Reading a books,Listening a Music]',
  'Birth Date': '11/02/2023'
}
dataType(a);

//4) Write a Javascript function which accepts string an argument and returns reverse string.
function ReverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
console.log(ReverseString('Hello World'));
console.log(ReverseString('I Love My India'));

// Display Today Day
  let day = 3;
  let dayName;

switch (day) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}
console.log(dayName);