const MargeSort = (a, b) => 
a.concat(b).sort((a,b)=> b-a);

const MargeSort2=(a,b)=>
 [a,b]=[...a,...b].sort((a,b)=> b - a);

 const MargeSort3 = (a,b) =>{

 	let res =[];

 	let length = Math.max(a.length, b.length);

 	for (let i = 0; i < length; i++) {
 		if(i < a.length) res.push(a[i])
 		if(i < b.length) res.push(b[i])
 	}

 	return res.sort((a,b)=> a-b);
 }

 const UniqueMargeSort = (a, b) =>
  [new Set([...a,...b])].sort((x,y)=> x- y)

const MargeSort3 = (a, b) => [...a, ...b.map(x => x)].sort((x, y) => x - y);

let a =[5,1,4,2,6];
let b =[8,2,4,1,7,3];

console.log(UniqueMargeSort(a, b));
