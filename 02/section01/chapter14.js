// 스코프
// 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// 전역 스코프 : 전체 영역에서 접근 가능
// 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

// 함수, 조건문, 반복문 모두 스코프를 갖는다.
function funcA() {
	let b = 2;
	console.log(a);

	// 함수선언식이 함수 내부에 있는 경우 스코프를 갖는다.
	function funcB() { }; // 스코프: funcA
}
// console.log(b); // 컴파일 에러
// funcB();

if (true) {
	let c = 1;
	function funcB() { console.log("조건문 내부 funcB") };
}
// console.log(c); // 컴파일 에러

funcB();

for (let i = 1; i <= 10; i++) {
	let d = 1;
	function funcB() { console.log("반복문 내부 funcB") };
}
// console.log(d); // 컴파일 에러
funcB();

// 🐥 함수선언식은 함수내부에 선언된 경우만 스코프를 갖는다 (함수바깥에서 호출불가)
// 하지만 조건문, 반복문 내부에서 함수가 선언된 경우는 스코프를 갖지 않는다. (함수바깥에서 호출가능)