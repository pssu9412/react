// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 해주는 것
let num = 10;
let str = "20";

const result = num + str ;
console.log(result);

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환 명시
// -> 문자열 -> 숫자
let strNum = Number(str);

let str2 = "10개"; // 숫자가 앞에 있어야 함
let strNum2 = parseInt(str2);
console.log(10 + strNum2);