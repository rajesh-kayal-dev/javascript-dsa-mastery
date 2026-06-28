function duplicate(nums){
	const duplicte= nums.filter(
		(ele, index, arr)=>
	 arr.indexOf(ele) !== index)

	return duplicte;
}

console.log('duplicate: ', duplicate([1,2,3,2,4,2,3]));