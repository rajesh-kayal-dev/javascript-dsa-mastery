# Day 1 - JavaScript Interview Practice


# Problem 1 - Reverse String

## Question

Reverse the given string and return the reversed string.

### Example 1

Input

```text
"hello"
```

Output

```text
"olleh"
```

### Example 2

Input

```text
"JavaScript"
```

Output

```text
"tpircSavaJ"
```

### Edge Cases

```text
""           -> ""
"a"          -> "a"
"madam"      -> "madam"
"hello world"-> "dlrow olleh"
"12345"      -> "54321"
```

---

# Problem 2 - Reverse Array

## Question

Reverse an array without modifying the original array.

### Example

Input

```text
[1,2,3,4,5]
```

Output

```text
[5,4,3,2,1]
```

### Edge Cases

```text
[] -> []
[1] -> [1]
["a","b","c"] -> ["c","b","a"]
```

---

# Problem 3 - Check Palindrome

## Question

Return true if the given string is a palindrome; otherwise return false.

### Example

Input

```text
"madam"
```

Output

```text
true
```

Input

```text
"hello"
```

Output

```text
false
```

### Edge Cases

```text
"" -> true
"a" -> true
"aa" -> true
"aba" -> true
"abc" -> false
```

---

# Problem 4 - Remove Duplicates from Array

## Question

Return a new array containing only unique values while keeping their original order.

### Example

Input

```text
[1,2,2,3,4,4,5]
```

Output

```text
[1,2,3,4,5]
```

### Edge Cases

```text
[] -> []
[1] -> [1]
[1,1,1] -> [1]
["a","a","b"] -> ["a","b"]
```

---

# Problem 5 - Find Maximum Number

## Question

Return the largest number from an array.

### Example

Input

```text
[3,7,2,9,4]
```

Output

```text
9
```

### Edge Cases

```text
[-1,-5,-2] -> -1
[10] -> 10
[] -> null (or handle gracefully)
```

---

# Problem 6 - Find Second Largest Number

## Question

Return the second largest unique number from an array.

### Example

Input

```text
[3,8,2,10,5]
```

Output

```text
8
```

### Edge Cases

```text
[5] -> null
[5,5] -> null
[5,4] -> 4
[1,2,2,3] -> 2
[-5,-2,-8] -> -5
```

---

# Problem 7 - Character Frequency Counter

## Question

Count how many times each character appears in a string.

### Example

Input

```text
"banana"
```

Output

```text
{
  b:1,
  a:3,
  n:2
}
```

### Edge Cases

```text
"" -> {}
"a" -> {a:1}
"111" -> {1:3}
"aaAA" -> {a:2,A:2}
```

---

# Problem 8 - Find Missing Number

## Question

An array contains numbers from 1 to n with one number missing. Return the missing number.

### Example

Input

```text
[1,2,3,5]
```

Output

```text
4
```

### Example

Input

```text
[2,3,4,5]
```

Output

```text
1
```

### Edge Cases

```text
[1] -> null
[2] -> 1
[1,2,3,4] -> 5
```

---

# Self Checklist

- [ ] Reverse String
- [ ] Reverse Array
- [ ] Palindrome
- [ ] Remove Duplicates
- [ ] Maximum Number
- [ ] Second Largest
- [ ] Character Frequency
- [ ] Missing Number

---

# Challenge

After solving every problem:

- Solve it without Google.
- Solve it using a different approach.
- Check the time complexity.
- Check the space complexity.