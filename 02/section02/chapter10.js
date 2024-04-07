// 1. Date 객체 생성
let date = new Date(); // date 생성자 - 인수없이 호출시 현재날짜, 시간이 저장된 객체생성
console.log(date);

// 특정날짜 객체 생성
let date2 = new Date("1993-03-12"); // 이외에 다양한 표기법이 있음
console.log(date2);

// 2. 타임 스탬프
// UTC 로부터 경과한 시간을 표현한 정수값 (시간을 수치로 표현)
// 타임스탬프 기준 시간 : UTC(세계 시간시작 되는 표준시각) "1970.01.01 00시 00분 00초" 
// date.getTime() : Date 객체의 타임스탬프 추출
let 타임스탬프 = date.getTime();
let date3 = new Date(타임스탬프); // 🍒 타임스탬프를 저장한 날짜객체를 생성 -> date 날짜와 동일
console.log("date3", date3);

// 그렇다면 그냥 date 날짜를 안쓰고, 타임스탬프를 쓰는 이유 ?
// 복잡한 날짜데이터를 간단한 숫자값으로 사용할 수 있어 유용하게 쓰인다.
// 예) 타임스탬프를 이용하면 두 날짜간의 비교를 할 수 있다.


// 3. 시간 요소들을 추출하는 방법
let year = date.getFullYear();
let month = date.getMonth() + 1; // 자바스크립트의 월은 0 부터 시작
let getDate = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
let seconds = date.getSeconds();
console.log(year, month, getDate, hour, minute, seconds);


// 4. 시간 수정하기
date.setFullYear(2023);
date.setMonth(11); // 실제는 12월
date.setDate(25);
date.setHours(8);
date.setMinutes(59);
date.setSeconds(59);
console.log("시간 수정", date); // 2023-12-24T23:59:59.916Z

// 브라우저 콘솔에서는 수정한 시간대로 출력되지만 vscode 콘솔에서는 날짜가 다르게 출력되는 이유
// vscode 는 노드js 동작 (노드js 는 UTC 사용) -> 날짜,시간 표기 UTC 기준
// 브라우저는 로컬 시스템 시간을 기반으로 날짜,시간 표기


// 5. 시간을 여러 포맷으로 출력하기
// 날짜 출력 (년 월 일 요일)
console.log(date.toDateString()); // Mon Dec 25 2023
// 현지화 포맷 출력 (년 월 일 시간)
console.log(date.toLocaleString()); // 12/25/2023, 8:59:59 AM

// 일반 날짜객체 출력과 메서드 날짜객체 출력의 시간이 다른 이유
// 일반 날짜객체 출력 -> UTC 시간 출력 (현지 시간대와 무관하게 동작)
// toDateString, toLocaleString 출력 -> 현지 시간대에 맞춰 출력