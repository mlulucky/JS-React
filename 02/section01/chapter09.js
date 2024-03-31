// 1. if 조건문(if 문)
// if(조건식) {
// 	조건식이 참인 경우 실행되는 코드
// }
// else {
// 	조건식이 참이 아닌 경우 실행되는 코드
// }
let num = 10;

if (num >= 10) { // 조건이 참이면 실행하고, 전체종료(이후 코드 실행x)
	console.log("num은 10 이상입니다.");
}
else if (num >= 5) { // else if : 추가적인 if 문
	console.log("num은 5 이상입니다.")
}
else {
	console.log("조건이 거짓입니다.");
}


// 2. switch 문
// if 문과 기능 자체는 동일
// 변수의 값을 기준으로 다수의 조건을 처리할때 if 문 보다 직관적이다.

let animal = 'cat';
switch (animal) { // switch(변수명) {}
	case 'cat': {
		console.log("고양이");
		break; // 이후 코드 실행x
	}
	case "dog": {
		console.log("강아지");
		break;
	}
	case "bear": {
		console.log("곰");
		break;
	}
	case "snake": {
		console.log("뱀");
		break;
	}
	default: { // 해당되는 case 가 없는 경우 실행
		console.log("해당되는 동물이 없습니다.");
	}
}