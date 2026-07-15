/** 
Question
Reverse the given string and return the reversed string.

Example 1
Input

"hello"
Output

"olleh"
Example 2
Input

"JavaScript"
Output

"tpircSavaJ"
Edge Cases
""           -> ""
"a"          -> "a"
"madam"      -> "madam"
"hello world"-> "dlrow olleh"
"12345"      -> "54321"
*/

const str = "hello world";

function reverseString(str){
    // return str.split('').reverse('').join('');
    if(str === "") return "";
    let reverse = "";
    for (let i = str.length -1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

console.log(reverseString(str))