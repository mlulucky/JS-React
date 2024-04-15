import { ChangeEvent, useState } from "react";

const useInput = (): [string, (e: ChangeEvent<HTMLInputElement>) => void] => {
  const [state, setState] = useState("");
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
    console.log(e.target.name, e.target.value);
  };
  return [state, onChangeInput];
};

export default useInput;
