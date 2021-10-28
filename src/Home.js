import React from "react";
import { Container, Row } from "react-bootstrap";

export default function Home() {
  const axios = require("axios");
  axios
    .get("https://simonasrest.azurewebsites.net/api/Todo")
    .then(function (response) {
      // handle success
      console.log(response.data[0].name);
    });
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
    </Container>
  );
}
