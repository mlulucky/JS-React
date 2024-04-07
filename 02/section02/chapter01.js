// 1. Falsy 한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // bigInt

if (!f1) {
	console.log("falsy");
}

// 2. Truthy 한 값
// 7가지 Falsy 한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
// 비효율적인 조건문을 간결하게 표현 가능

function printName(person) {
	// console.log(person.name); // undefined.name -> 에러
	if(!person) { // person 이 undefined, null 인 경우 모두 해당됨
		console.log("person 없음");
		return;
	}
	
}

let person; // 값 초기화x -> undefined
// let person = {name : "문은정"};
printName(person);
