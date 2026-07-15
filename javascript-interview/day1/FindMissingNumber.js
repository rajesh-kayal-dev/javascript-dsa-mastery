/**
 * Question
An array contains numbers from 1 to n with one number missing. Return the missing number.

Example
Input

[1,2,3,5]
Output

4
Example
Input

[2,3,4,5]
Output

1
Edge Cases
[1] -> null
[2] -> 1
[1,2,3,4] -> 5
 */
function findMissing(arr) {
    if (arr.length === 0 || (arr.length === 1 && arr[0] === 1)) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== i+ 1){
            return i + 1;
        }
    }
    return arr.length + 1;
}

console.log(findMissing([1, 2, 3, 4, 5]));
console.log(findMissing([1, 2, 4, 5]));
console.log(findMissing([1]));
console.log(findMissing([2]));
console.log(findMissing([1, 2, 3, 4]));