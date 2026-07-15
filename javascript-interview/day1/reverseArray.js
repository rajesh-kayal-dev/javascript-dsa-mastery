/**Question
Reverse an array without modifying the original array.

Example
Input

[1,2,3,4,5]
Output

[5,4,3,2,1]
Edge Cases
[] -> []
[1] -> [1]
["a","b","c"] -> ["c","b","a"]
*/
function reverseArray(arr){
    // return (arr.length > 0) ? arr.reverse(): [];

    let reverse =[]
    if(arr.length > 0){
        for(let i = arr.length - 1; i >= 0; i--){
           reverse.push(arr[i])
        }
    }
    return reverse;

}

console.log(reverseArray([1,2,3,4,5]))