//// https://github.com/surbhidighe/Javascript-Output-Based-Questions.git

// let arr = [1, 2, 3, 4, 5, -6, 7];
// arr.length = 0;
// console.log(arr);//[]

// x = 10;
// console.log(x);
// var x; //10

// let a = { x: 1, y: 2 }
// let b = a;
// b.x = 3;
// console.log(a);
// console.log(b);//{ x: 3, y: 2 } { x: 3, y: 2 }

// for(var i = 0; i < 10; i++){
//     setTimeout(function(){
//       console.log("value is " + i);
//   })
// }//10 times, "value is 10"


// for(let i = 0; i < 10; i++){
//     setTimeout(function(){
//       console.log("value is " + i);
//   })
// }//10 times "value is" followed by the value of i in each iteration, from 0 to 9

// function hello() {
//   console.log("1");
//     setTimeout(() => {
//         console.log("2");
//     })
//   console.log("3");
// }
// hello();//"1" followed by "3", and then after a small delay, "2"

// let f = "8";
// let a = 1;
// console.log((+f)+a+1);//10

// let a = 10;
// if(true){
//    let a = 20;
//    console.log(a, "inside");
// }
// console.log(a, "outside"); //20, "inside" and 10, "outside"

// var a = "xyz";
// var a = "pqr"; //override
// console.log(a) //pqr

// const arr1 = [1, 2, 3, 4];
// const arr2 = [6, 7, 5];
// const result = [...arr1, ...arr2];
// console.log(result);// [1, 2, 3, 4, 6, 7, 5]

// const person1 = { name: 'xyz', age: 21 };
// const person2 = { city: 'abc', ...person1 };
// console.log(person2);//{ city: 'abc', name: 'xyz', age: 21 } 

// console.log(5 < 6 < 7); // 1 < 7 = true

// console.log(7 > 6 > 5); //1 > 5 = false

// console.log(0 == false); //0 == 0 = ture
// console.log(1 == true); // 1==1 = true

// console.log([11, 2, 31] + [4, 5, 6]); //11,2,314,5,6 

// console.log({} == {}); 
// console.log({} === {});// So even if they are looking same, they are pointing to different memory locations.
// // false, false

// let x = 5;
// let y = x++;
// console.log(y); //5
// console.log(x) //6

// console.log('apple'.split(''));//[ 'a', 'p', 'p', 'l', 'e' ]

// const arr = [2,3,5,2,8,10,5];
// console.log(arr.indexOf(5)) //indexOf method returns the index of the first occurrence
// //2

// const array = [8, 18, 28, 38]; // + 2
// const result = array.map(element => element + 2)
//                .filter((element) => element > 25);
// console.log(result); //[ 30, 40 ]


// function checkValue(value){
//     var result = Array.isArray(value);
//     console.log(result);
// }
// checkValue([1,2,3]);//Array.isArray() method is used to check if the provided value is an array.
// //true


// function sum(a=5, b=7){
//     return a+b; //5 + 20
// }
// console.log(sum(undefined, 20)); //25

// console.log(10 + "5"); //"105"
// console.log("5" + 10); //"510"

// console.log(10 - "5"); //5
// console.log("5" - 10); //-5

// console.log(printName());
// function printName(){
//     return "Hi my name is Bob"
// }//Hi my name is Bob 

// console.log(printName());
// const printName = () => {
//     return "Hi my name is Bob"
// }//Arrow functions cannot be accessed before they are initialised.
// // ReferenceError: Cannot access 'printName' before initialization


// const userDetails = {
//   firstName: "Rajesh",
//   lastName: "Kayal",
//   age: 23,
//   address: {
//     city: "Kolkata",
//     country: "India",
//   },
// };

// let cloneUserDetails = { ...userDetails };
// //Updating original object
// userDetails.age = 24;
// userDetails.address.city = "Banglore";

// console.log(cloneUserDetails.age); //23
// console.log(cloneUserDetails.address.city); //Banglore

// function hello(){
// console.log(name);
// console.log(age);
// var name = "Alice";
// let age = 21;
// }
// hello();//undefined, ReferenceError: can't access lexical declaration 'age' before initialization"


// const arr1 = [1,2,3];
// const arr2 = [1,2,3];
// const str = "1,2,3";

// console.log(arr1 == str);
// console.log(arr1 == arr2); //true, false

// const a = {x : 1};
// const b = {x : 1};
// console.log(a === b);
// console.log(a.x === b.x) //false, true


// const arr = [10, -1, 2];
// arr.sort((a, b) => a - b);
// console.log(arr);


// const arr = [11, 0, '', false, 2, 1];
// const filtered = arr.filter(Boolean);
// console.log(filtered); //filter(Boolean) removes all falsy values (0, "" (empty string), false, null, undefined, and NaN) from the array and keeps truthy ones.
// //[ 11, 2, 1 ] 

// var x = 0;
// var y = 10;
// if(x){
//   console.log(x);
// }
// if(y){
//   console.log(y);//10
// }

// const obj = {
// var1: 1,
// var2: 2
// };
// const { var1, var2 } = obj;
// console.log(var1, var2); //1 2

// const user = { 
// name: "Rajesh Kayal", 
// country: "India" 
// };
// const { name: fullname, country } = user;
// console.log(fullname); //Rajesh Kayal 
// // console.log(name); //ReferenceError: name is not defined 

// const person = {
//   firstName: 'Rajesh',
// };
// const { lastName="Kayal" } = person;
// console.log(lastName); //kayal

// var a = 10;
// let a = 20;
// console.log(a) //In Javascript, we cannot redeclare a variable with let if it has already been declared in the same scope.
// //SyntaxError: Identifier 'a' has already been declared  

// const arr = ["A","B","C","D","E"]
// console.log(Object.keys(arr)); // [ '0', '1', '2', '3', '4' ]

// function modify(obj) {
//     obj.name = "Updated";
// }
// let person = { name: "Original" };
// modify(person);
// console.log(person.name);

// function reassign(obj) {
//     obj = { name: "New Object" };
// }
// reassign(person);
// console.log(person.name); 
// // Updated                                                                    
// // Updated 

// let a={ x:1, y: {alpha:10,beta:20} };
// let b = {...a};

// b.x=101;
// b.y.alpha=1001;

// console.log(a.x);
// console.log(a.y.alpha);
// // 1                                                                          
// // 1001   

// console.log('Start');

// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise');
// });

// console.log('End'); //Start, End, Promise, setTimeout

// var array = [1,2,3,4,5];
// delete array[2]; //undifile leves in index 2
// console.log(array.length);//"delete" removes the element but does not reindex the array or change its length. It leaves undefined holes in the array
// //5


// let x = ["a","b","c"];
// let y = ["a","b","c"];
// let z = y;

// console.log(x == y);
// console.log(z == y);
// console.log(z == x);
// //false, true, false 
// //(In JS arrays are objects, and objects are compared by reference, not by value)


// let x; 
// console.log(x);//Since x is declared but not assigned any value yet, so this logs undefined
// x = 20;
// console.log(x);
// x = "John";
// console.log(x);
// // undefined                                                                  
// // 20                                                                         
// // John   

// let text;
// switch (1) {
//   case 0:
//     text = "This is zero";
//     break;
//   case 1:
//     text = "This is one";//there is no break, so it keeps going (falls through) into case 2 & overwrites the value.
//   case 2:
//     text = "This is two";
//     break;
//   default:
//     text = "No matches found!";
// }
// console.log(text);
// // This is two   

// const user = {
//     name: 'Rajesh Kayal!',
//     logMessage() {
//         console.log(this.name); // What is logged? 
//     }
// }; 
// setTimeout(user.logMessage, 1000);

// //Output : undefined
// // Reason : We've passed the reference in setTimeout not the actual function so as a result it doesn't have the user's context while executing. To get the name we've to pass a callback like: setTimeout(() => user.logMessage(), 1000);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// const finalObj = Object.assign({}, obj1, obj2);
// console.log(finalObj);//{ a: 1, b: 3, c: 4 }    

// // When two or more objects are merged: If keys conflict (i.e., the same key exists in multiple objects), 
// // the value from the later object overwrites the earlier one.

// let a = {};
// let b = { key: "abc" };
// let c = { key: "efg" };

// a[b] = 111;
// a[c] = 222;
// console.log(a[b]);//222

// function printName(firstName, lastName) {
//     firstName = "Rajesh";
//     lastName = "Kayal";
//     return arguments[0] + " " + arguments[1];
// }

// let name = printName("John", "Doe");
// console.log(name)//Rajesh Kayal 

// let x = true + false; //x = 1 + 0
// let y = x + 1; // y = 1 + 1

// console.log(x, y); // 1 2