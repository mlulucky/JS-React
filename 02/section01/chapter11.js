// 함수선언 : 함수를 생성
function greeting( ) {
	console.log("안녕하세요");
}

// 함수호출(==함수실행) : 함수명()
greeting();


// 함수 매개변수 , 반환값
function getArea(width, height) { // 매개변수 : 함수 내부에서 사용
	let area = width * height;
	return area; // 반환 값 (함수 호출 결과값) -> 함수는 값을 반환하고 종료된다.(return)
}

let area1 = getArea(10, 20); // 호출시 전달 : 인수 
console.log(area1);
let area2 = getArea(30, 20);
console.log(area2);

// 중첩 함수
function person(년차, 급여) { 
	function eat() { // 중첩함수
		console.log("밥을 먹는다.");
	}

	eat(); // 함수 호출
	
	let 연봉 = 년차 * 급여;
	return 연봉; 
}

let salary = person(2, 1000);
console.log("salary " + salary);


// 자바스크립트 _ 호이스팅(끌어올리다)
// 선언식을 호출문보다 아래에 위치해도, 함수를 호출할 수 있다.