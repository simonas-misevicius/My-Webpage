import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import MyList from "./MyList";
import ImageWebService from "./ImageWebService";
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
          <Nav.Link eventKey="link-2" as={Link} to="/mylist">
            List example
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
        <Route path="/mylist">
          <MyList data={dataForList} />
        </Route>
        <Route path="/webservice">
          <ImageWebService />
        </Route>
      </Switch>
    </>
  );
}

export default App;
