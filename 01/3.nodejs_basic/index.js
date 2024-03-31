// 🌱 노드js 모듈 불러오기 require(내보낸 모듈의 경로);
const calc = require("./calc");
console.log(calc);

// 노드 js - 모듈 내보내기 exports / 불러오기 require
// 노드 js 의 내장함수이므로
// 순수 바닐라 js 에서는 사용불가
// 노드 js 가 제공하는 기본적인 모듈 시스템
// => CommonJs 모듈시스템 (<-> ES 모듈시스템)

// 불러온 모듈의 함수를 사용하기
console.log("calc add 함수실행", calc.add(1,2));
console.log("calc sub 함수실행", calc.sub(5,2));
