import { ChangeEvent } from "react";
import "./ContactEditor.css";
import inputConfigs from "../util/inputConfigs";

// 둘다 ref 가 반환하는 객체 타입
// React.RefObject (immutable - 불변 속성) - 속성값을 읽을뿐, 바꿀 수 없다.(.current 속성에 새로운값 할당x)
// React.MutableRefObject (mutable - ref 속성이 가변이다.) - 단일 참조객체로 여러 입력요소의 배열을 관리할 수 있다.
type ContactFn = {
  inputRef: React.MutableRefObject<HTMLInputElement[]>; // ref 를 props 로 전달할때, 타입을 명시적으로 지정
  onAddContact: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddContactList: () => void;
};

export default function ContactEditor({
  inputRef,
  onAddContact,
  onAddContactList,
}: ContactFn) {
  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        {inputRef.current.map((_, idx) => { // inputRef.current === [ input.name, input.email ]
					const config = inputConfigs[idx];
          return (
            <input
              ref={(input) => {
                if (input) inputRef.current[idx] = input;
              }}
              onChange={onAddContact}
              name={config.name}
              className={config.className}
              placeholder={config.placeholder}
            />
          );
        })}
      </div>
      <button onClick={onAddContactList}>Add</button>
    </div>
  );
}
