function EvenOdd(nums){
	const even = nums.filter((item)=>{
		return item % 2 ===0;
	})
	const odd = nums.filter((item)=>{
		return item % 2 !==0;
	})

	return {even, odd}; 
}

console.log(EvenOdd([1,2,3,4,5,6,7]));