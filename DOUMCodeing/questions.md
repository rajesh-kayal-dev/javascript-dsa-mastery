// ## 1 Create a for.. of loop to log each character of the string "DoumCoding"
// const str = "DoumCoding";
// for(const ch of str){
//     console.log(ch)
// }


// ## 2 Write a for loop that skips even number between 1 and 20

// for (let i =1; i <=20; i++) {
//     if(i % 2 === 0) continue;
//     console.log(i);
// }


// ## 3 Create a for loop that calculates the factorial of 5

// let num = 1;
//  for (let i = 1; i <= 5; i++) {
//     num *= i;
//  }

// console.log(num)

// ## 4 Wrtie a nested loop to print a 3*3 grid of numbers
// let count =1;
// for (let i = 0; i < 3; i++) {
//     let str ="";
//     for (let j = 0; j < 3; j++) {
//         str += count;
//         count++;
//     }
//     console.log(str)
// }


// ## 5 use a for loop to reverse an array

// let arr = [1,2,3,4,5]
// for (let i = 0; i < Math.floor(arr.length/ 2); i++) {
//     [arr[i],arr[arr.length - 1 - i]] = [arr[arr.length - 1 -i], arr[i]];
// }
// console.log(arr)

// with extra space
// let arr = ['a','b','c','d','e']
// for (let i = 0; i < Math.floor(arr.length/2); i++) {
//     let temp = arr[i];
//     arr[i]= arr[arr.length - 1 - i];
//     arr[arr.length- 1 - i] = temp;
// }
// console.log(arr)

// ## 6 combine two array of numbers[1,2] and [3,4]
// let a = [1, 2];
// let b = [3,4];
// let combined = [...a, ...b]
// console.log(combined)
// console.log(a.concat(b))

// ## 7 Sort an array of numbers [11,24,42,32,14,56] in ascending order;

// let arr = [11,24,42,32,14,56]
// let sort = arr.sort((a, b)=> a-b)
// console.log(sort)

// let arr = [11,24,42,32,14,56]

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length -1 - i; j++) {
//         if(arr[j] > arr[j + 1]){
//             [arr[j], arr[j+1]]= [arr[j+1],arr[j]]
//         }
//     }    
// }

// console.log(arr)

// ## 8 write a function that accepts an array and returns the sum of its elements

// let arr = [1,2,3,4,5];

// function sumOfElement (arr){
//     let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// return sum;
// }
// console.log(sumOfElement(arr));

// using reduce
// let arr = [1,2,3,4,5];
// const sumOfelelement = arr.reduce((acc, ele) => acc + ele, 0 );
// console.log(sumOfelelement)

// ## 9 create a function that accepts a string and returns its reverse

// let str = "Hello World";

// let reverse = str.split('').reverse().join('');
// console.log(reverse)

// ## 10 create a function to find the largest number in an array
// let arr =[21,43,56,11,44,74,23]
// function findMax(arr){
//     let max = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]> max){
//             max = arr[i];
//         }        
//     }
//     return max;
// }
// console.log(findMax(arr))


// 11 How to Check if an Array is an an array or not Provide some code

// function checkArr(ar){
//     return Array.isArray(ar)
// }

// console.log(checkArr([1,2,3,4]))
// console.log(checkArr("Hello"))
// console.log(checkArr({name: "Rajesh"}))

// 12 How to empty an array But do not reset it to a new array & do not run a loop through to pop each value
// let arr = [1,2,3,4,5,6];
// arr.length = 0;
// console.log(arr)


// 13 Write a JavaScript funciton that check whether a passed string is palindrome or not

// function checkPalindrome(str){
//     return str === str.split('').reverse().join('');
// }

// console.log(checkPalindrome("lol"))
// console.log(checkPalindrome("pol"))
// console.log(checkPalindrome("mom"))
// console.log(checkPalindrome("java"))


// 14 write a javascript function that returns a passed string with letters in alphabetical order

// const alphabeticalOrder = (letters)=>{
//     return letters.split('').sort().join('');
// }

// Decending order
// const alphabeticalOrder = (letters)=>{
//     return letters.split('').sort().reverse().join('');
// }
// console.log(alphabeticalOrder("fsdthaduvc"))
// console.log(alphabeticalOrder("78378782"))


//15 Loop an array of objects and remove all objects which don't have gender's value male

// const Person = [ 
//   {name: "Rahul", gender: "male"}, 
//   {name: "Riya", gender: "female"}, 
//   {name: "Abhi", gender: "male"}, 
//   {name: "Sneha", gender: "female"}, 
// ];

// const filterByGroup = (arr,targetGender) =>{
//     return arr.filter( item => item.gender === targetGender)
// }
// console.log(filterByGroup(Person, "male"))
// console.log(filterByGroup(Person, "female"))

//find only male

// filterPerson = Person.filter(item => item.gender === "male");

// console.log(filterPerson)

// 16 Wrtie a javascript function to get the first element of an array passing a parameter 'n' will return the first 'n' element of this array

// function retrieve(arr, n){
//     if(n <= 0) return [];
//     if(n === undefined) return arr[0];

//     if(n <= arr.length){
//         let result = [];
//         for (let i = 0; i < n; i++) {
//             result.push(arr[i])
//         }
//         return result;
//     }else{
//         return n + ' Index out of bund';
//     }
// }
// let arr = [1,2,3,4,5,6,7,8,9,99,88,77,66,55,44,,33,22,11];
// console.log(retrieve(arr,6));

//---------------------------------------------------------------------------------------------------------------------------------------

//17 Write a javaScript program to find the most frequent item of an array

// const  findMostFrequent = (arr) =>{
//     let count = {};
//     let maxCount = 0;
//     let mostFrequent = arr[0];
//     for(let item of arr){
//         count[item] = (count[item] || 0) + 1;

//         if(count[item] > maxCount){
//             maxCount = count[item];
//             mostFrequent = item;
//         }
//     }
//     return mostFrequent;

// }

// console.log(findMostFrequent([9, 1, 1, 9, 3, 2, 9, 12, 13]));  


// 18 Write a program to shuffle an array


// function shuffleArray(arr){
 
//     let total = arr.length;

//     while (total > 0) {
//         let random = Math.floor(Math.random() * total)
//         total--;
//         let temp = arr[total];
//         arr[total] = arr[random]
//         arr[random]= temp;
//     }
//     return arr;
// }

// console.log(shuffleArray([1,2,3,4,5,7,8,9]))

// 19 You are working on a note taking app and you want to implement a function named saveNoteToLocalStorage that takes a note string and saves it to the browser's local storge

// function saveNoteToLocalStorage(note){
//     localStorage.setItem("note",note)
// }
// let note = localStorage.getItem("note");

// if(note){
//     document.querySelector(".note").innerHTML = note;
// }

// document.querySelector("button").addEventListener("click",()=>{
//     let note = prompt("enter your Note");
//     saveNoteToLocalStorage(note);
//     document.querySelector(".note").innerHTML = note;
// })


//---------------------------------------------------------------------------------------------------------------------------------------

// 20 what is the ouptut

// console.log("value of age is",age);
// var age = 20;
// console.log("value of age is",age);
