/**
 * Question
Return the largest number from an array.

Example
Input

[3,7,2,9,4]
Output

9
Edge Cases
[-1,-5,-2] -> -1
[10] -> 10
[] -> null (or handle gracefully)
 */

function findMax(arr){
    if(arr.length === 0) return null;
    let max = arr[0];

    for(let item of arr){
        if(max > item){
            item = max;
        }
    }
    return max;
}

console.log(findMax([]))