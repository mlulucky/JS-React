// 복잡한 접근법
// 간략하게 하는 법 // 더 다양한 방법들이 많다.. 공부하기!

// 1. 🌼 배열.includes()
// 배열의 여러 요소들 중 값을 포함하는가를 확인할 때
// 복잡한 if 조건문을 간략하게 할 수 있다.  
function isKoreanFood(food) {
	// if(food === "불고기" || food === "비빔밥" || food === "잡채") {
	if(["불고기", "비빔밥", "잡채"].includes(food)) {
	return true;
	}
	return false;
}

let food1 = isKoreanFood("불고기");
let food2 = isKoreanFood("파스타");
console.log(food1);
console.log(food2);


// 2. 🌼 객체의 접근법 괄호표기법을 이용하여 간략하게 할 수 있다.
// const getMeal = (mealType) => {
// 	if(mealType === "한식") return "불고기";
// 	if(mealType === "중식") return "자장면";
// 	if(mealType === "양식") return "파스타";
// 	if(mealType === "일식") return "초밥";
// 	return "굶기";
// }

let meal = {
	한식 : "불고기",
	중식 : "자장면",
	양식 : "파스타",
	일식 : "초밥",
	인도식 : "카레" 
}

const getMeal = (mealType) => {
	return meal[mealType] || "굶기";
}

console.log(getMeal("한식"));
console.log(getMeal("중식"));
console.log(getMeal("인도식"));
console.log(getMeal());
