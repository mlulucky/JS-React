// 배열
// 여러개 항목. 데이터를 가진 리스트

// 🌼 배열 만드는 법
// 🌱 1. 생성자
let arr0 = new Array();

// 🌱 2. 배열 리터럴 []
// 여러 타입의 데이터를 가질 수 있다.
let arr = [1,"2",null,undefined, {}, [], function(){}];
console.log(arr);

let arr1 = [1,2,3,4,5];
console.log(arr1);

// 🌼 배열 요소에 접근
// 배열은 객체와 달리 key 가 없다.
// 배열의 순수한 인덱스(순서)를 가지고 각각의 값에 접근할 수있다.
// 배열[인덱스]
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]); // 없는 값 : undefined 

// 🌼 배열의 요소 추가
// 배열.push(추가할 값) : 배열의 마지막 인덱스로 요소 추가
arr1.push(7);
console.log(arr1); // [1,2,3,4,5,7]

arr1.push({name: "moon"});
console.log(arr1);

// 🌼 배열의 길이
// 배열.length
// 자바스크립트에서 배열도 하나의 객체로서, 자체적으로 유용한 함수들을 가지고 있어서 
// 배열이 가진 함수들을 사용할 수 있다. 배열.함수 로 객체 접근법으로 사용가능
console.log(arr1.length);
