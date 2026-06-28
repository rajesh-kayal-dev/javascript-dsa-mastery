function RotedByKLeft(arr, k){
	
	for (let j = 0; j < k; j++) {
		let copy = arr[0];
		for (let i = 0; i < arr.length -1; i++) {
		arr[i] =arr[i+ 1];
		}
		arr[arr.length-1]=copy;
	}
	return arr;
}

function RotedByKRight(arr, k){

	// optimize
	k %=arr.length;

	for (let j = 0; j < k; j++) {
	
	let copyLast = arr[arr.length -1] 
	for (let i =arr.length-1; i > 0; i--) {
		arr[i] = arr[i -1];
	}
	arr[0] = copyLast;
}

	return arr;
}

function RotedByKLeftOptimize(arr, k){
	

		for (let i = 0; i < arr.length -1; i++) {
		arr[i] =arr[(i+k)% arr.length];
		}
	
	return arr;
}

function RotedByKRightOptimize(arr, k) {
	for (let i = arr.length -1; i > 0; i--) {
		arr[(i+k)% arr.length] = arr[i];
		}

	return arr;
}

function RotedByKLeftRecursion(arr, k) {
  const n = arr.length;
  if (n === 0) return arr;
  
  k %= n; 
  if (k === 0) return arr;

  // Helper function to swap elements in place
  function reverse(i, j) {
    while (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }

  // Perform the three reversals
  reverse(0, k - 1);       // Part 1
  reverse(k, n - 1);       // Part 2
  reverse(0, n - 1);       // Full array
  
  return arr;
}
function RotedByKRightRecursion(arr, k) {

	let n = arr.length;
	k = k % n;

	if (n==0 || k == 0) return arr;

	function reverse(i,j){
		while(i < j){
			let temp = arr[i];
			arr[i] =arr[j];
			arr[j] = temp;
			i++;
			j--;
		}
	}

  
	reverse(0,n-1); 
	reverse(0,k-1);
	reverse(k,n-1);

	return arr;
}



console.log(RotedByKLeft([1,2,3,4,5],2));
console.log(RotedByKRight([1,2,3,4,5],2));
console.log(RotedByKLeftOptimize([1,2,3,4,5],2));
console.log(RotedByKRightOptimize([1,2,3,4,5],2));
console.log(RotedByKLeftRecursion([1,2,3,4,5],2));
console.log(RotedByKRightRecursion([1,2,3,4,5],2));