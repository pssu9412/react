// 5가지 요소 순회 및 탐색 메서드

// 1. forEach : 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시키는 메서드
let arr = [1,2,3,4];

arr.forEach(function(item, idx, arr){
    console.log(idx,item*2);
});

let doubleArr = [];
arr.forEach((item)=>{
    doubleArr.push(item * 2);
});
console.log(doubleArr);


// 2. includes : 배열에 특정 요소가 있는지 확인하는 메서드
let isIncludes = arr.includes(2);
console.log(isIncludes);


// 3. indexOf : 특정 요소의 인덱스를 찾아서 반환하는 메서드
// -> 얕은 탐색
let index = arr.indexOf(3); // 중복일 땐 제일 첫번째 인덱스 반환, 없을 땐 -1 반환
console.log(index);


// 4. findIndex : 모든 요소를 순회하면서, 콜백함수를 만족시키는 인덱스를 반환하는 메서드
// -> 깊은, 복잡한 탐색 가능

// const findedIndex = arr.findIndex((item)=>{
//     if(item % 2 == 0) return true;
// });
const findedIndex = arr.findIndex((item)=> item % 2 === 0);

console.log(findedIndex);


// 5. find : 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾고 그대로 요소 반환

let arr2 = [
    {name: "홍길동"},
    {name: "정년이"}
];

const finded = arr2.find((item)=>item.name ==="홍길동");
console.log(finded);