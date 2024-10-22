// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자 
let var1;
let var2= 10;
let var3 = 20;

let var4 = var1 ?? var2;
console.log(var4);

// 2. typeof 연산자
// -> 값의 타입을 문자열로 변환하는 기능을 하는 연산자
let var5 = 1;
var5 = "hello";
let t1 = typeof var5;
console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자 
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 변환
let var6 = 8;
// 변수 res 에 var6의 값이 짝수일 때 "짝수" 홀수일때 "홀수"
let res = var6 % 2 === 0 ? "짝수" : "홀수" ;
console.log(res);