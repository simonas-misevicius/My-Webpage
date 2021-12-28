import { useMutation, gql } from "@apollo/client";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function SDBRow({
  rowData,
  mutationString,
  MyRow,
  upperName,
  upperId,
  EditRow,
  checkData,
}) {
  const DELETE = gql(mutationString);
  const [mutateFunction, { data, loading, error }] = useMutation(DELETE);

  const removeItem = () => {
    mutateFunction({ variables: { id: rowData.id } });
  };
  const passEditRow = () => {
    EditRow(rowData, upperName, upperId);
  };
  useEffect(() => {
    if (data) {
      checkData(data);
    }
  });
  return (
    <div>
      <Row>
        <Col>
          <MyRow rowData={rowData} upperName={upperName} />
        </Col>
        <Col>
          <button onClick={removeItem}>Remove item</button>
        </Col>
        <Col>
          <button onClick={passEditRow}>Edit item</button>
        </Col>
      </Row>
    </div>
  );
}
