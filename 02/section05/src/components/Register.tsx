import { ChangeEvent, useState } from "react";
// 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  // 여러 상태를 하나의 객체로 관리
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

	console.log(input);

	// 통합 이벤트 핸들러
	const onChange = (e : ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>{
		setInput({
			...input, // 기존 상태(객체)를 복사
			[e.target.name] : e.target.value // [변수명] == key 
		})
	}

  return (
    <div>
      <div>
        <input
					name="name"
          value={input.name}
          type="text"
          onChange={onChange}
          placeholder="이름"
        />
      </div>
      <div>
        <input name="birth" value={input.birth} type="date" onChange={onChange} />
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
    </div>
  );
};

// select 태그
// option - value 를 설정하면 -> value 로 선택이 된다. (명시 안하는 경우, option 의 문자가 선택됨)

export default Register;
