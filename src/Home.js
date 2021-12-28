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
      <h3>
        Webpage repository https://github.com/simonas-misevicius/My-Webpage
      </h3>
      <h5>
        Webpage hosted on github pages. Used single page routing. Other
        libraries more explained in repository readme page.
      </h5>
      <br />
      <h3>
        Apollo server repository
        https://github.com/simonas-misevicius/apollo-server
      </h3>
      <h5>
        Project uses serverless database technologie. Database is in AWS. Apollo
        server is responsible for executing webpage requests on database. Apollo
        server also lives in AWS as Lambda function. Apollo server uses graphQL
        language to construct queries and mutations. Also uses
        schema-resolver-datasource model.
      </h5>
      <br />
      <h3>https://github.com/simonas-misevicius/WebServicePicture</h3>
      <h5>
        Made with .Net. Hosted on Azure. Uses model-controller model. Uses
        inmemory database.
      </h5>
      <br />
    </Container>
  );
}
