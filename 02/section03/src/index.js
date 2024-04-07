// CommonJs 모듈 시스템
// require(export 모듈경로) // export 모듈이 내보내는 값을 반환한다.
// const data = require("./math");
// console.log(data);
// console.log(data.add(1,2));
// console.log(data.sub(1,2));

// CommonJs 모듈 시스템
// 구조분해 할당으로 받아오기
// const {add, sub} = require("./math");
// console.log(add(1,2));
// console.log(sub(2,1));

// ES Js 모듈 시스템
// import { 가져올 객체 리터럴 } from '모듈경로'
import mul, {add, sub} from "./math.js";
console.log(add(1,2));
console.log(sub(2,1));
console.log(mul(2,3));
