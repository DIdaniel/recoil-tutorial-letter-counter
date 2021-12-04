import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "../recoil/atoms/atom";

const TextInput = () => {
  const [stateText, setStateText] = useRecoilState(textState);

  const changeHandler = (e) => {
    setStateText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={stateText} onChange={changeHandler} />
      <br />
      Echo: {stateText}
    </div>
  );
};

export default TextInput;
