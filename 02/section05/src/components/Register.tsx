import { ChangeEvent, useState } from "react";
// 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [name, setName] = useState("홍길동");
	const [birth, setBirth] = useState("");
	const [country, setCountry] = useState("");
	const [bio, setBio] = useState("");
	
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    // input 태그에서 change 이벤트가 발생했다고 타입 명시
    // console.log(e); // e.target.value // 입력한 값 - e 이벤트 객체의 target.value 에 값이 있다.
    setName(e.target.value);
  };

	const onChangeBirth = (e: ChangeEvent<HTMLInputElement>) => {
		setBirth(e.target.value);
	}

	const onChangeCountry = (e : ChangeEvent<HTMLSelectElement>) => {
		setCountry(e.target.value);
	}

	const onChangeBio = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setBio(e.target.value);
	}

  return (
    <div>
      <div>
        <input
          value={name}
          type="text"
          onChange={onChangeName}
          placeholder="이름"
        />
      </div>
      <div>
        <input value={birth} type="date" onChange={onChangeBirth}/>
				{birth}
      </div>
			<div>
				<select onChange={onChangeCountry}>
					<option value=""></option>
					<option value="kr">한국</option>
					<option value="us">미국</option>
					<option value="uk">영국</option>
				</select>
				{country}
			</div>
			<div>
				<textarea onChange={onChangeBio}/>
				{bio}
			</div>
    </div>
  );
};

// select 태그
// option - value 를 설정하면 -> value 로 선택이 된다. (명시 안하는 경우, option 의 문자가 선택됨)

export default Register;
