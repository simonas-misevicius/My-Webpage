import ListAdd from "./ListAdd";
import { useState } from "react";
import ListRow from "./ListRow";
import { Container, Row, Col } from "react-bootstrap";

export default function MyList({ data }) {
  const [values, setValues] = useState(data);
  const [seachText, setSearch] = useState("");

  const addToList = (num, name) => {
    const newValues = [...values, { name: name, number: num }];
    setValues(newValues);
  };
  const removeFromList = (e) => {
    const removeId = parseInt(e.target.dataset.remove);
    const newValues = values.filter((element, index) => {
      return index !== removeId;
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
  const SortByName = () => {
    const newValues = values.slice(0).sort((first, second) => {
      return first.name.localeCompare(second.name);
    });
    setValues(newValues);
  };
  return (
    <Container>
      <Row>
        <Col>
          Search
          <input
            id="filter"
            value={seachText}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
          />
        </Col>
        <Col lg={6}>
          <ListAdd addToList={addToList} />
        </Col>
        <Col>
          <button id="sort" onClick={SortByName}>
            Sort by name
          </button>
        </Col>
      </Row>
      <br />
      <div /*class="d-flex justify-content-center"*/>
        <ul>
          {values.map((item, i) => {
            if (seachText === "" || item.name.startsWith(seachText)) {
              return (
                <li key={i}>
                  <ListRow
                    item={item}
                    rowId={i}
                    removeFromList={removeFromList}
                    editList={EditList}
                  />
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
      <br />{" "}
      <h4 id="sum">
        Sum is {values.reduce((prev, curr) => prev + parseInt(curr.number), 0)}
      </h4>
    </Container>
  );
}
