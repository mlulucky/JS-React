// 자바스크립트 Promise 객체
// 콜백지옥에서 구원하다.

function taskA(a, b, cb) {
	setTimeout(()=>{
		const res = a+b;
		cb(res);
	},3000); // 3초 뒤 실행
}
function taskB(a,cb) {
	setTimeout(()=>{
		const res = a * 2;
		cb(res);
	},1000); // 1초 뒤 실행
}
function taskC(a,cb) {
	setTimeout(()=>{
		const res = a * -1;
		cb(res);
	},2000); // 2초 뒤 실행
}

// 콜백지옥
// 비동기 함수 처리 결과를 콜백함수로 전달하면서 인덴트가 안으로 들어가지는 것
taskA(3,4, (a_res)=>{ // a_res == taskA 함수의 res
	console.log("taskA : ", a_res);
	taskB(a_res, (b_res)=>{
		console.log("taskB : ", b_res);
		taskC(b_res, (c_res)=>{
			console.log("taskC : ", c_res);
		})
	})
})




