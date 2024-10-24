// 5가지 배열 변형 메서드

// 1. filter :  기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name:"홍길동", hobby:"테니스"},
    {name:"정년이", hobby:"테니스"},
    {name:"홍길동", hobby:"운동"}
];

const tennisPeople = arr1.filter((item)=>{
    if(item.hobby ==="테니스") return true;
});
console.log(tennisPeople);


// 2. map : 배열의 모든 요소를 순회하면서 각각 콜백함수를 실해하고 그 결과값들을 모아서 새로운 배열로 변환

let arr2 = [1,2,3];
arr2.map((item,idx,arr)=>{
    console.log(idx,item);
});

const mapResult = arr2.map((item,idx,arr)=>{
    return item*2;
});
console.log(mapResult);

let names = arr1.map((item)=>item.name);
console.log(names);

// 3. sort : 배열을 사전순으로 정렬하는 메서드

let arr3 = ["d", "a", "c"];
arr3.sort();

console.log(arr3);

let arr4 = [10, 3, 5]; // 숫자는 대소 비교하는 콜백함수 써야함
arr4.sort((a,b)=>{
    if(a>b){
        return 1;
    }else if(a<b){
        return -1;
    }else {
        return 0; // 자리 유지 
    }
});

console.log(arr4);


// 4. toSorted : 정렬된 새로운 배열을 반환하는 메서드 (기존건 유지)

let arr5 = ["c", "r", "a"];
const sorted= arr5.toSorted();

console.log(arr5);
console.log(sorted);


// 5. join : 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드

let arr6 = ["hi","nice","to","meet you"];
const joined = arr6.join(" ");
console.log(joined);