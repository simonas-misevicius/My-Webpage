import { Container, Row, Col } from "react-bootstrap";

export default function SDBRowLower({ rowData, upperName }) {
  return (
    <>
      <Row>
        <Col>{rowData.namel}</Col>
        <Col> {upperName}</Col>
      </Row>
    </>
  );
}
