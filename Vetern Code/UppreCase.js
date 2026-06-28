const FirstUppre = (str) =>{
	return str.split(' ')
					.map(word=> word.charAt(0).toUpperCase() + word.slice(1))
					.join(' ');

}

console.log(firstuppre("hello world"));