// 1. 상수 객체
const animal = {
	type: "강아지",
	name: "lucky",

}
// const 상수로 선언된 객체의 경우에도
// 객체의 값(프로퍼티)를 추가, 수정, 삭제는 가능하다.
animal.type = "dog";
animal.color = "brown";
delete animal.name;

console.log(animal);

// const 상수의 경우에는 아예 새로운 재대입이 불가한 것
// animal = "럭키"; // 에러

// 2. 메서드
// 값이 함수인 프로퍼티
// 동작을 정의하는 데 사용

const person = {
	name: "문은정",
	// 메서드
	eat: function() {
		console.log("밥먹기");
	},
	work: ()=>{
		console.log("일하기");
	},
	// 메서드 선언
	relax() {
		console.log("쉬기");
	}
}

person.eat();
person.work();
person.relax();
person["relax"]();