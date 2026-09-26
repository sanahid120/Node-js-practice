// A constant binding cannot be reassigned. Use const by default when possible.
const PI = 3.14159;

// Numbers include integers and decimals. JavaScript uses one Number type for both.
const age = 24;
console.log(age); // Prints: 24
const price = 19.99;
console.log(price); // Prints: 19.99

// null means "intentionally empty"; undefined usually means "not assigned".
const a = null;
let b; // b is undefined because it has been declared but not given a value.

// Declare variables with const or let. Bare assignments create accidental globals
// in some script contexts and throw errors in strict mode or ES modules.
let isStudent = true;
let isGraduated = false;
console.log(isStudent); // Prints: true
console.log(isGraduated); // Prints: false
console.log('The value of a is: ' + a); // String concatenation prints "null".
console.log('The value of b is: ' + b); // String concatenation prints "undefined".
console.log(4 + 5); // Addition evaluates to 9; it does not refer to an undefined c.

// A string is text. Strings can use single quotes, double quotes, or backticks.
let fullName = 'Alice';
console.log(fullName);

{
    let a = 10; // let is block-scoped; this a exists only inside these braces.
    console.log(a); // Prints: 10. This inner a shadows the outer const a.
}

{
    let a = 20; // A separate block can declare its own variable with the same name.
    console.log(a); // Prints: 20.
}
console.log(a); // Prints: null; the block-scoped declarations did not change it.
console.log(typeof fullName); // Prints: "string"; typeof reports a value's type.

// BigInt represents integers larger than Number can represent exactly.
// Use a string or an n-suffixed literal to avoid rounding before conversion.
let x = BigInt('9007199254740991');
console.log(x);
console.log(typeof x);

// Symbols are unique identifiers, often used as non-colliding object keys.
let y = Symbol('id');
console.log(y);
console.log(typeof y);

// Arrays are ordered, zero-indexed lists. Their length is the item count.
const students = ['Alice', 'Bob', 'Charlie'];
console.log(students);
console.log(typeof students); // "object"; use Array.isArray(students) to identify arrays.

// Objects store named properties as key-value pairs.
const student = {
    name: 'Alice',
    age: 24,
    isGraduated: false
};
console.log(student);
console.log(typeof student);

// Read an object property with dot notation or bracket notation.
console.log(student['name']); // Prints: Alice. Brackets also allow dynamic keys.

console.log(student.name); // Also prints: Alice.

// Browser input/output examples (uncomment only in a browser):
// const name = prompt('Enter your name:'); // prompt returns text, or null if cancelled.
// alert(`Hello, ${name}!`); // Template literals interpolate values with ${...}.

// A for loop repeats while its condition is true. continue skips this iteration;
// break exits the loop. Strict equality (===) avoids automatic type conversion.
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip printing 2 and move to the next iteration.
    }
    if (i === 4) {
        break; // Stop before printing 4.
    }
    console.log(i); // Prints: 0, 1, 3.
}

// for...of visits values in an iterable such as a string or array.
let str = 'Hello, World!';
for (let i of str) {
    console.log(i); // Prints one character per iteration.
}

// ============================================================================
// JAVASCRIPT NOTES: A STRUCTURED BEGINNER-TO-INTERMEDIATE REFERENCE
// These notes and example snippets are comments, so they do not run.
// ============================================================================

// 1. WHAT JAVASCRIPT IS
// JavaScript is a dynamically typed language used in browsers and other runtimes.
// The browser provides APIs such as the DOM, prompt, and fetch; Node.js provides
// APIs such as process, filesystem access, and server networking. Those APIs are
// runtime features, not all part of the core JavaScript language.
// JavaScript runs one piece of synchronous code at a time per thread, while its
// event loop coordinates timers, I/O, and promise callbacks.

// 2. VARIABLES, SCOPE, AND TYPES
// const: binding cannot be reassigned; object/array contents can still be changed.
// let: block-scoped binding that can be reassigned.
// var: function-scoped legacy declaration; avoid it in new code.
// Prefer const, use let when reassignment is needed, and avoid undeclared names.
// A block is the code between braces. let and const declared inside are local to it.
// A function creates its own scope. Inner scopes can read outer bindings.
// Shadowing means an inner scope declares a name that also exists outside it.
// Hoisting describes declarations being processed before execution; var is
// initialized to undefined, while let/const cannot be read before initialization.

// Primitive values: string, number, bigint, boolean, undefined, symbol, null.
// Objects are reference values; arrays and functions are objects too.
// typeof null is the historical result "object"; check null with value === null.
// NaN means "not a number" and has type number. Use Number.isNaN(value) to test it.
// Number.isFinite(value) checks for a finite number without coercion.
// Conversion examples: Number('12'), String(12), Boolean(value), parseInt('12', 10).
// Boolean false-like values: false, 0, -0, 0n, '', null, undefined, NaN.
// Most other values, including [] and {}, are truthy.

// Example:
 const label = 'Score';
 let score = 10;
 score += 2; // equivalent to score = score + 2
 console.log(`${label}: ${score}`); // Score: 12

// 3. OPERATORS AND EXPRESSIONS
// Arithmetic: +, -, *, /, %, **. Increment/decrement: ++, --.
// Assignment: =, +=, -=, *=, /=. Comparison: ===, !==, <, <=, >, >=.
// Prefer === and !==; == and != perform type coercion and can surprise beginners.
// Logical: && (and), || (or), ! (not), ?? (fallback only for null/undefined).
// Ternary: condition ? valueWhenTrue : valueWhenFalse.
// && and || short-circuit and return one of their operands, not always a boolean.
// Use parentheses when operator precedence would make an expression unclear.
// + can add numbers or concatenate strings; template literals are often clearer.

// 4. CONDITIONS
// if / else if / else selects which block to execute.
// switch compares a value against case labels; break prevents fall-through.
// A conditional expression (ternary) is useful for a short choice, not long logic.
// Guard clauses handle invalid or special cases early and reduce nesting.

// Example:
 const temperature = 18;
 if (temperature >= 25) {
     console.log('Warm');
 } else if (temperature >= 15) {
     console.log('Mild');
 } else {
     console.log('Cool');
// }
 const access = age >= 18 ? 'adult' : 'minor';

// 5. LOOPS
// for: use when initialization, condition, and update are useful together.
// while: repeats while a condition stays true; ensure the condition can change.
// do...while: runs its body at least once before checking the condition.
// for...of: iterates values from arrays, strings, maps, sets, and other iterables.
// for...in: iterates enumerable property names; generally avoid it for array values.
// break exits a loop; continue skips to its next iteration.
// Array methods such as map, filter, and reduce are often expressive alternatives.

// Example:
 for (let count = 1; count <= 3; count++) console.log(count);
 for (const item of ['pen', 'book']) console.log(item);

// 6. FUNCTIONS
// Functions package reusable behavior. Parameters are inputs; return gives output.
// A function without return returns undefined. return also ends that function call.
// Function declaration: function declarations are hoisted within their scope.
// Function expression: a function stored in a variable.
// Arrow function: concise syntax; it inherits this from the surrounding scope.
// Default parameters provide a value when an argument is omitted or undefined.
// Rest parameters (...values) collect remaining arguments into an array.
// Callback: a function passed to another function to be called later.
// Closure: a function retains access to variables from where it was created.

// Example:
 function add(first, second = 0) {
     return first + second;
 }
 const double = value => value * 2;
 console.log(add(3, 4), double(5)); // 7 10

// 7. ARRAYS
// Arrays are ordered and zero-indexed: first item at index 0; last at length - 1.
// Read/write: items[0], items[items.length - 1]. Add to end: items.push(value).
// Remove from end: items.pop(). Add/remove at front: unshift(value), shift().
// includes(value) tests membership; indexOf(value) returns an index or -1.
// slice(start, end) returns a shallow copy without changing the original.
// splice(start, count, ...items) changes the original array.
// forEach runs a callback for each item; its return value is ignored.
// map transforms each item into a new array of the same length.
// filter returns a new array containing items that pass a test.
// find returns the first matching item; findIndex returns its index.
// some checks whether any item passes; every checks whether all items pass.
// reduce combines items into one result; provide an initial accumulator value.
// sort mutates the array; use a numeric comparator for numbers.
// Spread [...items] makes a shallow copy; nested objects are still shared.

// Example:
 const numbers = [1, 2, 3, 4];
  const doubled = numbers.map(number => number * 2);
 const evens = numbers.filter(number => number % 2 === 0);
 const total = numbers.reduce((sum, number) => sum + number, 0);
 const ascending = [...numbers].sort((left, right) => left - right);

// 8. OBJECTS
// Objects hold properties. Use dot access for known names, brackets for dynamic ones.
// Add/change: object.key = value. Remove: delete object.key (use sparingly).
// Object.keys/values/entries return arrays of keys, values, or [key, value] pairs.
// Destructuring extracts properties: const { name } = person.
// Spread {...person} makes a shallow copy and can combine/override properties.
// Methods are functions stored on objects. 'this' depends on how a function is called.
// Object shorthand: { name } is equivalent to { name: name }.
// Optional chaining (person.address?.city) safely stops on null/undefined.
// Nullish coalescing (value ?? fallback) uses fallback only for null/undefined.

// Example:
 const person = { name: 'Ari', address: { city: 'London' } };
 const { name } = person;
 const city = person.address?.city ?? 'Unknown';
 const updatedPerson = { ...person, name: 'Sam' };

// 9. MAPS AND SETS
// Map stores key-value pairs and allows keys of any type. Use set/get/has/delete.
// Map preserves insertion order; map.size gives its number of entries.
// Set stores unique values. Use add/has/delete; set.size gives item count.
// Use Map for lookup tables when keys are not just object property strings.
// Use Set for uniqueness or fast membership checks.

// Example:
 const visits = new Map();
  visits.set('home', 3);
 console.log(visits.get('home'), visits.has('home'));
 const uniqueTags = new Set(['js', 'web', 'js']);
 console.log([...uniqueTags]); // ['js', 'web']

// 10. STRINGS AND NUMBERS
// Strings are immutable; methods return new strings rather than changing one.
// Useful string methods: includes, startsWith, slice, trim, toLowerCase, split.
// Template literal: `Hello, ${name}` supports interpolation and multiple lines.
// Useful number tools: Number(), Number.isInteger(), Number.isFinite(), Math.round().
// Floating-point calculations can have tiny precision errors; avoid exact decimal
// equality for money. Store currency in integer minor units (for example, cents).

// 11. INPUT AND OUTPUT
// Browser output: console.log(value), alert(message), update a DOM element.
// Browser input: prompt(message) returns a string or null; convert and validate it.
// Node.js output: console.log(value); command-line arguments are in process.argv.
// Node.js input can use readline/promises or process.stdin.
// User input is untrusted: validate type, range, and format before using it.
// prompt, alert, document, and window are browser APIs, not available in plain Node.

// Browser example:
 const rawAge = prompt('How old are you?');
 const parsedAge = Number(rawAge);
 if (rawAge !== null && Number.isInteger(parsedAge) && parsedAge >= 0) {
     console.log(`Next year you will be ${parsedAge + 1}.`);
 } else {
     console.log('Please enter a valid non-negative whole number.');
 }

// 12. ERRORS AND DEBUGGING
// Use console.log/console.table for simple inspection and browser/Node debuggers
// for breakpoints, stepping, and inspecting values.
// throw new Error('message') reports a failure; try/catch handles expected failures.
// finally runs whether the try block succeeds or throws.
// Validate assumptions close to where data enters your program.

// Example:
try {
     const result = JSON.parse('{"active": true}');
     console.log(result.active);
 } catch (error) {
     console.error('Could not parse JSON:', error.message);
 }

// 13. ASYNCHRONOUS JAVASCRIPT
// setTimeout(callback, milliseconds) schedules work; it does not pause the program.
// A Promise represents a value that may be available later: pending, fulfilled,
// or rejected. Use .then/.catch or async/await to work with promises.
// async functions always return a Promise. await pauses that async function until
// a promise settles; it does not block the whole JavaScript runtime.
// fetch(url) makes an HTTP request in browser and modern Node runtimes. Check
// response.ok because HTTP error statuses do not usually reject the fetch promise.
// Promise.all runs independent promises together and rejects if any rejects.

// Example:
 async function loadUser(url) {
     try {
         const response = await fetch(url);
         if (!response.ok) throw new Error(`HTTP ${response.status}`);
         return await response.json();
     } catch (error) {
         console.error('Loading user failed:', error.message);
         return null;
     }
 }

// 14. DOM BASICS (BROWSER)
// The DOM is the browser's object representation of an HTML document.
// Find elements with document.querySelector; listen with addEventListener.
// Prefer textContent for inserting plain text. Be careful with innerHTML because
// inserting untrusted HTML can create cross-site scripting vulnerabilities.

// Example:
 const button = document.querySelector('#save-button');
 button.addEventListener('click', () => {
     document.querySelector('#status').textContent = 'Saved';
 });

// 15. MODULES
// Modules divide code into files. Export values from one file and import them in
// another. Module syntax is supported by browsers and Node.js (with setup as needed).
// Example in math.js: export const square = value => value * value;
// Example in another module: import { square } from './math.js';
// Keep modules focused and avoid hidden global state.

// 16. DATA STRUCTURES AND ALGORITHMS (DSA)
// A data structure organizes data; an algorithm is a repeatable set of steps.
// Choose structures based on the operations your program needs to perform.
// Array/list: ordered items; indexed access is fast, middle insertion may be slow.
// Stack: last-in, first-out (LIFO); push and pop. Useful for undo and parsing.
// Queue: first-in, first-out (FIFO); useful for task scheduling and breadth-first search.
// Linked list: nodes link to neighbors; insertion can be cheap when a node is known,
// but finding an index requires traversal. Arrays are usually more practical in JS.
// Hash table: key-to-value lookup; JavaScript Object and Map are common choices.
// Set: unique values and membership checking.
// Tree: hierarchical nodes; binary search trees keep values ordered when balanced.
// Heap/priority queue: efficiently retrieves the smallest or largest priority item.
// Graph: vertices connected by edges; represent with adjacency lists or matrices.
// Trie: tree of characters; useful for prefix searches and autocomplete.

// Common algorithms:
// Linear search checks items one by one: O(n) time.
// Binary search halves a sorted search range each step: O(log n) time.
// Sorting orders values. Built-in Array.sort is usually the practical choice.
// Breadth-first search (BFS) explores a graph in layers, often using a queue.
// Depth-first search (DFS) explores one path deeply, using recursion or a stack.
// Recursion solves a problem by calling itself; define a base case to stop it.
// Dynamic programming stores results of overlapping subproblems to avoid repeats.

// Big O describes growth as input size n grows; it is not an exact runtime.
// O(1): constant; O(log n): logarithmic; O(n): linear; O(n log n): common efficient
// sorting; O(n^2): nested comparisons; O(2^n): exponential.
// Consider both time and space. A faster algorithm may use more memory.

// Example: linear search, returning the matching index or -1.
// function findIndexOf(items, target) {
//     for (let index = 0; index < items.length; index++) {
//         if (items[index] === target) return index;
//     }
//     return -1;
// }

// Example: binary search requires sorted input.
// function binarySearch(sortedItems, target) {
//     let low = 0;
//     let high = sortedItems.length - 1;
//     while (low <= high) {
//         const middle = Math.floor((low + high) / 2);
//         if (sortedItems[middle] === target) return middle;
//         if (sortedItems[middle] < target) low = middle + 1;
//         else high = middle - 1;
//     }
//     return -1;
// }

// 17. WRITING CLEAR, RELIABLE CODE
// Use descriptive names, small functions, and consistent formatting.
// Prefer const; avoid hidden mutation and global variables.
// Check boundary cases: empty input, one item, missing values, and invalid input.
// Test normal cases and edge cases. Keep functions small enough to test directly.
// Use ===, validate external data, and handle errors intentionally.
// Learn incrementally: fundamentals -> functions/data structures -> async/DOM or
// Node -> modules/testing -> algorithms and larger projects.

// This is a learning reference, not every detail of the language. For advanced
// topics later, study prototypes/classes, iterators/generators, regular expressions,
 }