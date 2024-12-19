let hello = " Hello word ";

let message;

//cop 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world

let userName;
let test123;
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

//uppercase constants
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

//data types

let message1 = "hello";
message1 = 123456;
alert();

let age = prompt("How old are you?", 100);

alert(`You are ${age} years old!`); // You are 100 years old!

// Boolean is the result

alert(2 > 1); // true (correct)
alert(2 == 1); // false (wrong)
alert(2 != 1); // true (correct)

// conditional branching:if ?

let year = prompt(
  "In which year was ECMAScript-2015 specification published?",
  ""
);

if (year == 2015) alert("You are right!");

// The"else" clause

let year1 = prompt(
  "In which year was the ECMAScript-2015 specification published?",
  ""
);

if (year == 2015) {
  alert("You guessed it right!");
} else {
  alert("How can you be so wrong?"); // any value except 2015
}

//several condition:"else if"

let year2 = prompt(
  "In which year was the ECMAScript-2015 specification published?",
  ""
);

if (year < 2015) {
  alert("Too early...");
} else if (year > 2015) {
  alert("Too late");
} else {
  alert("Exactly!");
}

// conditional operetor "?"

let accessAllowed;
let age1 = prompt("How old are you?", "");

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

let accessAllowed1 = age > 18;

// multiple "?"

let age2 = prompt("age?", 18);

let message3 =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";

alert(message);

// Non-traditional use of '?'

let company1 = prompt("Which company created JavaScript?", "");

company == "Netscape" ? alert("Right!") : alert("Wrong.");

let company = prompt("Which company created JavaScript?", "");

if (company == "Netscape") {
  alert("Right!");
} else {
  alert("Wrong.");
}

//  functions

let age3 = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now