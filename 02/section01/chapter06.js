// 1. 묵시적 형 변환
// 자바스크립트 엔진이 알아서 형변환 하는 것

let num = 10;
let str = "20";

const res = num + str; // 1020 (숫자 + 문자 => 문자타입)
console.log(res);

// 2. 명시적 형 변환
// 내장함수 등을 이용해서 직접 형변환을 명시
let str1 = "10";
let strNum = Number(str1); // 문자 => 숫자
const res2 = 10 + strNum; // 20
console.log(res2);

// parseInt : 문자가 포함된 숫자도 숫자로 잘 변환해줌
// 단 숫자가 앞에있는 경우
let str2 = "10개";
let strNum2 = parseInt(str2); 
console.log(strNum2); // 10

let num1 = 20;
let numStr = String(num1); // 숫자 => 문자
console.log(num1 + "입니다.");
