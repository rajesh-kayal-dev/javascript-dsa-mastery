// Problem 1: Reverse String

let str = "hello";
let result = str.split("").reverse().join("");
console.log(result);


// Reverse string without using reverse()

const reverseString = (str) => {

    let arr = str.split("");

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr.join("");
}

console.log(reverseString("code"));

// Problem 2: Palindrome Check

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("madam"))

// Problem 3: Find Largest Number

function findLeargest(nums) {
    let largest = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest)
            largest = nums[i];
    }

    return largest;
}

console.log(findLeargest([12, 7, 25, 4, 18]))

// Problem 4: Find Second Largest Number

const findSecondLeargest = (nums) => {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        } else if (nums[i] > secondLargest && nums[i] !== largest) {
            secondLargest = nums[i];
        }
    }
    return secondLargest;
}

console.log(findSecondLeargest([12, 7, 25, 4, 18]));

// Problem 5: Remove Duplicates from Array

const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(arr)];
console.log(unique);

// with out using Set()

const removeDuplicate = (arr) => {
    let result = [];

    for (let num of arr) {
        if (!result.includes(num)) {
            result.push(num);
        }
    }
    return result;
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]))


// Problem 6: Find the Duplicate Number

function findDuplicate(arr) {
    return arr.filter(
        (item, index) => arr.indexOf(item) !== index
    );
}

console.log(findDuplicate([5, 1, 1, 4, 3, 4]))


