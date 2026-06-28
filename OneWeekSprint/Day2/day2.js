//Problem 1: Frequency Counter

const countFrequency = (arr) => {
    return arr.reduce((freq, item) => {
        freq[item] = (freq[item] || 0) + 1;
        return freq;
    }, {});
}
console.log(
    countFrequency([
        "apple",
        "banana",
        "apple",
        "mango",
        "banana",
        "apple"
    ])
);

//Problem 2: First Non-Repeating

const nonRepetingChar = (str) => {
    const freq = {};
    for (const ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (const ch of str) {
        if (freq[ch] === 1) {
            return ch;
        }
    }
    return null;
}
console.log(nonRepetingChar("leetcode"))

//Problem 3: Array Flatten
const arr = [1, [2, 3], [4, [5, 6]]];

console.log(arr.flat(2));

//Without flat function

function flatten(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    }
    return result;
}
console.log(flatten([1, [2, 3], [4, [5, 6]]]));

// Problem 4: Intersection of Two Arrays
const nums1 = [1, 2, 3, 4];
const nums2 = [3, 4, 5, 6];

function intersection(nums1, nums2) {
    const set1 = new Set(nums1);

    const commonElement = nums2.filter(item => set1.has(item))

    return [...new Set(commonElement)];
}
console.log(intersection(nums1, nums2));

// Problem 5: Two Sum

const twoSum = (nums, target) =>{
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 13));

function twoSumMap(nums, target){
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(map.has(complement)){
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
}
console.log(twoSumMap([2, 7, 11, 15], 13));