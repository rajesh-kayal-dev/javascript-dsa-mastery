// function SumOfDigits(num){
// 	if (num < 1) {
// 		throw new Error('Number shuld be positive')
// 	}

// 	let strSplit = num.toString().split('');

// 	console.log(strSplit[0] +"+"+ strSplit[1]);

// 	sum = 0

// 	strSplit.forEach(num => {
// 		sum += parseInt(num);
// 	})

// 	return sum;
// }

function SumOfDigits(num){ //12
	let sum = 0;
	while(num > 0){
		let lastDigit = num % 10; //2
		 num = Math.floor(num / 10); //12/10 =1.2=> 1
		sum += lastDigit; 
	}
	return sum;
}

console.log(SumOfDigits(55));