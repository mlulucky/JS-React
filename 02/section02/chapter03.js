// 1. 배열의 구조 분해 할당
// 배열의 원소들을 순서대로 분해해서 변수에 할당
let arr = [1, 2, 3];
let [one, two, three, four] = arr;
console.log(one, two, three, four); // 1, 2, 3, undefined


// 2. 객체의 구조 분해 할당
// 객체의 프로퍼티를 키값에 저장
// 할당받는 변수의 이름을 바꿀 수 있음

let person = {
	name: "문은정",
	hobby: "walk",
	like: "dog"
}

// name 키 변수명을 myName 으로 변경
let { name : myName, hobby, like } = person;
console.log(myName, hobby, like);


// 3. 객체 구조분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, hobby, like}) => { // 객체 구조분해 할당
	console.log(name, hobby, like);
}

func(person); // 객체 person