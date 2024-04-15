import { ChangeEvent, useState } from "react";
import useInput from "../hooks/useInput";
// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트 또는 커스텀 훅 내부에서만 호출 가능
// 2. 조건부(조건문, 반복문)로 호출될 수 없다.
// (리액트 훅은 컴포넌트의 상태를 관리하고, 상태 변화에 따라 렌더링하는데 사용됨
// -> 호출 순서를 예측할 수 없음. 렌더링 사이클 내에서 서로 다른 훅들의 호출순서가 엉망이 될 수있음)
// 3. 나만의 훅(Custom Hook) 을 직접 만들 수 있다.

// 커스텀 훅
// 함수이름앞에 use 접두사 사용
// 리액트는 use 로 시작하는 함수를 커스텀훅으로 인식 -> 리액트 훅을 내부적으로 호출해도 오류 발생X

// 만드는 경우
// 컴포넌트마다 반복적인 useState 관리 로직이 있는 경우 -> 커스텀훅으로 분리해서 만들수 있고, 불러와서 사용하기


const HookExam = () => {
  // 커스텀 훅 여러번 불러와서도 사용가능
	const [state, onChangeInput] = useInput();
	const [state2, onChangeInput2] = useInput();

  return (
    <div>
      <input name="first" value={state} onChange={onChangeInput} />
      <input name="second" value={state2} onChange={onChangeInput2} />
      HookExam
    </div>
  );
};

export default HookExam;
