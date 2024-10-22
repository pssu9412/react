// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴

// 2. 객체 프로퍼티 (객체 속성) : 키밸류
let person = {
    name: "쑤",
    age : 30,
    hobby: "산책",
    "like dog" : true // 띄어쓰기 사용할 때는 키에 " 따옴표 넣기
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);
let age = person["age"];
console.log(age);

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "비밀";
console.log(person);

// 3-3. 프로퍼티 수정하는 방법
person["job"] = "백수";
console.log(person);

// 3-4. 프로퍼티 삭제하는 방법
delete person.job;
console.log(person);

// 3-5. 프로퍼티 존재 유무를 확인하는 방법 (in 연산자)
let result1= "name" in person;
console.log(result1); // true false 만 나옴