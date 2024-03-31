// 1. Number Type _ 숫자타입 : 사칙연산을 지원
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity; // 무한대
let mInf = -Infinity;
let nan = NaN;

// 2. String Type _ 문자열타입 : "", 덧셈연산을 지원
let name = "lucky";
let love = "dog";
let intro = name + love;

// 백틱`` - 문자열안에 변수${}를 동적으로 넣을 수 있다.
// 템플릿 리터럴 문법
let introText = `${name}은 ${love}를 좋아합니다.`;
console.log(introText);

// 3. Boolean Type
let isSwitch = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다.)
// 의도적으로 값이 없음을 나타내는 값
let empty = null;

// 5. Undefined Type
// 자동으로 할당되는 값. 변수선언후 값을 할당 안한 경우.
let none;
console.log(none);