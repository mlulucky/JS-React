import "./Main.css"; // css : import 경로

const Main = () => {
  const user = {
    name: "dmswjd",
    isLogin: false,
  };
  // 조건에 따른 다른 UI 렌더링
  // if 문
  if (user.isLogin) {
    return (
      <div style={{ backgroundColor: "red", borderBottom: "5px solid pink" }}>
        로그인
      </div>
    );
  } else {
    return <div className="logout">로그아웃</div>;
  }
  // 삼항연산자
  // return <>{user.isLogin ? <div>로그인</div> : <div>로그아웃</div>}</>;
};

export default Main;



// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식(값) 만 넣을 수 있다. -> if 문, for 문은 불가 
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// true, undefined, null 은 화면에 렌더링 안된다.
// {객체} 객체를 직접 화면에 렌더링 할 수 없다. -> {객체.키} 값을 뽑아서는 렌더링 가능
// 3. 모든 html 태그는 닫혀있어야 한다. <img></img> , <img/>
// 4. return 최상위 태그는 반드시 하나여야만 한다.

// 리액트 - 자바스크립트, html 함께 사용 (자바스크립트 예약어 class 명 쓸수 x -> className 속성)