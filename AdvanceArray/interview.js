// console.log('sum' + 100);

// const sum = (...nums) =>{
// 	return nums.reduce((a,b)=> a + b);
// }

// console.log(sum(1,2,3))

// arr1= [1,2,3];
// arr2= [3,4,5];

// arr3 = [...new Set([...arr1, ...arr2])];

// console.log(arr3);



// function seprator(arr){
// 	const numbers = [];
// 	const charactors = [];

// 	arr.forEach((e)=>{
// 		if (typeof e === "number") {
// 			numbers.push(e);
// 		}else if(typeof e === "string" && e.length === 1){
// 			charactors.push(e)
// 		}
// 	})

// 	return {numbers, charactors}
// }
// const arr = ["B", 8, 9, "C", 2, "Sham"];
// console.log(seprator(arr))


// const arr1 = [1,2,3,4,5];
// const result1 = arr1.find(x=> x > 3)

// console.log('find :', result1);

// const arr2 = [1,2,3,4,5];
// const result2 = arr2.filter(x=> x > 3)

// console.log('filter :', result2);

// const arr = [1,2,3,4,5];

// const result = arr.map(x => x === 5)

// console.log(result);

// const result = useMemo(()=>{
// 	expenssiveCalculation(data);
// },[data])


// import rateLimit from "express-rate-limit";

// const limitter = rateLimit({
// 	maxWindowMs: 15 * 60 * 100;
// 	max: 100;
// })

// app.use(limitr);

// function vowelsCount(str){
// 	let count = 0;
// 	const vowels ="aeiou";

// 	for (let char of str.toLowerCase()) {

// 		if (vowels.includes(char)) {
// 			count++;
// 			}
// 		}
// 		return count;
// }

// console.log(vowelsCount('Hello World'));


// function countFrequency(str){
// 	let map= {};


// 	for(let char of str){
// 		map[char]= (map[char] || 0) + 1;
// 	}

// 	return map;
// }

// console.log(countFrequency("hellow world"));

// const lagest = (nums)=>{
// 	return nums.find((x, i )=> x > nums[i + 1]);
// }
// console.log('lagest number is :', lagest([1,2,4,3,2]));

// const lagest = (nums)=>{
// 	return Math.max(...nums);
// }
// console.log('lagest number is :', lagest([1,2,4,3,2]));


// function palindrome(str){

// 	return str === str.split('').reverse().join('');
// }

// console.log(palindrome("raar"));