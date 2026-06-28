function seconLarget(nums){

	const largest = Math.max(...nums);           // Math.max(6,2,1,9,7,3) -> 9
	let index = nums.indexOf(largest);           // nums.indexOf(9) -> 3
	nums.splice(index, 1);                       // [6,2,1,9,7,3].splice(3, 1) -> [6,2,1,7,3]

	const secondLargest = Math.max(...nums);     // Math.max(6,2,1,7,3) -> 7

	return secondLargest;                        // return 7

}

console.log(seconLarget([6,2,1,9,7,3]));         // 7
