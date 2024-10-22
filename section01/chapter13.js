// 1. 콜백함수
function main(value){
    console.log(value);
    value();
}
function sub(){
    console.log("sub");
}
main(() => {
    console.log("sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback){
    for(let i=1; i<= count; i++){
        callback(i);
    }
}

repeat(5, function(i){
    console.log(i*2);
});