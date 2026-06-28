
const isValid = (str)=>{

	const brackets ={
	"(" :")",
	"{":"}",
	"[":"]",
}


	const stack =[];

	for(let char of str){
		if (brackets[char]) {
			stack.push(char)
		}else if(char!==brackets[stack.pop()]){
				return false;
			}
		}
	

	return stack.length === 0;


}

console.log( isValid("()"));
console.log( isValid("(){}[]"));
console.log( isValid("(]"));
console.log( isValid("([])"));
console.log( isValid("([)]"));