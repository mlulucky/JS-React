// 객체 == 비원시타입(Non Primitive Type)
// 한번에 여러개의 값. 데이터를 저장할 수 있다.

// 🌼 객체 생성하는 법
// 🌱 1. new // 객체 생성자 방식
class Person {
	constructor(name, job) {
		this.name = name; // this 는 자기 자신 객체, Person {} // Person.name = 매개변수 name
		this.job = job;
	}
}

// 클래스. 클래스 선언 후 호출사용 가능
let person = new Person("moon", "programmer");
console.log(person); // {name: "moon", job: "programmer"}


// 함수선언식. 함수 선언전에 호출사용 가능
let person1 = new Person1("moon", "programmer");
console.log(person1); // {name: "moon", job: "programmer"}

function Person1(name, job) { // 함수 선언식
	this.name = name;
	this.job = job;
}


// 🌱 2. {} 중괄호 // 객체 리터럴 방식
let person2 = {};

// 객체가 가지는 데이터
// key : value 형태로 데이터를 넣어준다.
// 여러가지 타입의 value 를 담을 수 있다.
// key 는 항상 문자열이다. 하지만 "key" 라고 적지 않아도 된다.
let person3 = {
	key : "value", // 프로퍼티 (객체 프로퍼티) == 속성 // 객체가 가진 데이터
	key2: "value2",
	key3: true,
	key4: undefined,
	key5: [1,2],
	key6: function(){}
}

console.log("person3",person3);


// 🌼 객체의 프로퍼티에 접근하는 방법
// 객체의 key 를 통해서 해당 value 에 접근
let human = {
	name: "moon", // 멤버
	job: "programmer",
	say: function(){
		console.log(`human 객체 say함수 : 안녕하세요. 나는 ${this.name}`); // this 는 객체 자기자신 human
	} // 메서드 ==  객체 안의 함수
} 
console.log("human",human); // 프로퍼티의 값에 접근


// 🌱 1. .점
// 객체.key
console.log("human.name ",human.name); 


// 🌱 2. [] 대괄호 
// 객체["key"] key 값에 따옴표(문자열표시) 반드시 적기
console.log("human[job] ", human["job"]);

console.log("getPropertyValue", getPropertyValue("name"))
function getPropertyValue(key){
	return human[key];
}


// 🌱 객체 안에 함수 실행
human.say(); 
human["say"]();


// 🌼 객체 안에 프로퍼티가 있는지 확인하는 방법 
// in 연산자
// "프로퍼티" in 객체
console.log(`name 있는가? ${"name" in human}`);
console.log(`job 있는가? ${"job" in human}`);
console.log(`gender 있는가? ${"gender" in human}`);


// 🌼 객체의 프로퍼티 추가/수정 하는 법
// 1. 객체.프로퍼티 = "값"
// 2. 객체["프로퍼티"] = "값"

// 객체는 상수 const 로 선언을 했더라도, 
// 객체의 프로퍼티 추가/수정은 가능하다.
// 객체를 새로 대입하는 것이 아니므로! (즉, 재대입은 불가)
const person0 = {name : "moon"};
// person0 = {name: "moon"}; // 재대입 불가
console.log(person0); // 자바스크립트는 동적언어이므로, 컴파일 단계에서는 에러발새안하고, 실행돌렸을때 에러발생함.

// person0 은 {name : "moon"}
person0.name = "kim"; // 있는 프로퍼티 name 인 경우는 name 프로퍼티 수정
person0.country = "korea"; // 없는 프로퍼티 country 인 경우는 프로퍼티 추가
person0["job"] = "programmer"; // 없는 프로퍼티 country 인 경우는 프로퍼티 추가
console.log(person0); // {name: "kim", country: "korea", job : "programmer"}


// 🌼 객체의 프로퍼티 삭제하는 법 
// 🌱 1. delete
delete person0.name; 
// 객체와 프로퍼티의 연관을 끊을 뿐. 메모리에는 계속 남아있다.
console.log(person0); // {country: "korea", job : "programmer"}

// 🌱 2. null
// 메모리의 연계를 끊는법 
person0.country = null;
console.log(person0); // {country: null, job : "programmer"}
// 값을 null 로 만들어준다. (메모리에서 값이 삭제된다.)

