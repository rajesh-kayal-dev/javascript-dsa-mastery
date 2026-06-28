function missing(nums){
	const result = [];

	const max = Math.max(...nums)
	const min = Math.min(...nums)

	for (let i = min; i <= max; i++) {
		if(nums.indexOf(i) < 0){
			result.push(i)
		}
	}

	return result;
}

console.log('Missing value:', missing([1,3,4,5,8,]));