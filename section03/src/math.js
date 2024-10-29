// math 모듈
/*
function add(a,b){
    return a+b ;
}

function sub(a,b){
    return a-b;
}
*/

/* CJS 사용시

module.exports ={
    add : add,
    sub // 키와 값이 같을 경우 생략 가능
};
*/

// ES module 사용시
// export{ add, sub };


export function add(a,b){
    return a+b ;
}

export function sub(a,b){
    return a-b;
}

export default function multiply(a,b){
    return a * b;
}