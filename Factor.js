function checkFactor(input){

	if (input <=0 || !Number.isInteger(input) ) {
		throw new Error('Number must be positive and grater then 0')
	}

	let res =[];

	for (let i = 0; i <=input; i++) {
		if (input % i === 0) {
			// console.log(i);
			res.push(i);
		}
	}

	return res;
	
}

console.log('Factor of 4 is :',checkFactor(4));