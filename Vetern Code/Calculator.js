const Calc = (val) =>({
	add : (n) => Calc(val + n),
	sub: (n) => Calc(val - n),
	div: (n) => Calc(val / n),
	mult: (n) => Calc(val* n),
	mod: (n) => Calc(val%n),
	res: val
})

const total = Calc(5).mult(2).res;

console.log('Total is=> ',total );