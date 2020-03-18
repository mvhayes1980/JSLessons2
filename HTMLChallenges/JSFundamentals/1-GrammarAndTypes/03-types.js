//Boolean
let on= true;
console.log(on);

let off = false;
console.log(off);

//Null
let empty = null;//no value, but not undefined; simply holds nothing; it has a nothing value

/*
Null and undefined are different
*/

//Undefined
let undef = undefined;//same as let undef -- declaration, no initialization

//Numbers
let degrees = 90;
let precise = 999999999999999;

console.log(precise);

let toomuch = 9999999999999999n;//PROBLEM with JS rounding after 16

console.log(toomuch);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

console.log ( typeof toomuch);

let stringOne = 'single quotes';
let stringTwo = "double quotes";
let stringThree = `backticks`;

//Addition
let first = 1050 + 10;
//Concatenation
let second = "1050" + "10";


console.log(first, second);

let third = "1050" + 10;

console.log(third);
console.log(typeof third);

/*
CHALLENGE
Set 7 (or 8) variables:
firstName
lastName
houseNumber
aptNumber (if applicable)
street
city
state
zipcode
Set each variable to its respective type.
console.log your whole address (with the space between variable).
Collapse
*/

const firstName = "Mike";
let lastName = "Hayes";
var houseNumber = 5406;
var street = "Kenwood Ave.";
var aptNumber = 1;
var city = "Indianapolis";
var state = "Indiana";
var zipcode = 46208;    

console.log(firstName + ` ` + lastName + ` ` + houseNumber + ` ` + aptNumber + ` ` + street + ` ` + city + ` ` + state + ` ` + zipcode);

let firstObject = {
    integer: 50,
    firstString: 'hello world',
    isRemote: true
};

console.log(firstObject);
console.log(typeof firstObject);

let firstArray = ["Spanish", "English", "French", "Chinese"]

let alternateForm = {
    0: "Spanish",
    1: "English",
    2: "French",
    3: "Chinese"
};

console.log(firstString[0]);

//String interpolation $ {}
console.log(`${firstName} ${lastName}, ${houseNumber} ${street} ${aptNumber} ${city} ${state} ${zipcode}`);