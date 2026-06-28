// let nullVar = null
// console.log(typeof nullVar)

// let undefinedVar = undefined
// console.log(typeof undefinedVar)

// console.log(a)
// let a = 5;
// console.log(a)

// sayHello()
// function sayHello(){
//     console.log("Hello")
// }

// sayHi() //TypeError: sayHi is not a function

// var sayHi = function () {
//     console.log("Hi")
// }


// function example(){
//     var x = 1;
//     let y = 2;
//     const z = 3;

//     if(true){
//         var x = 4;
//         let y = 5;

//         console.log(x,y,z) //4 5 3
//     }
//     console.log(x,y,z) //4 2 3
//     x = 7;
//     y= 8;
//     console.log(x, y, z) //7 8 3
// }

// example()

// let gloalVar = "I'm global";

// function innerFun() {
//     let localVar = "I'm Local";

//     console.log(gloalVar)
//     console.log(localVar)
// }

// innerFun()
// console.log(gloalVar)
// console.log(localVar) //ReferenceError: localVar is not defined


// let x = 10;

// function shadowExmaple() {
//     let x = 20;
//     console.log(x) // This x is the shadow the outer x
//     if (true) {
//         let x = 30;
//         console.log(x) //This x is the shadow both 2 outer x
//     }
//     console.log(x)
// }

// shadowExmaple()
// console.log(x)

// function createCounter(){
//     let count = 1;

//     return function(){
//         count++;
//         console.log(count)
//     }
// }

// let counter = createCounter()
// counter()
// counter()

//Function Decleration : Hoisted and can be called before its defined
// function functionDecritation(name) {
//     return `Hello ${name}`
// }

// console.log(functionDecritation("Rajesh"))

// //function Expression: Assign to a veriable,not histed
// const fun = function (name) {
//     return `Hello ${name}`
// }

// console.log(fun("Rahul"))

// //Arrow function : Shorter Syntex : laxical bind this
// const greet = (name) => `Hello ${name}`

// console.log(greet("Amit"))

// //Constructor Function : Create function dynamically
// const greeting = new Function("name", "return `Hello ${name}`;")
// console.log(greeting("Sumit"))


// function operator(a, b, operation) {
//     return operation(a, b);
// }

// const add = (a, b) => a + b;
// const milt = (a, b) => a * b;

// console.log(operator(5, 5, add))


// Pure function: returns the same output for the same input.
// It has no side effects and does not modify the external state.
// function add(a, b) {
//     return a + b; // Deterministic, no side effects
// }
// console.log(add(5, 7)); // Outputs: 12


// // Impure function: modifies the external state or depends on it.
// let total = 0;

// function addToTotal(val) {
//     total += val; // Modifies the external total
//     return total; // Return value depends on external state
// }

// console.log(addToTotal(5)); // Outputs: 5 (total is now 5)
// console.log(addToTotal(5)); // Outputs: 10 (same input, different output!)

//IFFE function is a function that run as soon as you defined it
// (function(){
//     let private = "I'm Private";
//     console.log("IFFE is calling")
//     console.log(private)
// })()

// (function (name) {
//     console.log(name)
// })("Rajesh");
// //IFFE with arrow
// (() => console.log("Hello"))()

// //Object literal notation
// let person = {
//     name: "rajesh",
//     age: 30,
//     greet: function () {
//         console.log(`Hello ${this.name}`)
//     }
// }
// person.greet()


// let car = {
//     brand: "Toyota",
//     model: "corolla"
// }

// car.year = 2025;
// car["color"] = "balack";

// console.log(car)
// delete car.brand;
// console.log(car)

// let person = {
//     name: "rajesh",
//     age: 30
// }

// console.log("name" in person); //true
// console.log("city" in person); //false


// console.log(person.hasWonProperty("name")); //true
// console.log(person.hasWonProperty("city")); //false

// console.log(person.name !== undefined); //true
// console.log(person.city !== undefined); //false

// //opctional chaining
// console.log(person?.city) //undefined

// let fruits = ["apple", "banana", "orange"]

// fruits.push("mango") //[ 'apple', 'banana', 'orange', 'mango' ]

// console.log(fruits)
// fruits.unshift("goava") //[ 'goava', 'apple', 'banana', 'orange', 'mango' ]
// console.log(fruits)
// fruits.pop()
// console.log(fruits) //[ 'goava', 'apple', 'banana', 'orange' ]



// let fevorites = fruits.slice(1, 3) //[ 'apple', 'banana' ]
// console.log(fevorites)//copy array
// console.log(fruits) //original array

// fruits.splice(1, 2, "fruit1", "fruit2") //replasing original array [ 'goava', 'fruit1', 'fruit2', 'orange' ]
// console.log(fruits)

// fruits.splice(1, 2) //splice() method changes the original array by adding, removing, or replacing elements.
// console.log(fruits) //[ 'goava', 'orange' ]

/**
 * The main difference is that some() requires only one item to pass the test, while every() requires all items to pass.
 * Both methods test your array using a function and return a simple true/false answer.
 * some() ➡️ Is at least one item true? (OR logic)
 * every() ➡️ Are all items true? (AND logic)
 */

// let nums = [2, 3, 1, 4, 3, 3];

// console.log(nums.some(num => num % 2 === 0))
// console.log(nums.every(num => num % 2 === 0))

// const newParagraph = document.createElement('p')
// newParagraph.textContent = "this is a paragraph";

//add aatribute
// newParagraph.id = "newPara";
// newParagraph.className = "highligh";

// const textNode = document.createTextNode(' Aditional Text');

// newParagraph.appendChild(textNode)

// document.body.appendChild(newParagraph)


/**
 * The main difference is that innerHTML reads and renders HTML tags, while textContent ignores the tags and only deals with plain text.
 * innerHTML ➡️ Parses string content as HTML code (elements and formatting).
 * textContent ➡️ Treats content strictly as raw text (safe from script injection).
 */

{/* <div id="box">Hello <strong>World</strong></div>

let element = document.getElementById("box");

console.log(element.innerHTML);   // Output: "Hello <strong>World</strong>"
console.log(element.textContent); // Output: "Hello World" */}


// const person = { name: "rajesh", age: 30, city: "kolkata" }

// const { name, age, city } = person;

// console.log(name, age, city);

//The spread operator consists of three dots (...) that
// unpack or "spread" the individual items of an array or object into a new location.

// let original = ["apple", "banana"];

// let copy = [...original];

// console.log(original)
// console.log(copy)

// let a =[1,2,3]
// let b =[1,2,3]

// let c = [...a, ...b]
// console.log(c)

// function greet(name = "guest") {
//     console.log(`Hello ${name}`)
// }

// greet("Rajesh");
// greet();

/**
 * The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
 * It uses the exact same three dots (...) as the spread operator,
 * but it does the opposite: instead of unpacking an array, it packs multiple separate arguments into a single array.
 */

// function sumALl(...nums) {
//     return nums.reduce((acc, num) => acc + num, 0)
// }

// console.log(sumALl(1, 2, 3))

//A callback function is a function passed into another function as an argument, which is then executed later inside that function.

// function greet(name, callback) {
//     console.log(`Hello ${name}`)
//     callback()
// }

// function sayBye() {
//     console.log("good bye!")
// }

// greet("Rajesh", sayBye);

// //Callback hell happens when you nest multiple callbacks inside each other to handle sequential asynchronous tasks.
// // This creates a messy, pyramid-shaped code structure that is incredibly hard to read and debug.

// //ES6 introduced Promises and Async/Await to completely flatten this pyramid structure into clean, readable code.


// /**
//  * A Promise in JavaScript is an object that handles asynchronous operations
//  *  (tasks that take time to complete, like fetching data from a database or loading an image).
//  * The 3 States of a Promise
//  * A promise always exists in one of three states:Pending: The task is still running (e.g., your food is still cooking).
//  * Fulfilled: The task finished successfully (e.g., your food is ready to eat).
//  * Rejected: The task failed with an error (e.g., the restaurant ran out of food)
//  */


// let psssExam = true;
// let checkResult = new Promise((resolve, reject) => {
//     if (psssExam) {
//         console.log("You Pass the exam")
//     } else {
//         console.log("You Faild!")
//     }
// })

// checkResult.then(data => console.log(data))
//     .catch(data => console.log(data))


// let fetchData = true;
// let checkResult = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (fetchData) {
//             console.log("Data fetch succssfully")
//         } else {
//             console.log("fetching Faild!")
//         }
//     }, 2000)
// })

// checkResult.then(data => console.log(data))
//     .catch(data => console.log(data))

//promise chaiing allows the asynchronus operation seqctionally


/**
 * Promise Methods (Running Tasks Together)
 * Promise.all(): Every single task must succeed; if even one fails, the whole plan cancels immediately.
 * Promise.allSettled(): Success or failure doesn't matter; it waits for all tasks to finish and gives you a complete status report.
 * Promise.race(): It only cares about speed; whichever task finishes first (whether it succeeds or fails) is the winner.
 * Promise.any(): It looks for the first successful task; it only gives up if every single task fails
 */

// const promise1 = Promise.resolve(2);
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(42)
//     }, 1000)
// })

// Promise.any([promise1, promise2])
//     .then(data => console.log(data))
//     .catch(data => console.log(data))
//     .finally(() => console.log("operation complete"))
//finally method that should be execute the code regardless of weather even if the Promse is fullfild or rejected   

//convert javascript to json string

// const user = {
//     name: "rajesh",
//     age: 30
// }
// const userString = JSON.stringify(user)
// console.log(userString)
// const userObject = JSON.parse(userString)
// console.log(userObject)

//localstorage is a webstorage object that used to store the key-value pair in browser with out expiresction time
// localStorage.setItem("username", "Rajesh");

// console.log(localStorage.getItem("username"));

// LocalStorage and SessionStorage are both web storage mechanisms, but they differ in how they persist data.
// LocalStorage data stays forever, even if you close the browser or restart the computer.
// In SessionStorage, data is deleted when you close the browser tab or when the session ends.

// Local Storage (Stays forever)
// localStorage.setItem("theme", "dark");
// console.log(localStorage.getItem("theme")); // Output: dark

// // Session Storage (Dies when tab closes)
// sessionStorage.setItem("loginStep", "2");
// console.log(sessionStorage.getItem("loginStep")); // Output: 2

// //remove specific item
// localStorage.removeItem("username")
// sessionStorage.removeItem("loginStep")

// //claering all data from loaclstoreage
// localStorage.clear()
// //claering all data from sessionstoreage
// sessionStorage.clear()