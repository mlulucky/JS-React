// 프로미스 객체생성
// new Promise(비동기작업 실행 콜백함수)
// 🐥 자동으로 콜백함수가 실행

// 비동기 작업을 실행하는 콜백함수 // executor

// 프로미스 객체의 비동기작업 실행 콜백함수의 인자로 resolve, reject 를 전달할 수 있다.

function addNum(num) {
	const 프로미스결과 = new Promise((resolve, reject) => {
		// 비동기 작업
		setTimeout(() => {
			if (typeof num === 'number') {
				resolve(num + 10);
				// resolve("promise 성공 결과값")
			}
			reject("promise 실패 결과값")
		}, 3000); // 3초 후 실행
	});
	console.log(프로미스결과);

	return 프로미스결과;
}

const promise = addNum(12)
	.then((result) => { // result == PromiseResult
		console.log(result); // 22
		return addNum(result);
	}).then((result) => { // result == newPromise 의 성공 결과값(PromiseResult)
		console.log(result);
		return addNum(result);
	}).then((result)=>{
		console.log(result);
	}).catch((error) => {
		console.log(error);
	})

// 프로미스 결과
// Promise { <pending> }
// PromiseState : 
// PromiseResult : // 이 결과값을 성공시에는 then 으로, 실패시에는 catch 로 가져올 수 있다. 



// 프로미스 체이닝
// .then 메서드
// 프로미스가 성공(resolve)하게 되면 실행 // 실패일땐 실행x

// .catch 메서드
// 프로미스가 실패일때 실행
// 프로미스결과.then((resolve결과값) => {
// 	console.log(resolve결과값); // "promise 성공 결과값"
// })
// 	.catch((reject결과값) => {
// 		console.log(reject결과값); // "promise 실패 결과값"
// 	});



// 실행 순서
// 1. new Promise 의 콜백함수가 자동으로 실행
// 2. 콜백함수 내에 setTimeout 비동기작업을 실행만 시킴
// 3. console.log(프로미스결과); 실행
// -> Promise 객체 출력됨 (상태는 대기(pending), Promise 결과값: undefined)
// 4. 3초 후 setTimeout 작업완료 
// - console.log("비동기 작업"); 실행
// - resolve("promise 성공 결과값") 실행
// 5. 3번에서 출력된 Promise 객체를 다시 확인해보면 상태 fulFilled, Promise 결과값: "promise 성공 결과값" 으로 상태가 변경되어있음

// 🍒 resolve (Promise 결과값)
// Promise 객체 상태를 성공으로 바꿔준다.

// 🍒 resject (Promise 결과값)
// Promise 객체 상태를 실패으로 바꿔준다.





