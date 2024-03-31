// 🌱 if 문
let a = 5;
if(a>=7) {
	console.log("7 이상입니다.");
}	
else if (a>=5) { // 위에 조건이 안맞고, a 가 5이상인 조건이 맞는 경우 실행, 종료
	console.log("5 이상입니다.");
} 
else { // 위 조건이 다 안맞을때 실행, 종료
	console.log("5 미만입니다.");
}

// 🌱 switch 문
let country = 'ko';
switch(country) { // country 를 case 별로 비교후 해당되는 case 문 실행 후 종료(break)
	case 'ko':
		console.log('한국');
		break;
	case 'cn':
		console.log('중국');
		break;
	case 'jp':
		console.log('일본');
		break;
	case 'uk':
		console.log('영국');
		break; 
	default: // 위 case 조건에 모두 안맞을때 실행, 종료 (else 와 동일)
		console.log('미 분류');
		break;
}