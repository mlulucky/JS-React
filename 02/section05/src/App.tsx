import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Button from "./components/Button";

function App() {
  // 부모 컴포넌트 // App 컴포넌트 - root(조상) 컴포넌트
  // props 가 많은 경우 -> 객체로 만들어 전달
  const buttonProps = {
    text: "spread",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      <Button {...buttonProps} />
      <Button text={"메일"} color={"red"} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식요소</div>
      </Button>
    </>
  );
}

export default App;
