import { ChangeEvent, useRef, useState } from "react";

const OrderEditor = () => {
	const [state, setState] = useState({
		menu: "족발",
		address: "",
		request: ""
	});
	const {menu, address, request} = state;
	// 메뉴, 배달주소, 요청사항 저장
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}
	// 주문완료 -> 입력한 값을 alert 출력
	const inputRef = useRef<HTMLInputElement>(null);
	console.log(inputRef.current); // <input .. />
	
	const onSubmit = ()=>{
		// 입력x -> focus
		if(inputRef.current !== null && inputRef.current.value === "") {
			inputRef.current.focus();
			return;
		}
		// 입력o -> alert
		const 알림 = `주문이 완료되었습니다. 메뉴: ${menu}, 주소: ${address}, 요청사항: ${request}`;
		alert(알림);
	}

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      <h2>배달의민족 주문</h2>›
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>
          메뉴 선택
        </div>
        <select name="menu" onChange={onChangeHandler} style={{ width: 300, padding: 5 }}>
          <option value={"족발"}>족발</option>
          <option value={"떡볶이"}>떡볶이</option>
          <option value={"아이스크림"}>아이스크림</option>
          <option value={"샐러드"}>샐러드</option>
        </select>
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>
          배달 주소
        </div>
        <input
					ref={inputRef}
					value={state.address}
					name="address"
					onChange={onChangeHandler}
          style={{ width: 300, padding: 5 }}
          placeholder="주소) 서울특별시 xx동 .."
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>
          배달 요청사항
        </div>
        <textarea
					name="request"
					onChange={onChangeHandler}
          style={{ width: 300, padding: 5 }}
          placeholder="배달 요청사항을 써 주세요..."
        />
      </div>
      <div>
        <button
					onClick={onSubmit}
          style={{ width: 300, padding: 5 }}
        >
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default OrderEditor;