// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴(간결. 대부분 사용)

// 어떤 자료형이든 저장 가능
// 길이의 한계도 없다.

// 배열 생성과 동시에 값을 저장
let arrC = [1, 2, 3, true, "hello", null, undefined, () => { }, {}, []];


// 2. 배열 요소 접근
// 번호(인덱스)로 접근 가능 (0,1,2 ~)
let item1 = arrC[0]; // 1
let item2 = arrC[1]; // 2

// 배열 요소 수정
arrC[0] = "hello";
console.log(arrC);