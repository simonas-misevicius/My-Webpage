import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import ImageWebService from "./ImageWebService";
import SDBHome from "./SDBHome";
import { Nav } from "react-bootstrap";

function App() {
  const dataForList = [
    { name: "abc", number: 123 },
    { name: "def", number: 235 },
  ];
  return (
    <>
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link eventKey="link-1" as={Link} to="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" as={Link} to="/serverless">
            Serverless DB
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" as={Link} to="/webservice">
            Consume Web Service
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <br />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/webservice">
          <ImageWebService />
        </Route>
        <Route path="/serverless">
          <SDBHome />
        </Route>
      </Switch>
    </>
  );
}

export default App;

/*
import MyList from "./MyList";

<Nav.Item>
          <Nav.Link eventKey="link-2" as={Link} to="/mylist">
            List example
          </Nav.Link>
        </Nav.Item>

<Route path="/mylist">
          <MyList data={dataForList} />
        </Route>
*/
