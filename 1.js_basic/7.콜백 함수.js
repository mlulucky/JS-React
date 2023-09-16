// 🌱 콜백함수
// 함수의 파라미터(매개변수)로 함수를 넘겨주는 것
// 함수를 호출 했을때 실행되는 함수

function checkMood (mood, goodCallback, badCallback) {
	if(mood === "good") {
		// 기분이 좋을때 하는 동작
		// sing();
		goodCallback(); // 함수실행 // 매개변수로 전달받은 함수를 실행(함수의 결과값을 반환)
	} else {
		// 기분이 안 좋을 때 하는 동작
		// cry();
		badCallback(); // 함수실행
	}
 }

 function cry(){
	console.log("ACTION::CRY");
 }

 function sing(){
	console.log("ACTION::SING");
 }

 function dance(){
	console.log("ACTION::DANCE");
 }

 checkMood("good", dance, cry); // 함수전달 dance, cry
// goodCallback == dance 함수
// goodCallback() == dance(); 함수실행 == "ACTION::DANCE"
