/**
 * Question
Count how many times each character appears in a string.

Example
Input

"banana"
Output

{
  b:1,
  a:3,
  n:2
}
Edge Cases
"" -> {}
"a" -> {a:1}
"111" -> {1:3}
"aaAA" -> {a:2,A:2}
 */

function frequencyCount(str){
    let seen = {};

    for(let ch of str){
        seen[ch] = (seen[ch] || 0) + 1;
    }
    return seen;
}

console.log(frequencyCount(""))