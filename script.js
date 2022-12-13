/*Learning Javascript ---
Learn about data type
1.Primitive data type

   (1.Number 
    2.String
    3.Boolean)
    4.Undefined
    5.Null 
    6.Symble 
    7.Bigint 
    8.object)

2.Non primitive Data type(object)
*/

//String
let myName = "Jatin Tripura";
console.log(myName);
let myHometown = "Khagrachari";
console.log(myHometown);

//Number
let myId = 456789;

console.log(myId);
let myAge = 20;
console.log(myAge);

//Boolean
let isCoder = true;
console.log(isCoder);

//Undefined
let myVillage;
console.log(myVillage);

//Null
let myEarn = null;
console.log(myEarn);

// The typeof Operator.
console.log(typeof myName);
console.log(typeof myId);
console.log(typeof isCoder);
console.log(typeof myVillage);
console.log(typeof myEarn);

// like a object datatype..but not a object.
//Declare a Variable
// 1.let
// 2.const
// 3.var
// about let 
/* The let keyword was introduced in ES6 (2015).
Variables defined with let cannot be Redeclared.
Variables defined with let must be Declared before use.
Variables defined with let have Block Scope.*/
let x = "Jatin Tripura";
console.log(x);

 x = 0;
console.log(x);
//about const
/*The const keyword was introduced in ES6 (2015).
Variables defined with const cannot be Redeclared.
Variables defined with const cannot be Reassigned.
Variables defined with const have Block Scope.

Always declare a variable with const when you know that the value should not be changed.*/
const PI = 3.1416;
console.log(PI);
//PI = 3.444;
//console.log(PI);
//Now about var 
/*The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.

*/
var myVarsity = "Hajee Mohammad Danesh Science and Technology University";
console.log(myVarsity);
myVarsity = "HSTU"
console.log(myVarsity);
//Learn about Js operators
//There are different types of JavaScript operators:
/*1.Arithmetic Operators
2.Assignment Operators
3.Comparison Operators
4.Logical Operators
5.Conditional Operators
6.Type Operators
*/

//Learn about Arithmetic Operators
/*
1.Addition        -     +
2.Subtraction     -     -
3.Multiplication  -     *
4.Division        -     /
5.Modulus         -     %
6.Exponentiation  -     **
7.Increment       -     ++
8.Decrement       -     --
*/

//Learn about Addition operator
let p = 10;
let y = 20;
let z = p + y;
console.log(z);

// Subtraction(-)
let myAgee = 20;
let sister = 18;
let sub = myAgee - sister;
console.log(sub);

//Learn about Multiplication operator
let bigAge = 100;
let smallAge = 50;
let multi = bigAge * smallAge;
console.log(multi);

//Learn about Division operator
let hstu = 500;
let nstu = 300;
let rank = hstu / nstu;
console.log(rank);

//Learn about Modulus  operator
let du = 100;
let cu = 100;
let mod = du % cu;
console.log(mod);

//Learn about Exponentiation operator
let co = 100;
let ju = 100;
let exp = co ** ju;
console.log(exp);

//Learn about Increment  operator
let mom = 100;
mom++;
console.log(mom);

//Learn about Decrement  operator
let dad = 100;
dad--;
console.log(dad);

//Assignment Operators
/*
=	      x = y	       x = y
+=	      x += y	   x = x + y
-=	      x -= y	   x = x - y
*=	      x *= y	   x = x * y
/=	      x /= y	   x = x / y
%=	      x %= y	   x = x % y
**=	      x **= y	   x = x ** y
*/

let btn = 500;
btn +=100;
console.log(btn);

let btnOne = 500;
btnOne -= 100;
console.log(btnOne);

let btnTwo = 500;
btnTwo *= 100;
console.log(btnTwo);

let btnThree = 500;
btnThree /= 100;
console.log(btnThree);

let btnFour = 500;
btnFour %= 100;
console.log(btnFour);

let btnFive = 500;
btnFive **= 100;
console.log(btnFive);











