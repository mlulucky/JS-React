// 자바스크립트 Promise 객체
// 비동기처리 함수에 콜백함수를 전달하지 않아도 된다.

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


// Promise - 비동기처리
function isPositiveP(number) {
	const executor = (resolve, reject) => { // 비동기 함수 실행자
		setTimeout(()=>{
			if(typeof number === 'number'){
				// 성공 resolve
				console.log(number);
				resolve(number>=0 ? "양수" : "음수"); // 성공 결과 : res
			} else {
				// 실패 reject
				reject("주어진 값이 숫자형 값이 아닙니다."); // 실패 결과 : err
			}
		},1000); // 1초후 실행
	}; // executor()

	// Promise 객체 생성자로, 비동기 함수 실행자 executor 를 담는다.
	const asyncTask = new Promise(executor); // Promise 객체 생성 + executor() 함수실행
	return asyncTask; // Promise 반환 == Promise 객체 반환
}

// Promise 객체 반환으로 비동기 함수 실행 결과값을 then, catch 로 받는 것.
const res = isPositiveP(101); // Promise 객체 반환
res.then((res)=>{ // then : 비동기 함수 resolve 실행 결과값 res 을 콜백함수로 받을 수 있다.
	console.log("작업 성공 : ", res); 
}).catch((err)=>{ // catch : 비동기 함수 reject 실행 결과값 err 을 콜백함수로 받을 수 있다.
	console.log("작업 실패 : ", err);
})



// Promise 객체의 
// 비동기 처리의 결과값을 쉽게 사용할 수 있다
// Promise 객체의 메서드 .then((res)=>{}) 과 .catch((err)=>{}) 를 이용해서
// 비동기 처리의 결과값을 받아올 수 있다.

// 비동기 작업 상태
// pending(대기상태)
// resolve -> fulfilled(성공)
// reject -> Rejected(실패)