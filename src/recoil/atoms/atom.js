import { atom } from "recoil";

export const textState = atom({
  key: "text",
  default: "",
});

// key : Unique ID
// default: initial value
