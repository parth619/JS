// ==============================
// JavaScript Data Types
// ==============================

// ---------- 1. Primitive Data Types ----------

// String
let name = "Parth"; // text data
console.log("String:", name, "| Type:", typeof name);

// Number
let age = 20;       // integer
let pi = 3.14;      // floating-point
console.log("Number (int):", age, "| Type:", typeof age);
console.log("Number (float):", pi, "| Type:", typeof pi);

// BigInt (for very large numbers)
let bigNumber = 123456789012345678901234567890n;
console.log("BigInt:", bigNumber, "| Type:", typeof bigNumber);

// Boolean (true/false)
let isStudent = true;
let hasJob = false;
console.log("Boolean true:", isStudent, "| Type:", typeof isStudent);
console.log("Boolean false:", hasJob, "| Type:", typeof hasJob);

// Undefined (declared but not assigned)
let score;
console.log("Undefined:", score, "| Type:", typeof score);

// Null (represents intentional empty value)
let emptyValue = null;
console.log("Null:", emptyValue, "| Type:", typeof emptyValue); // Special case: typeof null → object

// Symbol (unique identifier)
let id = Symbol("uniqueId");
console.log("Symbol:", id, "| Type:", typeof id);


// ---------- 2. Non-Primitive (Reference) Data Types ----------

// Object (collection of key-value pairs)
let person = {
  name: "Parth",
  age: 20
};
console.log("Object:", person, "| Type:", typeof person);

// Array (special type of object, ordered list)
let fruits = ["apple", "banana", "mango"];
console.log("Array:", fruits, "| Type:", typeof fruits);

// Function (block of reusable code)
function greet() {
  return "Hello World!";
}
console.log("Function output:", greet(), "| Type:", typeof greet);

// Date (built-in object for handling dates & times)
let today = new Date();
console.log("Date:", today, "| Type:", typeof today);


// ==============================
// Summary:
// Primitive → String, Number, BigInt, Boolean, Undefined, Null, Symbol
// Non-Primitive → Object, Array, Function, Date (all are objects)
// ==============================
