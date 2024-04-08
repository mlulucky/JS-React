import { ReactNode } from "react";

const Button = ({
  text,
  color,
  children,
}: {
  text: string;
  color?: string;
  children?: ReactNode;
}) => {
  const onClickButton = () => {
    console.log(text); // props 로 전달받은 속성에 대해 접근가능
  };
  return (
    <button onClick={onClickButton} onMouseEnter={onClickButton}>
      {text} - {color}
      {children}
    </button>
  );
};

// props 기본값 설정 (값이 없는 경우 적용)
Button.defaultProps = {
  color: "black", // props 가 선택적(?) 사항임을 명시해야 기본값이 적용된다.
};

export default Button;
