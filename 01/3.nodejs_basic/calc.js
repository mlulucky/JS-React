// calc.js 계산 기능을 하는 파일
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

// 서로 다른 js 파일을 가져다가 사용하는 방법
// => 모듈 내보내기 

// 모듈이란? 기능을 담당하는 분리된 파일
// => 🌱 노드js 에서는 모듈.exports = { } 로 모듈을 내보낼 수 있다.
module.exports = {
	moduleName: "calc module",
	add: add,
	sub: sub
};

// 터미널에서 node 로 자바스크립트 파일 실행하는 법
// => node 파일명.js



