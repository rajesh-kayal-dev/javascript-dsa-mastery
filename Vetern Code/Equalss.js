function checkEqualls(a, b){ 
  // Arithmetic & Assignment
  console.log(a + b);    // 1 + '5' -> "15"
  console.log(a += b);   // a = 1 + '5' -> "15"
  console.log(a -= b);   // a = 15 - 5 -> 10
  console.log(a * b);    // 10 * 5 -> 50
  console.log(a /= b);   // a = 50 / 5 -> 10
  console.log(a % 3);    // 10 % 3 -> 1
  console.log(a ** 2);   // 1 ** 2 -> 1
  
  // Increment/Decrement
  console.log(a++);      // 1++ -> 1
  console.log(a--);      // 2-- -> 2
  console.log(++a);      // ++1 -> 2
  console.log(--a);      // --2 -> 1

  // Comparison
  console.log(a == b);   // 1 == '5' -> false
  console.log(a === b);  // 1 === '5' -> false
  console.log(a != b);   // 1 != '5' -> true
  console.log(a !== b);  // 1 !== '5' -> true
  console.log(a > b);    // 1 > 5 -> false
  console.log(a < b);    // 1 < 5 -> true
  console.log(a <= 1);   // 1 <= 1 -> true

  // Logical
  console.log(a && b);   // 1 && '5' -> '5'
  console.log(a || b);   // 1 || '5' -> 1
  console.log(!a);       // !1 -> false
  console.log(!!b);      // !!'5' -> true
} 

console.log('1 + "5"'); 
checkEqualls(1, '5');
