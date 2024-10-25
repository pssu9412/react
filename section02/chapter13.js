// Promise 란? 
// => 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체

/*  3가지 상태
        대기 Pending - 해결 resolve - 성공 Fulfilled
                    - 실패 reject  - 실패 Rejected
*/


// Promise 객체 생성
const promise = new Promise((resolve, reject) => {
    // executor : 비동기 작업을 실제로 실행하는 함수
    

    setTimeout(()=>{
        const num = null;
    if(typeof num === 'number'){
        resolve(num*10);
    }else{
        reject("숫자가 아닙니다");
    }
        // console.log("hi");
        // // resolve("안녕");
        // reject("왜 실패");
    }, 2000);
});

// setTimeout(()=>{
//     console.log(promise);
// },2000);

// then 메서드 

// promise.then((value)=>{
//     console.log(value);
// });

// promise.catch((error)=>{
//     console.log(error);
// });
promise
    .then((value)=>{
        console.log(value);
    })
    .catch((error)=>{
            console.log(error);
    });


function add10(num){
    const promise = new Promise((resolve, reject) => {
    
        setTimeout(()=>{
        if(typeof num === 'number'){
            resolve(num + 10);
        }else{
            reject("숫자가 아닙니다");
        }
            // console.log("hi");
            // // resolve("안녕");
            // reject("왜 실패");
        }, 2000);
    });

    return promise;
}

const p = add10(0);
p.then((result)=>{
    console.log(result);

    const newP = add10(result);
    // newP.then((result)=>{
    //     console.log(result);
    // });

    return newP;
}).then((result)=>{
    console.log(result);
    return add10(result);
}).then((result)=>{
    console.log(result);
    return add10(result);
});