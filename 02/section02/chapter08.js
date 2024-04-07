// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 배열.forEach((item, idx, arr) => {})
// 모든 요소를 순회하면서 각각 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
	console.log(idx, item * 2);
})

let doubledArr = [];
arr1.forEach((item, idx, arr) => {
	doubledArr.push(item * 2); // [2,4,6]
})

// map 메서드 자체가 새로운 배열을 반환하기 때문에, ... 을 구문을 중첩해 사용하지 않는다. 에러
// let arr = ...arr1.map((item, idx) => item * 2)

// 2. includes
// 배열.includes(요소)
// 배열에 특정 요소가 있는지 확인 및 여부(true, false) 를 반환
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
console.log(isInclude);

// 3. indexOf
// 배열.indexOf(요소)
// 특정 요소의 인덱스 위치를 찾아서 반환
// 존재하는 경우 인덱스, 존재하지 않는 경우 -1 반환
// 왼쪽부터 인덱스 위치를 찾아서 반환 (배열의 요소가 중복인 경우, 첫번째 요소의 인덱스 반환)
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index);

// 4. findIndex
// 가장 처음 조건을 만족하는 인덱스를 반환
// 특정 요소의 인덱스(위치)를 반환
// 조건을 만족하는 요소가 없는 경우, -1 반환
let arr4 = [1, 2, 3];
let findIndex = arr4.findIndex((item) => item % 2 !== 0);
console.log("findIndex " + findIndex);

// indexOf 외에 findIndex 가 존재하는 이유
// indexOf 는 객체의 위치(인덱스)를 찾을 수 없다.
// -> 이유) indexOf 는 얕은 비교를 한다. (===) 즉 객체인 경우 참조값으로 비교가 되기 때문에
// findIndex 는 콜백함수로, 특정 프로퍼티 값으로 비교할 수 있어, 객체의 인덱스를 찾을 수 있다.
// 원시타입 인덱스 찾기 : indexOf
// 객체타입 인덱스 찾기 : findIndex 


// 객체 인덱스 찾기
let objectArr = [
	{ name: "dmswjdans" },
	{ name: "문은정" }
]

let find_index = objectArr.indexOf({ name: "문은정" });
console.log("find_index", find_index); // -1 (찾을 수 없음) 
// 왜냐면 objectArr 의 {name: "문은정"} 과 indexOf 의 요소 {name: "문은정"} 는 (새로운 객체) 다른 참조값을 깆는다.

// findIndex
let find_index2 = objectArr.findIndex((item, index, arr) => item.name === "문은정");
console.log("find_index2", find_index2); // 1 인덱스


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾아서, 해당 요소를 반환

let arr5= [
	{name: "dmswjdans"},
	{name: "문은정"}
]

let 만족하는요소 = arr5.find((item, idx, arr) => item.name === "문은정");
console.log("만족하는요소", 만족하는요소); // { name: '문은정' }