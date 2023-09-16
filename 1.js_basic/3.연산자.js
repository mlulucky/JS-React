// 🌱 대입 연산자 (값 대입)
// =
let a = 1;

// 🌱 사칙연산 연산자
let b = 2;
console.log("1+2= ", a+b);
console.log("1-2= ",a-b);
console.log("1*2= ",a*b);
console.log("1/2= ",a/b);
console.log("1%2= ",a%b); // % : 나눈 나머지

// 🌱 연결 연산자(2개 이상의 문자열을 연결)
// 문자열 + 문자열 => 문자열 + 문자열
// 문자열 + 숫자  =>  문자열 + 문자열 (숫자형을 문열로 형변환을 한다.)
let c = "3";
console.log("1+'3'= ",a+c); // 1+"3" = "13"

// 🌱 복합 연산자(산술연산자 + 대입연산자)
// += , -= , /=  
let d= 5;
// d = d+10;
d += 10;
console.log("복합연산자",d);

// 🌱 증감 연산자(증가, 감소 연산자 - 숫자타입에만 사용) - 연산자의 위치에 따라서 후위연산자, 전위연산자로 나뉜다.
let e = 10;
e++; // e += 1
e--;

// 후위연산자 - 코드 이후부터 연산적용
// 전위연산자 - 코드적용부터 바로 연산적용
console.log("증감연산자", e); // 10
console.log("증감연산자", e++); // 10
console.log("후위연산자 결과",e) // 11
console.log("전위연산자 결과", --e); // 10

// 🌱 논리 연산자 - boolean 자료형에 사용
// ! : not 
// &&(AND), ||(OR)
console.log(!false); // false -> true
console.log(true && true); // 둘다 true 면 true
console.log(true && false); // 둘중 하나라도 false 면 false
console.log(true || false); // 둘중 하나라도 true 면 true
console.log(false || false); // 둘다 false 면 false

// 🌱 비교 연산자
// ==, != : 값만 비교
// ===, !== : 값, 자료형 둘다 비교
// >, <, >=, <=

// let compareA = 1 == "1"; // == 값만 비교 - true
// let compareA = 1 === "1"; // === 값, 타입 비교 - false
// let compareA = 1 != "1"; // != 값만 비교(값이 다른가?) - false
let compareA = 1 !== "1"; // != 값, 타입 비교(값, 타입이 다른가?) - true
console.log("비교 연산자", compareA);

// js : 타입이 없는 언어 = 동적타입 언어
// 🌱 타입을 확인하는 연산자 : typeof
let f = 1;
let ff = "1";
console.log("타입확인 연산자",typeof ff);


// 🌱 null 병합 연산자
// ??
let o; // 선언만. 값할당x => undefined 할당
o = o ?? 10; // o 가 null 또는 undefined 일때 o 에 10 값을 대입하라
console.log("null 병합 연산자 ??", o);
