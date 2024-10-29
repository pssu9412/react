// 동기와 비동기 
/*
    동기 방식
        장점: 실행 순서 확인이 쉬움
        단점: 속도가 느려 성능 악화
    
    비동기 방식
        장점: 여러개의 작업을 동시에 진행시켜 속도가 빠름

        자바스크립트 엔진이 아닌 웹브라우저 안에 있는 Web APis 에서 실행됨
        
*/

console.log(1);
setTimeout(()=>{
    console.log(2);
}, 3000);
console.log(3);
