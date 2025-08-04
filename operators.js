// operators 

// * Arithmetic Operator

// add +
// sub -
// mul * 
// div /
// modlusu %
// exponent **
// increment ++
// decrement --

let a = 50;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

let c = 10;
c++
console.log(c);

let d = 10;
d--
console.log(d);

// * Assignment Operators
let as = 10;
as += 10;
console.log(as);

// * Comparison Operator

// < 
// > 
// <=
// >=

let le = 10;
let ss = 10;
console.log(le<ss);
console.log(le>ss);
console.log(le<=ss);
console.log(le>=ss);

// * Logical Operators
// && --> and 
// || --> or
//  ! --> not

let no = 10;
let ot = 10;
console.log(no!=ot);

// * strict Operators

// == --> loose equality / double equal
// === -> strict equality / triple equal

let str = "10";
let num = 10;
console.log(str == num);
console.log(str === num);

// * Ternary Operators
// syntax 

// variable name=(condition)? "true value": "false value"

let age = 100;
let result = (age>=18 && age<=100)? "he is eligible to vote" : "he is not eligible to vote"
console.log(result);

let mark = 600;
let rank = (mark >=35 || mark <=100)? "pass": "fail"
console.log(rank);
