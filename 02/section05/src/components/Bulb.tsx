import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("OFF");
	const style = {backgroundColor : light === "OFF" ? "gray" : "orange"}
  return (
    <div>
      <h1 style={style}>{light}</h1>
      <button
        onClick={() => {
          setLight(light === "OFF" ? "ON" : "OFF");
        }}
      >
        {light === "OFF" ? "전구 켜기" : "전구 끄기"}
      </button>
    </div>
  );
};

export default Bulb;
