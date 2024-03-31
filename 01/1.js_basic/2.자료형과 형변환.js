// 숫자형
let age = 25; // 정수
let tall = 175.9; // 실수
let inf = Infinity; // 무한대
let minusInf = -Infinity; // 음의 무한대
let nan = NaN; // 숫자가 아니다. (연산 결과)
console.log(age + tall);

// 문자열 "", '', ``(백틱)
let name = "mlucky"
let name2 = '문은정';
let name3 = `${name} ${name2}`; // ${} 템플릿 리터럴
console.log(name3);

// boolean - true / false
let result = true;
console.log(result);

// null - 값이 없음을 의도적으로 명시
let none = null;
console.log(none);

// undefined - 값 할당이 안됬을때, 값 초기화가 안되있을때
let variable;
console.log(variable);

// 연산(형변환) - 문자열, 숫자의 더하기, 곱하기
let number1 = 14;
let number2 = "2";
console.log(number1 * number2); // 14 * "2" == 28 // 자바스크립트 엔진이 연산에 맞추어 묵시적으로 형(타입)변환 후 연산
console.log(number1 + "2"); // 14 + "2" == 142 // 문자열 더하기 연산의 경우에는 자동형변환 안됨  
console.log("2" + number1); // "2" + 14 == 214

// 문자열 -> 숫자로 변환하여 연산 : parseInt() - 명시적 형변환
console.log(parseInt("2") + number1); // parseInt("2") + 14 == 16
