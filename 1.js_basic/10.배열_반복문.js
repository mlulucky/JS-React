// 특정 명령을 반복
console.log("moon");
console.log("moon");
console.log("moon");
console.log("moon");
console.log("moon");
// 중복되는 코드 -> 반복문으로

// 🌼 반복문
// 1. for문
for(let i =1; i<=100; i++) {
	// 반복문 수행할 명령
	// console.log("moon");
}
// for(초기식, 조건식, 반복문시 수행되는 연산) 
// 초기식이 반복문동안 연산이 되면서, 조건식을 만족할때까지 반복

// 🌼 배열 반복문
let arr = [1,2,3];
// 배열의 길이 : 3
// 배열의 인덱스 : 0,1,2
for(let i =0 ; i<arr.length; i++) {
	console.log(arr[i]);
}

// 🌼 객체 반복문
let person = {
	name: "문은정",
	age: 20,
	job: "programmer"
}

// 🌱 객체들의 key 값을 배열로 반환
// Object.keys(객체)
let personKeys = Object.keys(person);
console.log(personKeys); // ['name', 'age', 'job']

for(let i=0; i<personKeys.length; i++) {
	const key = personKeys[i];
	const value = person[key];
	console.log(`${key} : ${value}`);
}

// 🌱 객체들의 value 값을 배열로 반환
// Object.values(객체)
let personValues = Object.values(person);
console.log(personValues); // ['문은정', 20, 'programmer']
for(let i=0; i<personValues.length; i++) {
	console.log(personValues[i]);
}

