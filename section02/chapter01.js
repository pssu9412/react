// 1. Falsy한 값 *7가지가 있음
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if(!f4){
    console.log("falsy");
}


// 2. Truthy한 값 ->7가지 Fasly 값들을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if(t4){
    console.log("Truthy");
}


// 3. 활용 사례

function printName(person){
    if(!person){
        console.log("값이 없음");
        return;
    }
    console.log(person.name);
}

// let person = {name:"sukyoung"};
let person;
printName(person);