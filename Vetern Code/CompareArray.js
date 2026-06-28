function Compare(a,b){
	return a.every((ele)=>{
		return (b.indexOf(ele)> -1) ? true : false;
	})
}

console.log(Compare([1, 2, 3], [1, 2, 3, 4])); // true
console.log(Compare([1, 5], [1, 2, 3, 4]));    // false