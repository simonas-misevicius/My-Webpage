import MyForm from "./MyForm";
import { useState } from "react";
import MyRow from "./MyRow";
//import "./Form.css";

export default function MyList({ data }) {
  const [values, setValues] = useState(data);
  const addToList = (num, name) => {
    const newValues = [...values, { name: name, number: num }];
    setValues(newValues);
  };
  const removeFromList = (e) => {
    const removeId = e.target.dataset.remove;
    const newValues = values.filter((element, index) => {
      return index != removeId;
    });
    setValues(newValues);
  };
  const EditList = (i, name, num) => {
    const index = parseInt(i);
    const newValues = [
      ...values.slice(0, i),
      { name: name, number: num },
      ...values.slice(index + 1),
    ];
    setValues(newValues);
  };
  const SortName = () => {
    const newValues = values.slice(0).sort((first, second) => {
      return first.name.localeCompare(second.name);
    });
    setValues(newValues);
  };
  const [seachText, setSearch] = useState("");
  const SearchFilter = (e) => {
    const filter = e.target.value;
    setSearch(filter);
  };
  return (
    <>
      Search
      <input
        id="filter"
        value={seachText}
        onChange={SearchFilter}
        type="text"
      />
      <div>
        <MyForm addToList={addToList} />
      </div>
      <button id="sort" onClick={SortName}>
        Sort by name
      </button>
      <div>
        <ul>
          {values.map((item, i) => {
            if (seachText == "" || item.name.startsWith(seachText))
              return (
                <li key={i}>
                  <MyRow
                    item={item}
                    rowId={i}
                    removeFromList={removeFromList}
                    editList={EditList}
                  />
                </li>
              );
          })}
        </ul>
      </div>
      <br />{" "}
      <div id="sum">
        Sum is {values.reduce((prev, curr) => prev + parseInt(curr.number), 0)}
      </div>
    </>
  );
}
