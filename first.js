const PI = 3.14159;
const age = 24;
console.log(age);
const price = 19.99;
console.log(price);
const a = null; // i don't know the value currently
const b = undefined; // i don't know what this is for

isStudent = true;
isGraduated = false;
console.log(isStudent);
console.log(isGraduated);
console.log('The value of a is: ' + a);
console.log('The value of b is: ' + b);
console.log(4 + 5); // This will throw an error because c is not defined

let fullName = 'Alice';
console.log(fullName);

{
    let a = 10;
    console.log(a);
}

{
    let a = 20;
    console.log(a);
}
console.log(typeof fullName); // This will return 'string'

let x = BigInt(9007199254740991);
console.log(x);
console.log(typeof x);
let y = Symbol('id');
console.log(y);
console.log(typeof y);

const students = ['Alice', 'Bob', 'Charlie'];
console.log(students);
console.log(typeof students);
const student = {
    name: 'Alice',
    age: 24,
    isGraduated: false
};
console.log(student);
console.log(typeof student);

console.log(student['name']); // This will log 'Alice' because student is an object and name is a property

console.log(student.name); // This will also log 'Alice' because student is an object and name is a property

//let name = prompt('enter a number?');
//alert('You entered: ' + name);

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // This will skip the rest of the code in the loop and go to the next iteration
    } if (i === 4) {
        break; // This will exit the loop completely
    }
    console.log(i);
}

let str = 'Hello, World!';
 
for (let i of str) {
    console.log(i); 
}
