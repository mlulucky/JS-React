import { useEffect, useRef, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const onClickButton = (value: number) => {
    setCount(count + value);
  };

  // 1. 마운트(탄생) 시 실행
  useEffect(() => {
    console.log("mount");
  }, []); // 의존성 배열이 빈경우

  // 2. 업데이트(변화, 리렌더링)시 실행
  // 의존성 배열 생략
  // 업데이트 시에만 실행 -> 참조객체 생성해 flag
  const isMount = useRef(false);
  useEffect(() => {
    if (!isMount.current) {
      // 컴포넌트 렌더링시 최초 1회 실행
      isMount.current = true;
      return; // useEffect 종료
    }
    console.log("update");
  });

	// 2-2 업데이트시 실행 - 컴포넌트 렌더링 관계없이
	const [delay, setDelay] = useState(1000); 
	useEffect(()=>{
		// setInterval 은 useEffect 와 별개로 실행된다.
		// const interval = setInterval(()=>{
		// 	// setCount((count) => count+1); // 함수형 업데이트 - 업데이트 시점에, 최신상태값을 참조할 수 있게 해준다.
		// 	setCount(count+1); 
		// 	console.log("useEffect 내부 setInterval 내부 count",count);
		// },delay);
		// return () => {
		// 	clearInterval(interval);
		// }
},[]); // 인터벌의 경우, 의존성빈배열이든, 업데이트든 계속 실행됨
	
	console.log("App 컴포넌트 렌더링");

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even/> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
