// 삼항연산자
// 간단한 조건식을 짧게 표현
let a = 3;
if(a>=0) {
	console.log("양수");
} else {
	console.log("음수");
}

// 조건식 ? 조건식이 true 인 경우 실행 : 조건식이 false 인 경우 실행
// 양수인가 음수인가 ?
a>=0 ? console.log("양수") : console.log("음수");

// 빈배열인가 ?
let arr = ["1",2, {name: "moon"}];
arr.length === 0 ? console.log("빈 배열") : console.log("안 빈 배열");

const arrStatus = arr.length === 0 ? "빈 배열" : "안 빈 배열";
console.log("arrStatus",arrStatus);

// falsy, truthy 값으로 조건식 이용
const b = []; // 빈배열은 true
const result = b ? true : false;
console.log("result", result); 

// 삼항연산자 중첩
// 삼항연산자를 중첩하는 경우에는 가독성이 떨어지기 때문에 이 경우에는 if 문을 사용하는 것이 더 좋다.
// 학점 계산 프로그램
// 90점 이상 A+
// 50점 이상 B+
// 둘다 아니면 F

let score = 20;
score >= 90 ? console.log("A+") : score >=50 ? console.log("B+") : console.log("F");

if(score >= 90) {
	console.log("A+");
} else if(score >= 50) {
	console.log("B+");
} else {
	console.log("F");
}