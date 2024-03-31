// 참 같은 값, 거짓 같은 값

// 🌼 falsy 한 값 
// 빈 문자열, undefined, null, NaN

// 🌼 truthy 한 값 
// 값 있는 문자열, 빈배열 또는 배열, {}, Infinity, 숫자 

const a = [];
if(a) {
	console.log("true");
} else {
	console.log("false");
}

// person 에 name 속성이 없는 경우 에러발생
// 🌼 truthy, falsy 한 값을 이용해서 예외처리하기

let person; // 초기화x // undefined
const getName = (person) => {
	// 🌱 1. 값이 없음에 대한 예외처리
	// if(person === undefined || person === null) {
	// 	return "객체가 아닙니다."
	// }

	// 🌱 2. falsy 한 예외처리
	// false == undefined == null
	// !false => true
	if(!person) { // undefined || null 에 해당됨
		return "객체가 아닙니다."
	}

	return person.name;
}

const name = getName(person);
console.log(name); 