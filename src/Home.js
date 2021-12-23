import React from "react";
import { Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Row>
        <h2 className="text-center">
          Ongoing project to show my web programming skills.
        </h2>
      </Row>
      <br />
      <Row>
        <h2 className="text-center ">
          Click links at the top of the page to see different small programs.
        </h2>
      </Row>

      <br />
      <h3>Links to repositories:</h3>
      <br />
      <h3>https://github.com/simonas-misevicius/My-Webpage</h3>
      <br />
      <h3>https://github.com/simonas-misevicius/WebServicePicture</h3>
      <br />
      <h3>https://github.com/simonas-misevicius/apollo-server</h3>
    </Container>
  );
}
