// API 호출 == 누구에게 말을 거는 것(데이터 요청/응답)

// https://jsonplaceholder.typicode.com/posts

// fetch("URL")
// API 호출을 도와주는 자바스크립트 내장함수 
// Promise 를 반환하는 함수 
// 비동기 처리하는 함수
// 처리 결과는 then 을 통해서 사용가능 // then((API 호출 응답결과) => {}) 

// fetch() => API 성공 객체(결과값의 포장지)를 반환
// let result = fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=> console.log(res)); 

// JSON 반환
async function getData(){
	let promiseResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
	let jsonResponse = await promiseResponse.json(); // fetch 함수가 완료되면 반환되는 promiseResponse 객체에서 JSON 데이터를 추출
	console.log(jsonResponse);
}

getData(); // 함수실행