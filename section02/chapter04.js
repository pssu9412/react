// 1. Spread 연산자 : 흩뿌리다, 펼치다
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let obj1 = {
    a: 1,
    b: 2
};
let obj = {
    ...obj1,
    c: 3,
    d: 4
};
console.log(obj);


function funcA(p1,p2){
    console.log(p1,p2);
}

funcA(...arr1);


// 2. Rest 매개변수 : 나머지, 나머지 매개변수
function funcB(one,...rest){ // 앞에 매개변수 추가는 가능하지만 rest 뒤엔 추가 불가
    console.log(rest);
}

funcB(...arr1);