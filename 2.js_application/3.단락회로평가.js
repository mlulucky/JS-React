// 논리연산자
// &&, ||, !
// 연산의 절반만을 보고, 그다음 연산의 결과는 확인하지 않는다. 
// 참 && 참 => 참
// 거짓 && 참 => 거짓
// 거짓 || 거짓 => 거짓
// 참 || 거짓 => 참 

console.log(false && true); // false // 처음 연산이 false 이면 뒤의 연산 true 보지않고, false 만 보고 결과를 판단.
console.log(true || false); // true // 처음 연산이 true 이면 뒤의 연산 false 보지않고, true 만 보고 판단.

let person;
const getName = (person) => {
// if(!person) {
// 	return "객체가 아닙니다.";
// }
// return person.name;

// 단락회로평가 
// 현재 person 은 undefined 로, falsy 한 값이기 때문에
// && 연산자 뒤는 보지않고, 앞에 person (undefined)만을 return 반환한다.
	return person && person.name;
}
let name = getName(person);
console.log("name", name);

// 단락회로 평가
const getJob = (person) => {
	// return person && person.job; // person 이 true 면 person.job 을 반환 // person 이 false 면 false 을 반환
	const job = person && person.job; // person 이 true 면 person.job 을 반환 // person 이 false 면 false 을 반환
	return job || "객체가 아닙니다."; 
	// false || "값"(true) // 앞이 false 일때 뒤 값이 true 이면 true 를 반환
	// true || "값"(true) // 앞이 true 일때 뒤 값을 안 보고도 앞의 true 를 반환
}

// 이름이 있을때 true 
// 이름이 없을때 false || 값  false 일때, 뒤 값 확인 
let person1 = { job: "programmer" } // programmer 반환
let person2 = null; // 객체가 아닙니다. 반환
let job = getJob(person2);
console.log("job", job);