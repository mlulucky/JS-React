// 함수는 데이터 타입. 함수도 값이다.
// 변수에 대입해서 값처럼 사용할 수 있다.

// 🌱 함수 표현식
// 함수를 변수에 담아서 활용하기.
// 변수에 대입하는 경우. 함수의 이름을 정하지 않아도 된다.
let hello = function (){
	return "안녕하세요. 여러분";
}
// hello 에 함수가 담겨져 있다.
console.log(hello); // function hello

const helloText = hello(); // 함수실행. 반환값을 helloText 변수에 담는다.
console.log(helloText); // hello() 함수의 반환값 "안녕하세요. 여러분" 이 담긴다.


// 🌱 함수 선언식 vs 함수 표현식 비교
console.log(helloB());
// console.log(helloA());

let helloA = function (){ // 함수 표현식 _ 호이스팅x
	return "helloA 안녕하세요. 여러분";
}

function helloB(){ // 함수 선언식 _ 호이스팅o
	return "helloB 안녕하세요. 여러분";
}


// 👀 함수 호이스팅
// 1. 함수 선언식
// 함수 호이스팅으로 프로그램 실행전 코드의 최상단으로 올려진다.
// 자바스크립트 엔진이 함수 선언전 호출해서 사용가능

// 2. 함수 표현식
// 함수 호이스팅이 일어나지 않아서
// 함수 선언 전에 함수를 호출해서 사용불가


// 함수 표현식을 더 간략하게 하는 방법
// 화살표 함수
// 🌱 화살표 함수 _ 호이스팅x
let helloC = () => {
	return "helloC 안녕하세요. 여러분";
}
// return 값이 하나인 경우에 {} 중괄호, return 모두 생략가능
let helloD = () => "안녕하세요. 여러분";

console.log(helloC());