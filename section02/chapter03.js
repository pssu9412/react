// 1. 배열의 구조 분해 할당
let arr = [1,2,3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
// let [one,two,three] = arr;
// let [one,two] = arr;
let [one,two,three,four = 4] = arr;

console.log(one,two,three, four);

// 2. 객체의 구조 분해 할당
let person ={
    age:30,
    name: "su",
    hobby:"운동"
};

let {name, age, hobby} = person;
console.log(name, age);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name,age,hobby})=>{
    console.log(name,age,hobby);
}

func(person);