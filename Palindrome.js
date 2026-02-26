// function isPalindrome(str){
// 	for (let i = 0; i <= str.length -1 ; i++) {
// 		if(str[i] !== str[str.length -1 -i]){
// 			return false;
// 		}
// 	}
// 	return true;
// }

// function isPalindrome(str){
// 	let start = 0;
// 	let end = str.length -1;

// 	while(start < end){
// 		if (str[start] !== str[end]) {
// 			return false;
// 		}
// 		start++;
// 		end--;
// 	}
// 	return true;
// }

function isPalindrome(str){
	
	let reversed = str.split('').reverse().join('');
	if(str === reversed )  return true 
	else return  false;
}


console.log(isPalindrome("Rajesh"));
console.log(isPalindrome("madam"));