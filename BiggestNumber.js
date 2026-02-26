// function BiggestNumber(nums){
// 	 if (!nums || nums.length === 0) {
// 	 	throw new Error('We need sume value is array');
// 	 }
// 	let max = nums[0];
// 	for (let i = 1; i < nums.length; i++) {
// 		if (nums[i] > max) {
// 			max = nums[i];
// 		}
// 	}
// 	return max;

// }

function BiggestNumber(nums){
	let max = Math.max(...nums);
	return max;

}

console.log('Biggest numbers is:', BiggestNumber([4,6,1]));