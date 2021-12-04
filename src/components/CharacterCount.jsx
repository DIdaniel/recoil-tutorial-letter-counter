import React from "react";
import { useRecoilValue } from "recoil";
import { charCountState } from "../recoil/selectors/selector";

const CharacterCounter = () => {
  const count = useRecoilValue(charCountState);

  return <div>character count : {count}</div>;
};

export default CharacterCounter;
