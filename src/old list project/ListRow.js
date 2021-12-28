import { useState, useEffect } from "react";

export default function ListRow({ item, rowId, removeFromList, editList }) {
  //console.log(rowId);
  const [num, changeNum] = useState(item.number);
  const [name, changename] = useState(item.name);
  useEffect(() => {
    changeNum(item.number);
    changename(item.name);
  }, [item]);
  const edit = (e) => {
    if (num !== "" && name !== "") {
      const id = e.target.dataset.edit;
      editList(id, name, num);
    }
  };
  return (
    <>
      <input
        id="numEdit"
        value={num}
        onChange={(event) => {
          changeNum(event.target.value);
        }}
        type="number"
      />
      <input
        id="textEdit"
        value={name}
        onChange={(event) => {
          changename(event.target.value);
        }}
        type="text"
      />
      <button id="deleteButton" data-remove={rowId} onClick={removeFromList}>
        Delete
      </button>
      <button id="editButton" data-edit={rowId} onClick={edit}>
        Edit
      </button>
      {num === "" || name === "" ? <p>Missing input</p> : null}
    </>
  );
}
