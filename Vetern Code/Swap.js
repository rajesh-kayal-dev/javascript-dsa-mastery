const SwapWithThird= (n1, n2)=>{
	let temp = n1;
	n1= n2;
	n2= temp;

	console.log(n1, n2);
}
const SwapWithOutThird= (n1, n2)=>{
	n1= n1 + n2; //5+10 => a 15 , b 10
	n2= n1 - n2; //15 - 10 => b 5, a 15
	n1= n1 - n2; //15 - 5 => a 10, b 5
	console.log(n1, n2);
}

// const Disstraturing = (a,b)=>{

// 	[a,b]= [b,a];
// 	console.log(a, b);
// }

const Disstraturing = ([a,b])=>{

	[a,b]= [b,a];
	console.log(a, b);
}
console.log('a => 5 | b => 10');
console.log('After Swap');
SwapWithThird(5, 10);
SwapWithOutThird(5, 10);

// Disstraturing(5, 10);
Disstraturing([5, 10]);