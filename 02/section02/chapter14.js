// async
// 함수가 프로미스를 반환하도록 변환해주는 키워드
// 동기작업 함수(promise 반환하지 않는 함수) -> 비동기작업 함수(promise 반환하는 함수)
// 함수의 반환 값을 promise결과값으로 갖는 promise 를 반환

function 동기함수() {
	return { // 객체 반환
		name: "dmswjd",
		id: "mlucky"
	}
}
console.log(동기함수()); // {name: 'dmswjd', id: 'mlucky'}


async function 동기함수2() {
	return {
		name: "dmswjd",
		id: "mlucky"
	}
}
console.log(동기함수2());
// Promise {<fulfilled>}
// PromiseResult : {name: 'dmswjd', id: 'mlucky'}



// 함수의 반환값이 new Promise 인 경우에는
// async 키워드가 별다른 기능을 하진 않고, promise 객체가 반환되게 내버려둔다.
async function 프로미스반환함수() {
	return new Promise((resolve, reject) => {
		setTimeout(() => { // 비동기작업
			resolve({ // 성공결과값
				name: "dmswjd",
				id: "mlucky"
			})
		}, 1500); // 1.5초 후 실행
	})
}

console.log(프로미스반환함수());
// Promise {<fulfilled>}
// PromiseResult : {name: 'dmswjd', id: 'mlucky'}


// await
// async 함수(* async 키워드가 붙은 함수) 내부에서만 사용가능
// 비동기 함수가 종료되길 기다린다.
// -> 비동기작업의 결과값을 반환한다.
// -> .then 메서드를 사용하지 않아도 된다.
// 동기적 코드 작성처럼 비동기작업 코드를 아주 간결하게 작성할 수 있다.

async function printData() {
	const data = await 프로미스반환함수();
	console.log("await 결과", data);
}

printData();


// * 여기서 짤막한 지식
// fetch 와 promise 는 다르다.
// fetch 는 네트워크로 요청을 수행하는 함수
// promise 는 비동기작업을 처리하기 위한 객체

// fetch 는 네트워크 요청을 보내고, 요청의 응답을 처리하기 위해
// Promise 객체를 반환한다. (비동기 처리를 위해)
// fetch 가 반환한 promise 는 네트워크요청 성공, 실패에 따라 
// then, catch 메서드를 사용하여 이후 작업을 처리한다.

