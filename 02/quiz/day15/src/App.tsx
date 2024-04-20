import { ChangeEvent, useRef, useState } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import inputConfigs from "./util/inputConfigs";

export type Contact = {
  name: string;
  email: string;
	id: number;
};

function App() {
	const dataId = useRef(0);
  const [contact, setContact] = useState({
    name: "",
    email: "",
		id: dataId.current, // useState - 변경된 상태를 바로 반영 x ->  useRef로 참조한 값은 바로 업데이트되지 않습니다.
  });
  const [contactList, setContactList] = useState<Contact[]>([]);
  const onAddContact = (e: ChangeEvent<HTMLInputElement>) => {
		setContact({ 
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const inputRef = useRef<HTMLInputElement[]>(Array(2).fill(null)); // useRef 의 객체참조는 .current
	// inputRef.current === [ input.name, input.email ]
  // 리스트에 추가하기
  const onAddContactList = () => {
    let isEmpty = false;
		for(const [idx, input] of inputRef.current.entries()) { // const [idx, value] = 배열.entries() // 배열의 entries 는 idx 와 value 를 반환한다.
			if (input !== null && input.value === "") {
        input.focus();
				alert(inputConfigs[idx].alertMessage);
        isEmpty = true;
        break;
      }
		}
    if (isEmpty) return; // 함수 종료
		// 매번 새로운 id 값을 부여
		// setState 는 실행함수가 실행될때의 스냅샷!을 찍는다.
		setContactList([...contactList, {...contact, id: dataId.current}]);
		dataId.current++;
		setContact({ id: dataId.current, name: "", email: ""}); // setState 즉시반영x (값은 변경되더라도)
		console.log("addList 함수 내부에서", contact);
		inputRef.current.forEach((input) => {
      input.value = "";
    });
  };

	const onRemoveContact = (targetId: number) => { // 선택한 요소의 id
		setContactList(contactList.filter((contact)=> contact.id !== targetId)); 
	}

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor
          inputRef={inputRef}
          onAddContact={onAddContact}
          onAddContactList={onAddContactList}
        />
      </section>
      <section>
        <ContactList contactList={contactList} onRemoveContact={onRemoveContact}/>
      </section>
    </div>
  );
}

export default App;
