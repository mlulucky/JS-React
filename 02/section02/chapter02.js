// 단락 평가
// &&(AND), ||(OR) 논리 연산자로 첫번째 피연산자의 참거짓을 보고 연산의 결과를 확정
// 두번째 피연산자의 연산은 확인하지 않는다.

function returnFalse() {
	return undefined; // falsy
}

function returnTrue() {
	return 10; // truthy
}

console.log(returnFalse() && returnTrue()); // undefined // false &&  => false
console.log(returnTrue() && returnFalse()); // undefined // true && false => false
console.log(returnTrue() || returnFalse()); // 10 // true || => true

// T1 || T2 => T1 반환
// T1 && T2 => T2 반환

// 단락 평가 활용 사례
function printName(person){
	console.log(person || "person 없음");
}

printName(); // person undefined => "person 없음"
printName({name: "문은정"}) 

