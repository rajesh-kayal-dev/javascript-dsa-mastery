function CheckVowelsConsonents(input){

	let filterString = input.toLowerCase().replaceAll(' ','');

	console.log('filter string :', filterString);

	let vowels = 'aeiou';
	let consonents = 'bcdfghjklmnpqrstvwxyz';

	Vcount = 0;
	Ccount = 0;
	for (let i = 0; i < input.length; i++) {
		if (vowels.includes(filterString[i])) {
			Vcount++;
		}
		// else if (consonents.includes(filterString[i])) 
		else if (/^[a-z]$/.test(filterString[i])) 
		{
			Ccount++;
		}
	}

	return { Vcount, Ccount};

}

console.log( CheckVowelsConsonents("Hello World Hello"));