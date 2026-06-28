function lastIndexShiptLeft(arr){

	//copy last index
	let copy = arr[0]

	for (let i = 0; i < arr.length - 1; i++) {
		arr[i]= arr[i + 1];
	}
	arr[arr.length -1 ] =copy;
	return arr;
}

function lastIndexShiptRight(arr){

	//copy last index
	let copy = arr[arr.length-1]

	for (let i =arr.length - 1; i > 0; i--) {
		arr[i]= arr[i - 1];
	}
	arr[0] =copy;
	return arr;
}
console.log(lastIndexShiptLeft([1,2,3,4,5]));
console.log(lastIndexShiptRight([1,2,3,4,5]));