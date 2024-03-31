// 함수 선언식
function funcB () { 
	console.log("funcB");
}

// 1. 함수 표현식
// 함수를 값으로 사용
let varB = funcB; // funcB 라는 함수 자체를 변수에 대입
console.log(varB); // 함수
varB(); // 변수명으로 함수 호출

// 익명함수로 대입 가능
let varA = function () { // 익명함수
	console.log("funcA");
};
console.log(varA); // 함수
varA(); // 변수로 함수 호출



// 2. 화살표 함수
// 함수를 더 간결하게 표현
let varC = (value) => {
	console.log(value);
	return value + 1;
}
console.log(varC(10));

// 실행할 코드문이 한줄인 경우 return 문, {} 중괄호 문 생략 가능 
let varD = (value) => value + 1;
console.log(varD(10));
