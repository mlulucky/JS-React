// 동기 비동기
console.log(1); // 동기
setTimeout(()=>{ // 비동기 실행 
	console.log(2);
}, 3000);   // 3000ms 지난 후 콜백함수 실행

console.log(3); // 동기


// 자바스크립트 엔진
// console.log(1); 실행
// setTimeout -> 비동기실행이네! 하고 Web APIs 에 처리를 부탁 (비동기함수와 콜백함수를 전달)

// Web APIs 에서는 setTimeout 의 3000ms 타이머를 실행

// 자바스크립트 엔진은 비동기작업을 기다리지 않고 이후 작업을 실행
// console.log(3); 실행

// Web APIs 는 자바스크립트 엔진에게 타이머가 종료되었음을 알리고, 콜백함수를 전달

// 자바스크립트 엔진은 전달받은 콜백함수를 실행
// console.log(2); 