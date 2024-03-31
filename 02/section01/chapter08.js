// 1. null 병합 연산자(??)
// 존재하는 값을 추려내는 기능
// null, undefined 가 아닌 값을 찾아내는 연산자

let var1; // 초기화x -> undefined
let var2 = 10;
let var3 = 20;
let var4 = var1 ?? var2; // 10
console.log(var4);

// 둘다 값이 값이 있는 경우, 먼저 적은 값을 반환
let var5 = var2 ?? var3;
console.log(var5);

// 2. typeof 연산자
// 값의 타입을 문자열로 반환하는 연산자

let var7 = 1;
var7 = "hello";
var7 = true;
let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자
// 항을 3개 사용하는 연산자
// 조건식 ? 참인경우 실행 : 거짓인 경우실행
let var8 = 10;

// var8 % 2 === 0 가 참인 경우 "짝수", 거짓인경우 "홀수" 를 반환
let res = var8 % 2 === 0 ? "짝수" : "홀수";