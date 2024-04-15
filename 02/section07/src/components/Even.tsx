import { useEffect, useRef, useState } from "react";

const Even = () => {
	const [state, setState] = useState(0);
  const count = useRef(0); // useRef 는 컴포넌트가 리렌더링되도, 초기화 되지 않는다. (언마운트시에는 초기화됨)
  let cnt = 0;
	useEffect(() => {
    // 클린업 함수(언마운트 시 실행)
    return () => { // 언마운트 -> 마운트 모든값들이 초기화 된다.
      count.current++; // 최초 실행시 1 증가. 이후 실행시, ref 는 값이 바뀌어도 리렌더링 되지 않는다 (화면 반영x)	
      console.log("unmount");
    };
  }); 
	const updateRef = () => {
		setState((state)=> state + 1);
		// console.log("state", state); // 함수 실행후, 렌더링 후에 반영된다.
		count.current++;
		cnt++; 
	}
  return (
    <div>
      <input type="text" />
      <div>짝수{count.current}</div>
			<button onClick={updateRef}>ref +1</button>
    </div>
  );
};
export default Even;
