/**
 * Question
Return a new array containing only unique values while keeping their original order.

Example
Input

[1,2,2,3,4,4,5]
Output

[1,2,3,4,5]
Edge Cases
[] -> []
[1] -> [1]
[1,1,1] -> [1]
["a","a","b"] -> ["a","b"]
 */

function removeDuplicate(arr){
    // return [...new Set(arr)]

    let result =[];
    for(let ch of arr){
        if(!result.includes(ch)){
            result.push(ch)
        }
    }
    return result;
}
console.log(removeDuplicate(["a","a","b"]))