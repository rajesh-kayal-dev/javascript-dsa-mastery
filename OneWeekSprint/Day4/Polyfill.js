Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(
            callback(this[i])
        )
    }
    return result;
}

const nums = [10, 20, 30];

const result = nums.myMap(num => num + 5);

console.log(result)

Array.prototype.myFilter = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
       if(callback(this[i])){
        result.push(this[i])
       }
    }
    return result;
} 

const nums2 = [5, 10, 15, 20];

const result2 = nums2.myFilter((num)=> num % 2 === 0);

console.log(result2)

Array.prototype.myReduce = function(callback, initialValue){
    let acc = initialValue;

    for (let i = 0; i < this.length; i++) {
        acc = callback(
            acc, this[i]
        )
    }
    return acc;
}

const nums3 = [1, 2, 3, 4];

const result3 = nums3.myReduce((acc, curr)=> acc + curr, 0);

console.log(result3);

