import { useState } from "react";

export default function MyForm({ addToList = (f) => f }) {
  const sendValues = () => {
    addToList(num, name);
  };
  const [num, changeNum] = useState("");
  const [name, changename] = useState("");
  return (
    <>
      <input
        id="numInput"
        value={num}
        onChange={(event) => {
          changeNum(event.target.value);
        }}
        type="number"
        placeholder="123"
        required
      />
      <input
        id="textInput"
        value={name}
        onChange={(event) => {
          changename(event.target.value);
        }}
        type="text"
        pattern="[a-zA-Z]*"
        required
      />
      <button id="addButton" onClick={sendValues}>
        ADD
      </button>
    </>
  );
}
