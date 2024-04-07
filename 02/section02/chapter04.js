// 1. Spread 연산자
// 흩뿌리다. 펼치다
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려준다.

// 배열
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2); // [4, 1, 2, 3, 5, 6]

// 객체
let obj1 = {
	a: 1,
	b: 2
};

let obj2 = {
	...obj1,
	c: 3,
	d: 4
}; // { a: 1, b: 2, c: 3, d: 4 }
console.log(obj2);


// 함수 인자
function func(a, b, c) {
	console.log(a, b, c); // 1, 2, 3
}
func(...arr1);


// 2. Rest 매개변수
// 나머지, 나머지 매개변수
// 함수의 인자로 쓰이는 경우(...)
// 배열 형태로 값들을 하나로 모아준다.
// rest 매개변수는 마지막 인자로 쓰인다. (rest 이후에 인자는 올 수 없다.) 예: ...rest, four (X)

function funcB(one, ...rest) { // 첫번째 요소는 one 변수에 저장. 나머지 값은 배열형태로 묶어준다.
	console.log(one, rest); // 1, [2,3]
}

funcB(...arr1); // spread 연산자