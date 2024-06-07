"use strict";
//// Day 21
// Question # 61
var vechiletype;
(function (vechiletype) {
    vechiletype[vechiletype["car"] = 0] = "car";
    vechiletype[vechiletype["truck"] = 1] = "truck";
    vechiletype[vechiletype["motorcycle"] = 2] = "motorcycle";
})(vechiletype || (vechiletype = {}));
console.log(vechiletype.car);
let Stuents = {
    name: 'Qadeer',
    age: 25,
    courses: ['Math', 'English', 'Coding']
};
console.log(Stuents);
let circle = {
    kind: "circle",
    radius: 5,
};
let rectangle = {
    kind: "rectangle",
    height: 10,
    weight: 20,
};
console.log(circle);
console.log(rectangle);
//// Day 22
//// Question # 64
function combinestringAndnumber(text, number) {
    return text + number;
}
console.log(combinestringAndnumber('age: ', 32));
//// Question # 65
function remainder(num1, num2) {
    return num1 % num2;
}
console.log(remainder(5, 2));
//// Question # 66
function checkbothtrue(val1, val2) {
    return val1 && val2;
}
console.log(checkbothtrue(true, false));
//// Day 23
/// Question # 67
function arithimitic(numb, str) {
    return numb + str;
}
console.log(arithimitic(10, "5"));
/// Question # 68
function decimalNumber(number1, number2) {
    return (number1 * number2) * 100 / 100;
}
console.log(decimalNumber(0.2, 0.6));
/// Question # 69
function divideAndRemainder(dividend, divisor) {
    let Quotient = Math.floor(dividend / divisor);
    let Remainder = dividend % divisor;
    return { Quotient, Remainder };
}
console.log(divideAndRemainder(10, 3));
/// Day 24
/// Queston # 70
function printforwithlet() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
}
printforwithlet();
//// Question # 71 
/*
// Using `let` for a variable that can be reassigned
let age = 25;
age = 26; // Works fine because `let` allows reassignment
console.log(age); // Shows 26

// Trying to reassign a `const`-declared variable
const nameE = "Alice";
try {
    name = "Bob"; // This line will cause an error
} catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}
// This example illustrates that `const` prevents changing the variable once it's set.


//// Question # 72

// Demonstrating block scope
{
    let blockLet = "visible inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet); // Works fine here
    console.log(blockConst); // Also works fine here
}

try {
    console.log(blockLet); // This will fail
} catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}

try {
    console.log(blockConst); // This will also fail
} catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
// This shows that `let` and `const` keep variables safe inside the block where they're defined.


//// Day 25.
/// Question # 73

// This function shows how to assign and update variable values
// This function shows how to assign and update variable values
function updateVariable() {
    let number = 10; // Initially assigns the value 10
    console.log("Initial value:", number); // Logs the initial value

    number = 20; // Updates the value to 20
    console.log("Updated value:", number); // Logs the updated value
}

updateVariable();
*/
/// Question # 74
// This function swaps the values of two variables
function swapValues() {
    let a = 5, b = 10; // Initially, a is 5 and b is 10
    console.log("Before swap: a =", a, "b =", b);
    let temp = a; // Temporarily stores the value of a
    a = b; // Sets a to b's value
    b = temp; // Sets b to a's original value stored in temp
    console.log("After swap: a =", a, "b =", b); // Logs the swapped values
}
swapValues();
//// Question # 75
// This function uses compound assignment operators for different operations
function useCompoundOperators() {
    let x = 4; // Starts with x equal to 4
    console.log("Initial x:", x);
    x += 2; // Adds 2 to x
    console.log("After addition:", x); // Shows x after addition
    x -= 1; // Subtracts 1 from x
    console.log("After subtraction:", x); // Shows x after subtraction
    x *= 3; // Multiplies x by 3
    console.log("After multiplication:", x); // Shows x after multiplication
    x /= 2; // Divides x by 2
    console.log("After division:", x); // Shows x after division
}
useCompoundOperators();
// We simplify arithmetic operations on x using compound assignment operators, like a shortcut.
