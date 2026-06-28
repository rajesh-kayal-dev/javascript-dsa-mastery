function Max(nums){

	const max = nums.reduce((previous, current)=>{
		return (previous > current) ? previous : current;
	})

	return max;
}

function Min(nums){

	const min = nums.reduce((previous, current)=>{
		return (previous < current) ? previous : current; 
	})

	return min;
}
console.log('Maximum is:', Max([1,2,4,6,5,7]));
console.log('Maximum is:', Min([1,2,4,6,5,7]));