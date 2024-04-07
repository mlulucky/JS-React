// math 모듈

// ES Js 모듈 시스템 - export
export function add(a,b) {
    return a+b;
}

export function sub(a,b) {
    return a-b;
}

// ES Js 모듈 시스템 - export default
// 기본값 내보내기
// 하나의 모듈을 대표하는 기본값 // import 할때 중괄호 없이 불러올 수 있다.
export default function multiply(a,b) {
    return a*b;
}


// CommonJs 모듈 시스템
// 모듈.exports = { 모듈에서 내보낼 객체설정 }
// module.exports = {
//     add, // add : add  // key 와 value 가 같으면 하나로 적어도, 자동으로 매칭해서 값을 넣어준다.
//     sub
// }


// ES Js 모듈 시스템
// export { 내보낼 객체 리터럴 }
// export {add, sub};