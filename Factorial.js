// function CalculateFactorial(num){
// 	let res = 1;

// 	for (let i = 1; i <= num; i++) {
// 		res *= i;
// 	}
// 	return res;
// }

function CalculateFactorial(num){
	if (num < 0) {
		throw new Error("input number shuld be grater then 0")
	}

	if (num === 0 || num === 1) {
		return 1;
	}

	return num * CalculateFactorial(num -1);
	//return 4 * CalculateFactorial(3); 4 * 6
	//return 3 * CalculateFactorial(2); 3 * 2
	//return 2 * CalculateFactorial(1); 2 * 1

}

console.log('Factrioal', CalculateFactorial(4));