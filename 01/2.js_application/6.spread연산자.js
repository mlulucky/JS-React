// 배열과 객체를 한줄로 다루는 방법
/// ... : 펼치는 연산자 || spread 연산자 _ EM6 문법
// 객체의 값을 새로운 객체에 펼쳐주는 역할
// 객체의 중복되는 요소를 간략하게 할 수 있다.

// 객체
const pasta = {
	base: "pasta",
	madeIn: "korea"
}

const oilPasta = {
	...pasta, // spread 연산자
	sauce: "oil"
}

const tomatoPasta = {
	...pasta,
	sauce: "tomato"
}

const creamPasta = {
	...pasta,
	sauce: "cream"
}

console.log(oilPasta);
console.log(tomatoPasta);
console.log(creamPasta);


// 배열
const basicPasta = ["오일파스타", "알리오올리오파스타"];
const specialPasta = ["명란파스타", "시금치파스타", "크림파스타", "토마토파스타"];

// ...배열 을 이용해서, 배열 깊은 복사가능 
// 중간에 요소 직접 입력으로 요소추가 가능
const allPasta = [...basicPasta, "냉파스타" , ...specialPasta];
console.log(allPasta);


