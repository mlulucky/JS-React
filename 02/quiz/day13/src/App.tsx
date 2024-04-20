import { ChangeEvent, useState } from "react";
import "./App.css";
import CurrencyInput from "./components/CurrencyInput";

const 환율 = 1300;
function App() {
  const [exchangeRate, setExchangeRate] = useState({
    krw: 1300,
    usd: 1,
  });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const 입력값 = parseInt(e.target.value) || 0; // input 의 입력값은 문자열로 읽힌다.
    const { name } = e.target;
    setExchangeRate({
      krw: name === "krw" ? 입력값 : 입력값 * 환율,
      usd: name === "usd" ? 입력값 : 입력값 / 환율,
    });
  };
  return (
    <>
			<h2>환율 변환기 (KRW-USD)</h2>
      <CurrencyInput
        name="krw"
        value={exchangeRate.krw}
        onChangeProp={onChangeHandler}
      />
      <CurrencyInput
        name="usd"
        value={exchangeRate.usd}
        onChangeProp={onChangeHandler}
      />
    </>
  );
}

export default App;
