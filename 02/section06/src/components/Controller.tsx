const Controller = ({
  onClickButton,
}: {
  onClickButton: (value: number) => void;
}) => {
	const buttons = [
		{label: "-1", value: -1},
		{label: "-10", value: -10},
		{label: "-100", value: -100},
		{label: "100", value: 100},
		{label: "10", value: 10},
		{label: "1", value: 1}
	];
  return (
    // onClick = { onClickButton } 안하는 이유
    // 인수를 원하는 값으로 설정하기 위해서
    // onClick = { ()=>{  onClickButton(-1) } }
    <div>
      {
				buttons.map((item, idx, arr) => 
					<button onClick={()=>{onClickButton(item.value)}}>
						{item.label}
					</button>
				)
			}
    </div>
  );
};

export default Controller;
