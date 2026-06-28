// function findLargest(arr){
// 	let largest = -Infinity;

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > largest) {
// 			largest= arr[i];
// 		}
// 	}
// 	return largest;
// }

// const arr = [3, 7, 2, 9, 5];
// console.log(findLargest(arr));


// function findSecondLargest(arr) {

// 	if (arr.length < 2) return null;

// 	let largest = -Infinity;
// 	let secondLargest = - Infinity;

// 	for(let nums of arr){
// 		if (nums > largest) {
// 			secondLargest = largest;
// 			largest = nums;
// 		}else if(nums > secondLargest && nums !== largest){
// 			secondLargest = nums;
// 		}
// 	}
	
// 	return secondLargest;

// }

// console.log(findSecondLargest([3, 7, 9, 2, 5, 9]));

// function isPalindrome(str) {
// 	let left = 0;
// 	let right = str.length -1;

// 	while(left < right){
// 		if (str[left] !== str[right]) {
// 			return false;
// 		}

// 		left++;
// 		right--;
// 	}

// 	return true;

// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));


// function isPalindromeAdvanced(str) {
// 	str = str.toLowerCase();

// 	// str = str.replaceAll(" ", "");
// 	str = str.replace(/[^a-z0-9]/g, "");

// 	let left = 0;
// 	let right = str.length -1;

// 	while(left < right){
// 		if (str[left] !== str[right]) {
// 			return false;
// 		}

// 		left++;
// 		right--;
// 	}

// 	return true;

// }

// console.log(isPalindromeAdvanced("A man a plan a canal Panama"));

// function twoSum(nums, target) {

// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = i + 1; j < nums.length; j++) {
// 			if (nums[i] + nums[j] === target) {
// 				return [i,j];
// 			}
// 		}
// 	}

// }
// console.log(twoSum([2, 7, 11, 15], 9));

// function twoSumHash(nums, target) {


// 	let map = new Map();

// 	for (let i = 0; i < nums.length; i++) {

// 	let complement = target - nums[i];
// 		if (map.has(complement)) {
// 			return [map.get(complement), i]
// 		}

// 		map.set(nums[i], i);
// 	}

// }

// console.log(twoSumHash([2, 7, 11, 15], 9));


// import {useState} from "react"
// const App = () => {

//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(prev  => prev + 1);
//     setCount(prev =>  prev + 1);
//   };

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleClick}>Increase</button>
//     </div>
//   );
// }
// export default App;

// const users = [
//   { id: 1, name: "Raj" },
//   { id: 2, name: "Amit" },
//   { id: 3, name: "Sara" }
// ];


// app.get("/users/:id", (req, res) => {
    
//     const id = parseInt(req.params.id);
    
//     const user = users.find(user => user.id === id);
    
//     if(!user){
//         return res.statu(404).json({
//             message:"user not found!"
//         })
//     }
    
//     return res.json(user);

// });