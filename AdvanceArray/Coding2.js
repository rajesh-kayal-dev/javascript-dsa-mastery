// function moveZeros(arr) {
// 	let j = 0;

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] !== 0) {
// 			arr[j++] = arr[i];
// 		}
// 	}

// 	while(j < arr.length){
// 			arr[j++] = 0;
// 	}

// 	return arr;
// }

// console.log(moveZeros([4,0,5,0,3]));

// function removeDuplicates(nums) {
// 	if (nums.length === 0) return 0;

// 	let j = 0;
// 	for (let i = 1; i < nums.length; i++) {
// 		if (nums[i] !== nums[j]) {
// 			j++;
// 			nums[j] = nums[i];
// 		}
// 	}
// 	return j + 1;
// }

// let arr = [1,1,2,2,3,4,4];

// let result = removeDuplicates(arr);
// 	console.log('length =' , result);

// 	// console.log(arr.splice(0, result));

// for (let i = 0; i < result; i++) {
// 	console.log(arr[i]);
// }


// function firstUniqueChar(str) {

// 	let map = {};

// 	for (let char of str) {
// 	    map[char] = (map[char] || 0) + 1;
// 	}

// 	for (let char of str) {
// 	    if (map[char] == 1) {
// 	    	return char;
// 	    }
// 	}

// 	return null;

// }

// console.log(firstUniqueChar("aabbccde"));

// function longestSubstring(str) {

// 	let set = new Set();

// 	let j = 0;
// 	let maxLength = 0;

// 	for (let i = 0; i < str.length; i++) {
// 	    while(set.has(str[i])){
// 	    	set.delete(str[j]);
// 	    	j++;
// 	    }

// 	    set.add(str[i])

// 	    maxLength = Math.max(maxLength, i - j +1);
// 	}

// 	return maxLength;
// }

// console.log(longestSubstring("abcabcbb"));
// console.log(longestSubstring("bbbbb"));
// console.log(longestSubstring("pwwkew"));

function isAnagram(s, t) {

	if (s.length !== t.length) return false;
	let str1 = s.split('').sort().join('');
	let str2 = t.split('').sort().join('');

	return (str1 === str2)? true : false;
}

console.log(isAnagram("listen", "silent"));