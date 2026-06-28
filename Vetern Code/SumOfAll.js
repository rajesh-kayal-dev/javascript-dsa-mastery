function Sum(nums){
	const sum = nums.reduce((prev, curr)=>{
		return prev + curr;
	})

	return sum;
}

console.log('Sum =', Sum([1,9,6,4]));