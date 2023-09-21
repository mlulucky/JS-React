// 직관적 비동기 처리 코드 작성 
// 비동기 함수는 Promise 를 반환한다.

function hello() {
	return 'hello';
}

// 🌼 async : 함수 앞에 async 를 붙이면 Promise 를 반환한다.
// async 함수 : 함수를 비동기함수 Promise 를 반환하는 함수를 만든다.

async function helloAsync() { // Promise 객체를 반환 (== 비동기처리 함수)
	return 'hello, async'; // return 값은 Promsie 객체의 resolve 의 결과값이 된다.
}

console.log(hello());
console.log(helloAsync()); // Promise 객체 {'hello, async'}

helloAsync().then((res)=>{ // 프로미스객체.then : 프로미스객체의 resolve 결과값을 받는다. 
	console.log(res); // 'hello, async';
})

// 비동기 함수(Promise 를 반환)
function delay(ms) { // ms: 밀리세컨 초
	return new Promise((resolve)=> {
		/**
		 * setTimeout(()=> { // 콜백함수로 resolve() 함수 밖에 없다.
			resolve();
			},ms); 
		 * setTimeout 안에 콜백함수로 resolve() 함수 밖에 없으면, 콜백함수로 resolve 만을 호출하는 것과 동일하다.
		*/
		setTimeout(resolve, ms);
	});
}

// 🌼 await 비동기함수 : 비동기 함수 실행을 기다린 후, 다음 코드를 실행한다. (비동기 함수 -> 동기적 실행 변경)
async function goodByeAsync(){
	// 🌱 await 사용 시 (async 함수 내부에서 사용가능)
	/**
	 * delay 함수 3초를 기다린 결과로 'goodBye, async' 를 반환
		return delay(3000).then(()=>{ // then 메서드에 'goodBye, async' 가 resolve 로 반환된다. // 즉 delay().then() === 'goodBye, async'
			return 'goodBye, async';
		})
	 *
	*/
	await delay(3000); // delay 함수 3초 실행을 기다린 후 다음 코드 실행
	return 'goodBye, async';
	
} // 결과적으로 'goodBye, async' 를 결과값 resolve 로 반환한다. // return delay().then() === 'goodBye, async'

goodByeAsync().then((res)=>{ // res === 'goodBye, async' 
	console.log(res);
})

// async - await 를 이용한 직관적인 비동기 함수 처리
async function main(){
	const res = await goodByeAsync(); // 비동기 함수 실행을 기다린 후 결과값을 res 변수에 할당
	console.log(res);
}

main();

