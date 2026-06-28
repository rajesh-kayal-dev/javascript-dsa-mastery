// Array.prototype.myMap = function (calback){
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//        result.push(calback(this[i], i, this))
//     }
//     return result;
// }

// let arr = [1, 2, 3];

// let result = arr.myMap((num) => num * 2);

// console.log(result);

// Array.prototype.myFilter = function(calback){
//     const result =[];

//     for (let i = 0; i < this.length; i++) {
//         if(calback(this[i], i , this)){
//             result.push(this[i])
//         }
//     }
//     return result;
// }


// let arr = [1, 2, 3, 4, 5];

// let result = arr.myFilter((num) => num % 2 === 0);

// console.log(result); // [2, 4]


// Array.prototype.myReduce = function(calback, initialvalue){
//    let acc = initialvalue;

//    for (let i = 0; i < this.length; i++) {
//         acc = calback(acc, this[i], i , this)    
//    }
//    return acc;
// }

// let arr = [1, 2, 3, 4];

// let sum = arr.myReduce((acc, curr) => acc + curr, 0);

// console.log(sum); // 10

Array.prototype.myForEach = function (calback){
    const result= [];
    for (let i = 0; i < this.length; i++) {
      result.push(calback(this[i]))
    }
    return result;
}

let arr = [1, 2, 3, 4];

let result = arr.myForEach((num) => num);

console.log(result); 