const isPalindrome = (str)=>{
	let revStr = str.split('').reverse().join('');
	return str !== revStr ? false : true;
}

const isPalindrome2 = (str)=>{
	let left = 0;
	let right = str.length -1;

	while(left < right){
		if (str[left] !== str[right]) {
			return false;
		}else{
			return true;
		}
		left++;
		right--;
	}
	return true;
}

console.log(isPalindrome2("Rajesh"));
console.log(isPalindrome2("eye"));