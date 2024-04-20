import { ChangeEvent } from "react";

const CurrencyInput = ({
  name,
  value,
  onChangeProp,
}: {
  name: string;
  value: number;
  onChangeProp: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <h3>
        {name} : {" "}
        <input name={name} value={value} type="text" onChange={onChangeProp} />
      </h3>
    </>
  );
};

export default CurrencyInput;
