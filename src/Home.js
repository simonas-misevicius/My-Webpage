import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

export default function Home() {
  const [imageData, setImageData] = useState();
  const [imageData2, setImageData2] = useState();
  const axios = require("axios");
  useEffect(() => {
    axios
      //.get("https://simonasrest.azurewebsites.net/api/Todo")
      .get("http://localhost:5000/api/Images")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setImageData(response.data[0].imageBytes);
      });
  }, [imageData]);
  useEffect(() => {
    axios
      //.get("https://simonasrest.azurewebsites.net/api/Todo")
      .get("http://localhost:5000/api/Images/1")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setImageData2(response.data.imageBytes);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [imageData2]);

  const imageSrc = "data:image/jpg;base64," + imageData;
  const imageSrc2 = "data:image/jpg;base64," + imageData2;
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

      <img src={imageSrc} alt="Girl in a jacket"></img>
      <img src={imageSrc2} alt="Girl in a "></img>
    </Container>
  );
}
