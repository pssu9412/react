function returnFalse(){
    console.log("false 함수");
    return false;
}

function returnTrue(){
    console.log("true 함수");
    return true;
}

/*
console.log(returnFalse() && returnTrue()); // false 함수만 실행 됨
console.log(returnTrue() && returnFalse()); // true 함수 실행 후 false 함수까지 실행 됨
console.log(returnFalse() || returnTrue()); // false 함수 실행 후 true 함수까지 실행 됨
console.log(returnTrue() || returnFalse()); // true 함수만 실행 됨.
*/

// 단락 평가 활용 사례

function printName(person){
    // console.log(person && person.name);
    const name = person && person.name;
    console.log(name|| "person 값이 없음");
}


printName();
printName({name:"sukyoung"});