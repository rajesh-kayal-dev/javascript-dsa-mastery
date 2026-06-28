
/**


// Problem : find the missing number in the array from 1 to n

const arr = [1, 2, 4,];

const n = 10;

const output = [];

for (let i = 1; i < n; i++) {
      if (!arr.includes(i)) {
            output.push(i);
      }
}
console.log(output);
 */

/**
//Problem2: Replace underscores with space and capitalize word 
const str = "hello_world";

// fisrt split str into array
//loop through str
//make firt char uppercase
// back to string

// let result = str.split("_").map(ar => ar.charAt(0).toUpperCase() + ar.slice(1)).join(" ");
// console.log(result);



const arr = str.split("_");

for(let i = 0; i < arr.length; i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
}

const result = arr.join(" ")
console.log(result)

 */


/**
//Prblem3: Replace space with underscore 

let str = "Hello World"; //"hello_world"

// str=str.toLowerCase().replaceAll(" ", "_");
// console.log(str)

//without replaceAll()

let result = str.split(" ").map((ar)=> ar.toLowerCase()).join("_")

console.log(result);
*/
/** 
//Problem 3:Find the occurrence in given array in JavaScript 

const nums = [1, 2,1,3,1,3,4,5];

const res = {};

for (let item of nums) {
      res[item] =( res[item] || 0) + 1;

}

console.log(res);
*/
/** 
//Problem 4: Find the occurrence in given object in JavaScript

 const people =[
      {name: "rajesh", gender: "boy"},
      {name: "riya", gender: "girl"},
      {name: "sumit", gender: "boy"},
      {name: "sharya", gender: "girl"},
      {name: "rahul", gender: "boy"},
 ]

 let count = people.reduce((acc, i)=>{
      if(i.gender === "boy"){
            acc.boy += 1;
      }else if(i.gender === "girl") {
            acc.girl += 1;
      }
      return acc;
 },{boy: 0, girl :0})

 console.log(`Total boy :${count.boy} and total girl : ${count.girl}`);

 */
/**
 //Problem5:*Sort given array of objects with age in JavaScrip

  const people =[
      {name: "rajesh", age: "26"},
      {name: "riya", age: "22"},
      {name: "sumit", age: "24"},
      {name: "sharya", age: "20"},
      {name: "rahul", age: "21"},
 ]

 const result = people.map(arr => arr.age).sort((a,b)=> a - b);

 console.log(result)
*/


//  //Problem6: find the max number from each string of array

//  const arr = ["23-33-44","40-20-50","30-60-80"];

// /**
//  * Steps
//  * 1 -> loop through arr
//  * 2 -> split the arr with -
//  * 3 -> find max number
//  * 4 -> return max values in new arry
//  */

// const result = arr.map((ele)=>{
//       let split = ele.split("-");
//      return Math.max(...split);
// })
// console.log(result)

//Problem7: Find Longest word in string
// const str = "Find Longest word in string";

// const longestStr = (str) => {
//       //using sort
//       // return str.split(" ").sort((a,b)=> b.length - a.length)[0]

//       //using reduce
//       //return str.split(" ").reduce((longest, curr) => curr.length > longest.length ? curr : longest, "")

//       //without build in method
//       str = str.split(" ");
//       let longest = "";
//       for (const word of str) {
//             if (word.length > longest.length){
//                  longest = word;
//             }
//       }
//       return longest;
// }

// console.log(longestStr(str))

//Problem8:Count Occurrences of Character 

const countChar = (str, char)=>{
      return str.split(char).length -1;
}

console.log(countChar("javascript","a"))