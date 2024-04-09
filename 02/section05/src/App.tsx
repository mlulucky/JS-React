import "./App.css";
import { useState } from "react";

// 리액트 컴포넌트 리렌더링 상황
// 1. 자신이 관리하는 state 가 변경될때
// 2. 전달받은 props 가 변경될때
// 3. 부모컴포넌트가 리렌더링 -> 자식컴포넌트도 리렌더링

// 자신의 props 또는 state 가 아닌 단순히 부모컴포넌트의 리렌더링으로 자신의 컴포넌트가 리렌더링 되는 불필요한 리렌더링경우 (성능영향)
// 가능하다면, 부모컴포넌트의 state를 연관 컴포넌트로 분리하여서, 부모 - 자식 이 아닌, 컴포넌트-컴포넌트 관계로 구성하면 불필요한 리렌더링을 방지할 수 있다. 

// 컴포넌트
const Bulb = ({props변수} : {props변수: string}) => { // 부모컴포넌트로 props 로, 부모컴포넌트의 상태를 받아옴
	// 부모로부터 받은 props 가 변경될때마다 자식컴포넌트(Bulb)는 리렌더링된다. - 자신의 컴포넌트 state 가 변경안되도.
	const style = {backgroundColor: props변수 === "ON" ? "orange" : "gray"}
	console.log(props변수);
	return (
		<h1 style={style}>{props변수}</h1>
	)
}

function App() {
  // [변수1, 변수2] = [state, state 값 변경함수]
  const [count, setCount] = useState(0); // useState(state 초기값)
  const [light, setLight] = useState("OFF");

  return (
    <>
      <div>
        <Bulb props변수={light}/>
        <button
          onClick={() => {
            setLight(light === "OFF" ? "ON" : "OFF");
          }}
        >
					{light === "OFF" ? "전구 켜기" : "전구 끄기"}
				</button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

// 버튼클릭시 -> state 증가
// state 를 1 증가 -> setState(state + 1)
// state 변경 -> 함수컴포넌트 리렌더링(함수컴포넌트 함수호출 -> 화면에 ui 재렌더링)


export default App;
