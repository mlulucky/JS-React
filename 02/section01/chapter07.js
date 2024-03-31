// 1. 대입 연산자 (=)
let num = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// 산술연산자 우선순위
// (소괄호) >  *,/,%  > +,-
let num6 = (1 + 2) * 10;
console.log(num6);

// 3. 복합대입 연산자
// 산술 + 대입 연산자
let num7 = 10;
num7 += 20; // num7 = num7 + 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;

// 4. 증감 연산자
let num8 = 10;
console.log(num8++); // 10 // 후위 연산 : 코드 이후에 연산이 적용
console.log(num8); // num8++ 적용 -> num8 = 11;
console.log(++num8); // 12 // 전위 연산 : 코드에서 연산이 적용

// 5. 논리 연산자
let or = true || false; // 둘중 하나만 true 면 true
let and = true && false; // 둘다 true 여야 true
let not = !true; // 반전

// 6. 비교 연산자
let com1 = 1 === '1'; // false
let comp2 = 1 !== 2;

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;

// 동등 비교연산자
// ===, !== 값과 자료형을 비교
// ==, != 값만 비교
