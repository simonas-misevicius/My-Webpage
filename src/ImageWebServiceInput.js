import { useState } from "react";

export default function WSInput({ path, request, name }) {
  const [num, changeNum] = useState(0);
  const makeRequest = () => {
    if (num != "" || typeof num == "number") {
      request(num, name);
    }
  };
  return (
    <>
      <input
        value={num}
        onChange={(event) => {
          changeNum(event.target.value);
        }}
        type="number"
      />
      <button onClick={makeRequest}>{name}</button>
    </>
  );
}
