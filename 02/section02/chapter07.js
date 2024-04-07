// 6 가지의 요소 조작 메서드

// 1.push
// 배열 맨뒤에 새로운 요소를 추가
// 변경된 배열의 길이를 반환한다.
let arr1 = [1, 2, 3];
let newLength = arr1.push(4, 5, 6);
console.log(newLength); // 6
console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고 해당 요소를 반환
let arr2 = [1, 2, 3];
let popedItem = arr2.pop();
console.log(popedItem); // 3
console.log(arr2); // [1,2]

// 3. shift
// 배열의 맨 앞의 요소를 제거하고 해당 요소를 반환
let arr3 = [1, 2, 3];
let shiftedItem = arr3.shift();
console.log(shiftedItem); // 1
console.log(arr3); // [2,3]

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가
// 요소를 추가한 후 변경된 배열 길이를 반환
let arr4 = [1, 2, 3];
let newLength2 = arr4.unshift(0);
console.log(newLength2); // 4
console.log(arr4); // [0,1,2,3]

//* 여기서 참고
// shift, unshift 는 push, pop 보다 성능이 느리다.
// 이유는 배열의 순서대로 추가, 제거하는 것보다 배열의 역순에서 요소를 추가, 제거하게되면
// 인덱스 변경 등 작업이 추가적으로 필요하기 때문에.
// 따라서 push, pop 을 더 권장한다.

// 5. slice
// 마치 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열을 반환
// 원본 배열은 수정되지 않는다.
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // (시작인덱스, 범위마지막인덱스+1) // 시작인덱스 ~ 범위마지막인덱스 선택됨 
sliced = arr5.slice(2); // 인덱스2 부터 마지막인덱스까지
console.log(sliced); // [3,4,5]

// 마이너스(-)값 : 뒤에서부터 자르기 
let slicedBack = arr5.slice(-2); // 뒤에서부터 2개 자르기
console.log(slicedBack);


// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatArr = arr6.concat(arr7); // [1,2,3,4]
console.log(concatArr);