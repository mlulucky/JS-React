// 1. 콜백함수
function main(value) {
	value(); // 함수 호출
}

function sub() {
	console.log("i am sub");
}

main(sub); // sub : 콜백함수

main(function () {
	console.log("함수표현식_익명함수");
})

main(() => {
	console.log("화살표 함수");
})

// 2. 콜백함수 활용
// 구조가 비슷한 함수 - 중복코드
function repeat(count) {
	for (let idx = 1; idx <= count; idx++) {
		console.log(idx);
	}
}

function repeatDouble(count) {
	for(let idx =1; idx<=count; idx++) {
		console.log(idx*2);
	}
}

repeat(5);
repeatDouble(5);


function repeatRefactor(count, callback) {
	for(let idx=1; idx<=count; idx++) {
		callback(idx);
	}
}

// 콜백함수 - 익명함수
repeatRefactor(5, function (idx){
	console.log("콜백함수 활용", idx);
});

// 콜백함수 - 화살표함수
repeatRefactor(5, (idx) => console.log("콜백함수 활용", idx*2));

