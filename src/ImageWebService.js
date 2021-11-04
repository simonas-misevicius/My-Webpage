import WSInput from "./ImageWebServiceInput";
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

export default function ImageWS() {
  const [imageData, setImageData] = useState();
  const axios = require("axios");
  const request = (amount, func) => {
    var str = "http://localhost:5000/api/Images/1/";
    if (amount == null) {
      str = str + func;
    } else {
      str = str + func + "/" + amount.toString();
    }
    axios
      .get(str)
      .then(function (response) {
        //console.log(response.data);
        setImageData(response.data.imageBytes);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    request(null, "Reset");
  }, []);
  const imageSrc = "data:image/jpg;base64," + imageData;
  return (
    <Container>
      <h1 className="text-center">
        Small example of consuming web api, which exposes image processing
        functions.
      </h1>
      {imageData == null ? null : <img src={imageSrc} alt="Example"></img>}
      <br />
      <WSInput request={request} name="Brightness" />
      <br />
      <WSInput request={request} name="Hue" />
      <br />
      <button onClick={() => request(null, "Reset")}>Reset</button>
    </Container>
  );
}
