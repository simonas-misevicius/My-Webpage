import "./App.css";
import { Route, Switch, Link, useLocation } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import MyList from "./MyList";
import ShowQuery from "./ShowQuery";
import RealForm from "./RealForm";
import Drag from "./Drag";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  const query = useQuery();
  const data = [
    { name: "bla", number: 123 },
    { name: "ut", number: 235 },
  ];
  return (
    <>
      <div>
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/myform">MyForm</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
          <RealForm />
        </Route>
        <Route path="/myform">
          <MyList data={data} />
          <MyList data={data} />
        </Route>
        <Route path="/query">
          <ShowQuery str={query.get("str")} num={query.get("num")} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
