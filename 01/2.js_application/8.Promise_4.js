// 자바스크립트 Promise 객체
// 콜백지옥에서 구원하다.

function taskA(a, b) {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{ // 비동기 함수
			const res = a+b;
			resolve(res);
		},3000); // 3초 뒤 실행
	})
	// const executorA = (resolve, reject) => {
	// 	setTimeout(()=>{
	// 		const res = a+b;
	// 		cb(res);
	// 	},3000);
	// };
	// return new Promise(executorA);
}

function taskB(a) {
	return new Promise((resolve, reject) => {
		setTimeout(()=>{ // 비동기 함수
			const res = a * 2;
			resolve(res);
		},1000); // 1초 뒤 실행
	})
}

function taskC(a) {
	return new Promise((resolve, reject)=>{ // Promise 객체반환 == 비동기 처리 결과를 반환 => 비동기 처리 결과 resolve, reject 를 인자로 갖는다.
		setTimeout(()=>{ // 비동기 함수
			const res = a * -1;
			resolve(res);
		},2000); // 2초 뒤 실행
	})
}


// Promise 객체 then 사용법 1. then 체이닝
// taskA(5,1) == Promise 객체 
// then 으로 결과값을 인자로 받는다.
let bPromise = taskA(5,1).then((a_res)=>{ 
	console.log("taskA : ", a_res);
	return taskB(a_res); // 반환값 == taskB() == Promise 객체
});

console.log("Promise 객체를 이용해서, 연산 중간에 다른 작업을 넣을 수도 있다.");

bPromise.then((b_res)=>{
	console.log("taskB : ", b_res);
	return taskC(b_res);
}).then((c_res)=>{
	console.log("task C : ", c_res);
})

// Promise 객체 then 사용법 2. 콜백사용 - 올바르지 못한 사용법으로 또 다시 콜백지옥의 형태를 띄운다.
// taskA(5,1).then((a_res)=>{
// 	console.log("taskA : ",a_res);
// 	taskB(a_res).then((b_res)=>{
// 		console.log("taskB : ", b_res);
// 		taskC(b_res).then((c_res)=>{
// 			console.log("taskC : ", c_res);
// 		})
// 	})
// })





