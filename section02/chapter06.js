// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i =0; i < arr.length; i++){
    // console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for(let i =0; i <arr2.length; i++){
    // console.log(arr2[i]);
}

// 1.2 for of 반복문
for(let item of arr2){
    // console.log(item);
}


// 2. 객체 순회
let person = {
    name: "su",
    age: 30,
    hobby:"운동"
};

// 2.1 Object.keys 사용 : 객체 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
// console.log(keys);

for(let key of keys){
    console.log(key, person[key]);
}

// 2.2 Object.values : 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
// console.log(values);

for(let key of values){
    console.log(key);
}

// 2.3 for in 반복문
for(let key in person){
    console.log(key);
}