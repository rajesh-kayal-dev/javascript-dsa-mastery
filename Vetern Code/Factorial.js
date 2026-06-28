function fact(num){
	if (num === 0 ) return 1;

	return num * fact(num - 1);
}

function fact2(num){

	let fact =1;
	if (num < 1) {
		console.log(`Factorial of ${num} is not Possible`);
	}else {
		for (let i = 1; i <= num; i++) {
			fact *=i;
			console.log(fact);
		}
	}
	return fact;
}

// console.log('Factorial', fact(5));
console.log('Factorial2', fact2(5));
