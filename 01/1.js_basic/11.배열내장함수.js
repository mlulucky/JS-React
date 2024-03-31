// 배열 내장함수 == 객체 메서드
// 자바스크립트 배열 == 객체

// 배열 순회
const arr = [1,2,3,4];

// 🌼 배열.forEach()
arr.forEach((ele) => console.log(ele));
// ==
arr.forEach(function(ele) {
	console.log(ele * 2);
})

// 🌼 배열.push(추가할 요소)
// 새로운 배열을 만들어 요소를 추가하기
const newArr = [];
arr.forEach((ele) => newArr.push(ele *2));
console.log(newArr); // [2,4,6,8]

// 🌼 배열.map
// 원본배열의 요소만큼 반복. 연산한 값을 return(반환) 해서 새로운 배열로 반환
const mapNewArr = arr.map((ele) => ele*2);
console.log(mapNewArr);

// 배열 순회
let number = 3;
// 배열에 number 가 있는 경우 true 반환
arr.forEach((ele) => {
	if(ele===number){
		console.log(true)
	}
});

// 🌼 배열.includes(인자) 
// 배열에 인자를 포함하고 있는지 결과를 boolean 타입으로 반환
console.log(arr.includes(number));

// 🌼 배열.indexOf(인자)
// 존재하면 몇번째 인덱스인지 확인
// 배열에 인자가 없는 경우 -1 을 반환
console.log(arr.indexOf(5)); // -1
console.log(arr.indexOf(3)); // 2 // 3 인자의 인덱스 2 를 반환

// 객체를 포함한 배열
const colorArr = [
	{num: 1, color: "red"},
	{num: 2, color: "yellow"},
	{num: 3, color: "green"},
	{num: 4, color: "blue"},
	{num: 5, color: "blue"},
]

// 🌼 배열.findIndex((배열의 요소) => { return 조건식 }); // 조건을 만족하는 인덱스를 반환
// 컬러가 그린인 인덱스
let findIndex = colorArr.findIndex((ele) => ele.color === "green"); // { return  생략가능 
let findIndex2 = colorArr.findIndex((ele) => {
	return ele.color === "blue"
});

console.log("findIndex",findIndex); // 2
console.log("findIndex",findIndex2); // 3 // 일치하는 조건인 경우, 먼저 만나는 조건의 인덱스를 반환

// 🌼 배열의 요소에 접근하는 법 
// 배열.find((배열의 요소) => { return 조건식 })// 조건을 만족하는 요소를 반환
const ele = colorArr.find((ele) => ele.color === "blue");
console.log(ele);

// 🌼 배열 필터링
// 배열.filter((배열의 요소) => 조건식 ) // 조건식을 true 반환하는 배열의 모든 요소를 반환
const blueArr = colorArr.filter((ele) => ele.color === "blue");
console.log("blueArr",blueArr);

// 🌼 배열 자르기
// 배열.slice(시작인덱스, 마지막인덱스) : 인덱스를 기준으로 자르기
// 시작인덱스부터 마지막인덱스 전까지의 새로운 인덱스 배열을 반환
const sliceArr = colorArr.slice(0,3);
console.log("sliceArr",sliceArr);

// 🌼 배열 붙이기
// 배열1.concat(배열2) : 배열1 에 배열2 를 붙인다. 합친다.
const arr0 = [1,2,3];
const arr1 = [4,5];
const concatArr = arr0.concat(arr1);
console.log("concatArr", concatArr);

// 🌼 배열 정렬
// 배열.sort() : 원본 배열 순서를 정렬
let charArr = ["다","나","가"];
const sortArr = charArr.sort();
console.log("sortArr", sortArr);
console.log("charArr", charArr);

// 🌼 숫자형 배열 정렬
// 배열.sort() 정렬은 문자열 유니코드 순서를 기준으로 오름차순 정렬
// => 숫자형 배열 정렬은 숫자를 비교하여 정렬하기

// 배열.sort(비교함수)
// 비교함수
const compare = (a,b) => {
	// 1. 같다
	// 2. 크다
	// 3. 작다
	
	if(a > b) {
		// 크다
		return 1; // 큰값은 인덱스를 뒤로
	}	
	else if(a < b) {
		// 작다
		return -1; // 작은값은 인덱스를 앞으로
	}
		// 같다
	return 0; // 같은값은 인덱스를 안바꾸기
}

let numbers = [0,1,3,2,10,50,30];
console.log(numbers.sort()); // [ 0, 1, 10, 2, 3, 30, 50 ]
console.log(numbers.sort(compare)); // [ 0, 1, 2, 3, 10, 30, 50 ]


// 🌼 배열내의 모든 요소를 문자열로 합치기
// 배열.join(연결구분자) 
const stringArr = ["은정", "님", " 안녕하세요.", " 또 오셨네요.^^"];
console.log(stringArr.join(''));