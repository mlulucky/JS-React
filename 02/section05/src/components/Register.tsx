import { ChangeEvent, useState, useRef } from "react";
// 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

// 컴포넌트 바깥에서 변수선언시
// let cnt = 0;
// 현재 변수가 선언된 Register 파일, 즉 컴포넌트가 다른곳에서 사용되는 경우 (함수가 여러번 호출되는 것 // )
// -> cnt 하나의 변수를 공유하게 된다.

const Register = () => {
  // 여러 상태를 하나의 객체로 관리
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  console.log("리렌더링");
  const countRef = useRef(0); // 값이 변경되도 컴포넌트 렌더링 안됨 {current: undefined} // current 에 참조값을 저장한다.
  // 리렌더링
  // useRef, useState -> 컴포넌트가 리렌더링 되도, 값이 다시 초기화 되지 않는다.
  // let cnt = 0;
  // -> 일반 자바스크립트 변수와의 차이점 (일반 자바스크립트 변수는 리렌더링되면 값이 다시 초기화 된다.)

  // 통합 이벤트 핸들러
  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    countRef.current++;
    console.log(countRef.current);
    // cnt++;
    setInput({
      ...input, // 기존 상태(객체)를 복사
      [e.target.name]: e.target.value, // [변수명] == key
    });
  };

  // 초기렌더링 단계에는 해당 요소가 생성되지 않을 수 있어서.
  // inputRef.current  (ref 에 input 태그가 저장이 된다.)
  const inputRef = useRef<HTMLInputElement>(null); // ref 가 DOM 을 참조하기 전에 null 을 가리키게 한다.
  const onSubmit = () => {
    if (inputRef.current !== null && input.name === "") {
      // DOM 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          countRef.current++;
          console.log(countRef.current);
        }}
      >
        ref 1증가
      </button>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          type="text"
          onChange={onChange}
          placeholder="이름"
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          type="date"
          onChange={onChange}
        />
        {input.birth}
      </div>
      <div>
        <select name="country" onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea name="bio" onChange={onChange} />
        {input.bio}
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

// select 태그
// option - value 를 설정하면 -> value 로 선택이 된다. (명시 안하는 경우, option 의 문자가 선택됨)

export default Register;
