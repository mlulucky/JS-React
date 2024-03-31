// JS - 변수와 상수

let $age = 25;
console.log($age);
// 변수는 숫자가 아닌 문자로 시작해야한다.
// 변수는 $,_ 문자가 아닌 문자를 포함시 에러
// 자바스크립트의 예약어로는 변수명 사용 불가

// var 변수 중복선언, 재할당 가능
var age = 20;
var age = 30; 
console.log(age);

// let, const : 변수 중복선언 불가
// let 변수 재할당 가능
// const 변수 재할당 불가능 (read-only)

let person = 'iu';
person = 'suzy';
console.log(person);

const fruit = 'mango';
// fruit = 'melon'; 에러
console.log(fruit);