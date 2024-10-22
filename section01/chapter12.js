// 1. 함수 표현식
function funA(){
    console.log("A");
}

let varA = funA;
console.log(varA);
varA();

let varB = function(){ // 익명함수
    console.log("B");
}
varB();

// 2. 화살표 함수
let varC = () => {
    console.log("C");
}
varC();

/* let varD = (value) => value +1;
console.log(varD(10)); */
let varD = (value) => {
    console.log(value);
    return value +1;
}
console.log(varD(10));