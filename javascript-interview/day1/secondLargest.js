/**
 * Question
Return the second largest unique number from an array.

Example
Input

[3,8,2,10,5]
Output

8
Edge Cases
[5] -> null
[5,5] -> null
[5,4] -> 4
[1,2,2,3] -> 2
[-5,-2,-8] -> -5
 */

function checkSecondLargest(arr){
    if(arr.length < 2) return null;
    
    let max = -Infinity;
    let secondMax = -Infinity;

    for(let item of arr){
        if(item > max){
           secondMax = max;
            max = item;
        }else if(item > secondMax && item !== max){
            secondMax = item;
        }
    }
    return secondMax === -Infinity ? null : secondMax;
}
console.log(checkSecondLargest([1,2,2,3]))