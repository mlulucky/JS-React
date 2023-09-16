// 중복 코드 ... => 함수화 하기!
let width1 = 10;
let heigth1= 20;
let area1 = width1 * heigth1;
console.log(area1);

let width2 = 25;
let heigth2= 14;
let area2 = width2 * heigth2;
console.log(area2);


// 🌱 함수 선언(함수 생성) : function 함수이름(매개변수){  }
// => 선언만 된거지, 누군가 함수를 사용해줘야 함수가 실행된다.
function getArea(width, height) {
	let area = width * height; // 지역변수 
	console.log("getArea",area);
}
// 지역변수 : 함수 내부에서 선언한 변수 // 함수 내부에서만 접근 가능하다!


// 🌱 함수호출 : 함수명(); 
// => 함수 안을 실행을 모두 시킨 뒤 종료 => 함수 호출 이후의 코드 실행
getArea(20,10); // 함수명(매개변수);
getArea(25,14); 
console.log("함수 실행 완료");

// 전역변수(글로벌 변수) : 함수 외부에 있는 변수 => 함수 내부에서 접근 가능
let count = 3;

// 🌱 반환 함수 : return 값이 있는 함수
function returnArea(width, height) {
	let area = width * height; 
	console.log("전역변수 count", count); // 전역변수
	return area;
}

let returnArea = returnArea(200,100); // return 한 결과값을 변수 area 에 대입(할당)
console.log("returnArea", returnArea);
