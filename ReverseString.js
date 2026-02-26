// function ReverseString(str){
// 	let rev = str.split('').reverse().join('');
// 	console.log('revese: ', rev);
// }

function ReverseString(str){
 	if (typeof str !== 'string') {
 		throw new Error('Only string are allowed');
 	}
 	
let rev = "";
	for (let i = str.length - 1; i >= 0; i--) {
		rev += str[i];
	}
	return rev;
}

console.log('reverse: ', ReverseString('Rajesh')); 