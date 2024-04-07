// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (간결. 대부분 사용)

// 2. 객체 리터럴
// 객체 속성(프로퍼티)
// key: value
let person = {
	name: "문은정",
	like: "dog",
	hobby: "walk",
	10: 20, // key 로 숫자를 사용가능
	"like cute": true,
	extra: {}
}
// key 가 문자인경우, "" 를 쓰지 않아도 되지만
// key 가 띄어쓰기가 있는 경우 예외적으로 "" 을 써준다.

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근
// 접근하는 key 가 없는 경우 undefined 가 반환

// 점 표기법
// 객체명.key -> key 에 해당하는 값 반환 
let like = person.like;
console.log(like);

// 괄호표기법 // "" 로 문자열로 표시해야함
// "" 없는 경우, 변수로 인식한다.
// 문자열을 바꿔서 접근할 수 있기때문에 점표기법 보다 동적이다.
let name = person["name"];
let property = "hobby";
let hobby = person[property];
console.log(name);
console.log(hobby);


// 3.2 새로운 프로퍼티를 추가하는 법
person.job = "developer";
person["favoriteFood"] = "스시";
console.log(person);

// 3.3 프로퍼티를 수정하는 법
person.job = "dreamer";
person["favoriteFood"] = "마라탕";
console.log(person);

// 3.4 프로퍼티를 삭제하는 법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 법(in 연산자)
// 있으면 true, 없으면 false 반환
let isNameHere = "name" in person;
let isJobHere = "job" in person;
console.log(isNameHere);
console.log(isJobHere);