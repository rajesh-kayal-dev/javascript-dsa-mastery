const findDuplicate = (arr) =>{
	let count = 0;
	let map = new Map();
	for (let items of arr) {
	    if(map.has(items)){
	    	map[items] = (map.get(items)|| 0) + 1;
	    	count++;
	    }
	}
	return count;
} 

let arr = [1,2,3,2,4,5,1];
console.log(findDuplicate(arr));
