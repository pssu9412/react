/* CJS 사용시

// const moduleData = require("./math");
const {add, sub} = require("./math");
*/

// ESM 사용시

import {add,sub} from "./math.js";
// default 사용시 {} 사용하지 않음. 이름 변경 가능
import mul from "./math.js"; 

//import mul,{ add, sub } from "./math.js";

// console.log(moduleData.add(1,2));
// console.log(moduleData.sub(1,2));

/*
console.log(add(1,2));
console.log(sub(1,2));
console.log(mul(1,2));
*/

/*
    ES module 사용 시 package.json 파일 안에 
    "type": "module" 추가하기
*/

// 라이브러리 호출 시 이름만 호출하면 됨
import randomColor from "randomcolor"; 

console.log(randomColor());