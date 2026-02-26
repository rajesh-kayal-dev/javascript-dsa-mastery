function checkPower(base, exponent){
	let result = 1
	for (let i = 0; i < exponent; i++) {
		result *= base;
	}
	return result;
}

console.log(checkPower(2,3))