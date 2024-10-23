// 6가지의 요소 조작 메서드

// 1. push : 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr = [1, 2, 3];
const newLength = arr.push(4,5);

console.log(arr);
console.log(newLength);

// 2. pop : 배열의 맨 뒤에 있는 요소를 제거하고 반환
const poppedItem = arr.pop();

console.log(arr);
console.log(poppedItem);

// 3. shift : 맨 앞에 있는 요소를 제거하고 반환
const shiftedItem = arr.shift();

console.log(arr);
console.log(shiftedItem);

// 4. unshift : 배열의 맨 앞에 새로운 요소를 추가하는 메서드
const newLength2 = arr.unshift(5,1);

console.log(arr);
console.log(newLength2);

// 5. slice : 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환
// 원본 배열의 값이 바뀌지 않기 때문에 변수에 넣어서 사용해야함
let sliced = arr.slice(2,5);
let sliced2 = arr.slice(-2); // 뒤에서 2번째 인덱스까지 자르기
let sliced3 = arr.slice(2); // 2번인덱스부터 전부 자르기

console.log(arr);
console.log(sliced);
console.log(sliced2);
console.log(sliced3);

// 6. concat : 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr1 = [2,3];
let arr2 = [4,1];

let concatedArr = arr1.concat(arr2);
console.log(arr1);
console.log(concatedArr);