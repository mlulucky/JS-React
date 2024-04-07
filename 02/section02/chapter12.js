// 비동기 작업 처리 - 🐥 콜백함수

// 음식주문
function orderFood(callback) {
	setTimeout(() => { // 비동기함수
		callback("떡볶이");
	}, 3000);
}

// 음식 식히기
function coolDownFood(food, callback) {
	setTimeout(() => {
		callback(food);
	}, 2000);
}

// 음식 얼리기
function freezeFood(food, callback) {
	setTimeout(() => {
		callback(food);
	}, 1500);
}

// 음식 먹기
function eatFood(food, callback) {
	setTimeout(()=>{
		callback(food);
	},3000);
}

const asyncLogic = () => {
	// 함수실행 // orderFood(콜백함수)
	orderFood((food) => {
		console.log(food);

		coolDownFood(food, (food) => {
			const coolDownFood = `식힌 ${food}`;
			console.log(coolDownFood);

			freezeFood(coolDownFood, (coolDownFood) => {
				const freezeFood = `얼린 ${coolDownFood}`;
				console.log(freezeFood);

				eatFood(freezeFood, (freezeFood) => {
					const eatFood = `${freezeFood} 3초 후 먹기`;
					console.log(eatFood);
				}); // 3초 뒤 실행
			}); // 1.5초 뒤 실행
		}); // 2초 뒤 실행 
	}); // 3초 뒤 실행
}

asyncLogic();







// 비동기 작업의 결과를 또다른 비동기 작업의 인수로 전달 할 수 있다.
// 하지만
// 비동기작업의 결과 -> 또다른 비동기 작업의 인수로 전달 ... 반복
// 코드의 인덴트가 들어간다. - 콜백지옥

// 콜백지옥 해결책 -> Promise
