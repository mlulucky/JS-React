// 배열과 객체를 우아하게 사용하는 방법
// 비구조화 할당 == 구조분해 할당
// 배열이나 객체 속성을 해체하여 개별 변수에 값을 담을 수 있는 JavaScript 표현식

// 🌼 1. 배열의 비구조화 할당 : 배열의 값(요소)을 순서대로 할당받아서 사용
let arr = ["one", "two", "three"];
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// 배열의 요소를 변수에 할당하는 법 => 간단하게 하기 (한줄로 변수 할당)
let [one, two, three, four = "four"] = arr;
// let [one, two, three] = ["one", "two", "three"];

// => 배열 arr 의 첫번째 인덱스를 one 변수에 할당, 두번째 인덱스를 two 변수에 할당, 세번째 인덱스를 three 변수에 할당
console.log(one, two, three, four);

// 배열의 요소 이외에 요소를 할당받으려면 ? undefined 
// 🌱 기본값을 전달할 수 있다. four = "four"

// 🌱 스왑(두개의 변수를 바꾸는)을 쉽게 할 수 있다.
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b);



// 2. 🌼 객체의 비구조화 할당
// 객체의 key 값을 기준으로, 변수에 변수와 동일한 이름인 key의 값을 할당 
// 변수명 == key 값
// 객체의 index 가 아니라, 변수의 순서는 상관이 없다.

let object = {one0: "one", two0: "two", three0: "three"};

// let one0 = object.one0;
// let two0 = object.two0;
// let three0 = object.three0;

// let {one0, two0, three0} = object;
let {two0: twoTwo, three0: threeThree, one0, abc="four"} = object;
// 변수명: 수정된 변수명 으로 변수명을 key 이름이 아닌 다른 변수명으로 변경할 수 있다.
// two0 변수명 => twoTwo 변수명으로 변경하여, two0 키의 값 "two" 를 사용할 수 있다.

console.log(one0, twoTwo, threeThree, abc);


