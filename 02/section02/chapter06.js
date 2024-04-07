// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) { // 배열.length : 길이를 저장하는 프로퍼티
	console.log(arr[i]);
}

// 1.2 for of 반복문 (배열에만 사용)
// 배열의 값을 순서대로 꺼내서 item 에 담는다.
for (let item of arr) {
	console.log(item);
}

// 2. 객체 순회
let person = {
	name: "문은정",
	hobby: "walk",
	work: "developer"
}

// 2.1 Object.keys 
// 객체에서 key 값들만 뽑아서 새로운 배열을 반환
let keys = Object.keys(person); // [ 'name', 'hobby', 'work' ]

for (let i = 0; i < keys.length; i++) {
	console.log(keys[i])
}

for (let key of keys) {
	console.log(key, person[key]);
}

// 2.2 Object.values
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
console.log(values);

// 2.3 for in (객체에만 사용)
// person 객체의 key(속성)을 하나씩 key 라는 변수에 담는다.
for (let key in person) {
	console.log(key, person[key]);
}


