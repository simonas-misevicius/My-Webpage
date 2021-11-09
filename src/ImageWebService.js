import WSInput from "./ImageWebServiceInput";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import { ClipLoader } from "react-spinners";

export default function ImageWS() {
  const [imageData, setImageData] = useState();
  const { promiseInProgress } = usePromiseTracker();
  const axios = require("axios");
  const request = (amount, func) => {
    var str = "https://simonasrest.azurewebsites.net/api/Images/1/";
    if (amount == null) {
      str = str + func;
    } else {
      str = str + func + "/" + amount.toString();
    }
    trackPromise(
      axios
        .get(str)
        .then(function (response) {
          //console.log(response.data);
          setImageData(response.data.imageBytes);
        })
        .catch(function (error) {
          console.log(error);
        })
    );
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
      {promiseInProgress === true ? <ClipLoader /> : null}
      <br />
      <WSInput request={request} name="Brightness" />
      <br />
      <WSInput request={request} name="Hue" />
      <br />
      <button onClick={() => request(null, "Reset")}>Reset</button>
    </Container>
  );
}
