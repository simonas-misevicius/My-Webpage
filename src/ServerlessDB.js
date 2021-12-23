import { useQuery, useMutation, gql, NetworkStatus } from "@apollo/client";
import { Container, Row, Col } from "react-bootstrap";
import SDBList from "./SDBList";
import SDBListLowers from "./SDBListLowers";
import SDBAdd from "./SDBAdd";
import SDBAddLower from "./SDBAddLower";
import SDBListUpper from "./SDBListUpper";
import SDBEditUpper from "./SDBEditUpper";
import SDBEditLower from "./SDBEditLower";

const GET_UPPERS = gql`
  query {
    uppers {
      name
      id
      lowers {
        namel
        id
        upperkey
      }
    }
  }
`;

export default function ServerlessDB() {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_UPPERS,
    {
      fetchPolicy: "network-only",
      notifyOnNetworkStatusChange: true,
    }
  );

  if (networkStatus === NetworkStatus.refetch) {
    return "Refetching!";
  } else if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>Error </p>;
  } else {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <SDBAdd refetch={refetch} />
            </Col>
            <Col>
              <SDBAddLower uppers={data.uppers} refetch={refetch} />
            </Col>
          </Row>
          <Row>
            <Col>
              <SDBList
                data={data}
                List={SDBListUpper}
                refetch={refetch}
                Edit={SDBEditUpper}
              />
            </Col>
            <Col>
              <SDBList
                data={data}
                List={SDBListLowers}
                refetch={refetch}
                Edit={SDBEditLower}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
//<button onClick={() => refetch()}>Refresh</button>
