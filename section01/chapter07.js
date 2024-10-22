// 1. 대입 연산자 = 
let var1 = 1;

// 2. 산술 연산자 +,-,*,/,%

// 3. 복합 대입 연산자 
let num1 = 10;
num1 += 20;
console.log(num1);

// 4. 증감 연산자 ++,--
let num2 = 9;
num2++; // 후위 연산
console.log(num2);
console.log(++num2); // 전위 연산

// 5. 논리 연산자 
let or = true || false;

let and = true && false;

let not = !true;

console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2; // ==는 자료형까지 비교해주지 않고 값만 비교함
let comp2 = 1 !== 2;
console.log(comp1, comp2);

let comp3 = 2>1; // >= 
