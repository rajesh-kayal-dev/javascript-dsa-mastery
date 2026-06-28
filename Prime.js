function isPrime(num){
	
if (num <= 1) return false;
if (num === 2) return true;

	if (num % 2 === 0) {
		return false;
	}

	let prime = true;


		for (let i = 3; i < num; i= i + 2) {
			if (num % i === 0) {
				prime = false;
				break;
			}
	}
	return prime;
}

console.log('2', isPrime(2));
console.log('3', isPrime(3));
console.log('5', isPrime(5));