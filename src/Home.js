import React from "react";
import { Container, Row } from "react-bootstrap";
import { useQuery, gql } from "@apollo/client";

const GET_UPPERS = gql`
  query {
    uppers {
      name
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_UPPERS);

  console.log(data);
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
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error </p>
      ) : (
        <div>data: {data.uppers[0].name}</div>
      )}
    </Container>
  );
}
