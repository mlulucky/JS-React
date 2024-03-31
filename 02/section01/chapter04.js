// 변수는 값을 저장하는 박스, 저장소
// let 변수명 = 변수값

// const 상수 - 값을 저장하는 저장소
// 값을 바꿀 수 없다.
// 선언과 동시에 값을 초기화 해줘야함

// 1. 변수
let age; // 선언
age = 30;

// 2. 상수
const birth = "2020.03.12"; // 초기화
birth = "123";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $,_ 제외한 기호는 사용할 수 없다.
// let #name;
let $_name;

// 3-2. 숫자로 시작할 수 없다.
// let 1name;
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다.
// let let // 예약어 let
// let if // 예약어 if 

// 4. 변수 명명 가이드
// 변수명은 의미를 알 수 있게 명명하기
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;