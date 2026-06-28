function Prime(num){

	if (num <= 1) {
		return false;
	}else{
		for (let i = 2; i < num; i++) {
			if (num%i === 0) {
				return false;
			}
		}
	}

	return true; 
}
console.log('1: ', Prime(1));   // false
console.log('2: ', Prime(2));   // true
console.log('3: ', Prime(3));   // true
console.log('4: ', Prime(4));   // false
console.log('9: ', Prime(9));   // false
