// 5 가지 배열 변형 메서드
// 1. filter
// 콜백함수의 조건을 만족하는 요소들을 필터링하여 새로운 배열을 반환

let arr = [
	{ type: "cookie", ingredient: "blueberry" },
	{ type: "cookie", ingredient: "strawberry" },
	{ type: "cookie", ingredient: "lemon" },
	{ type: "cookie", ingredient: "lemon" },
]

let lemonCookies = arr.filter((item, idx, arr) => item.ingredient === 'lemon');
console.log(lemonCookies);


// 2. map
// 배열의 모든 요소를 순회하며 각 요소에 콜백함수를 실행한 결과로 새로운 배열을 반환
let arr2 = [1, 2, 3];
let doubledArr = arr2.map((item, idx, arr) => item * 2);
console.log(doubledArr); // [2,4,6]


// 3. sort
// 배열을 사전순으로 오름차순 정렬하는 메서드 
// 원본 배열 자체를 정렬
// 숫자인 경우는 비교함수 필요
let arr3 = ['c', 'b', 'a'];
console.log(arr3.sort()); // ['a', 'b', 'c']

let arr4 = [1000, 50, 60];

let numArrSort = arr4.sort((a, b) => a - b);

let numArrSort2 = arr4.sort((a, b) => {
	if (a > b) {
		return 1; // 큰값은 인덱스를 뒤로
	} else if (a < b) {
		return -1; // 작은값은 인덱스를 앞으로
	} else {
		return 0; // 같은값은 인덱스를 안바꾸기
	}
})
console.log(numArrSort);
console.log(numArrSort2);


// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환
let arr5 = ['c', 'b', 'a'];
const sorted = arr5.toSorted(); // ['a', 'b', 'c']
console.log(sorted);

let arr6 = [3, 2, 1];
console.log(arr6.toSorted()); // [1,2,3]


// 5. join(구분자)
// 배열의 요소를 하나의 문자열로 합쳐서 반환하는 메서드
// 구분자가 없을시 기본 구분자 콤마로 연결
let arr7 = ['hello', 'new', 'world'];
let arrToString = arr7.join(); // hello,new,world
let arrToString2 = arr7.join("-") // hello-new-world
console.log(arrToString2);


