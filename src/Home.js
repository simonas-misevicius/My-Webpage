import React from "react";
import { Container, Row } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <h2 class="text-center">
            Ongoing project to show my web programming skills.
          </h2>
        </Row>
        <br />
        <Row>
          <h2 class="text-center ">
            Click links at the top of the page to see different small programs.
          </h2>
        </Row>
      </Container>
    );
  }
}

export default Home;
