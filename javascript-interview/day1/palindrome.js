/**
 * Question
Return true if the given string is a palindrome; otherwise return false.

Example
Input

"madam"
Output

true
Input

"hello"
Output

false
Edge Cases
"" -> true
"a" -> true
"aa" -> true
"aba" -> true
"abc" -> false
 */

function checkPalindrome(str){
    let reverse = str.split("").reverse().join('');
    return str === reverse ?true :false;
}

console.log(checkPalindrome("abc"))