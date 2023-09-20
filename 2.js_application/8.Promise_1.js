function isPositive(number, resolve, reject) {
	setTimeout(()=>{
		if(typeof number === 'number'){
			// 성공 resolve
			resolve(number>=0 ? "양수" : "음수"); // 성공 결과 : res
		} else {
			// 실패 reject
			reject("주어진 값이 숫자형 값이 아닙니다."); // 실패 결과 : err
		}
	},2000); // 2초 뒤에 실행
}

// 함수 실행 
isPositive([], resolveFunc, rejectFunc); // 인자로 함수 전달

function resolveFunc(res) { // 👀 콜백함수(함수(isPositive)의 인자로 함수를 전달)를 사용하면, 비동기 함수(setTimeout())의 결과를 비동기 함수의 바깥의 함수(isPositive)에서도 사용할 수 있다.(전달할 수 있다.)
	console.log("성공적으로 수행됨 : ", res);
} 

function rejectFunc(err) {
	console.log("실패 하였음 : ", err);
}

// 비동기 작업 상태
// pending(대기상태)
// resolve -> fulfilled(성공)
// reject -> Rejected(실패)