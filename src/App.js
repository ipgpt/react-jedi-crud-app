import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import People from "./components/People";
import Planets from "./components/Planets";
import Starships from "./components/Starships";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
          <NavLink
            className="navbar-brand m-2 p-2 text-white"
            activeClassName="bg-primary"
            to="/"
            exact
          >
            JEDI
          </NavLink>
          <NavLink
            className="m-2 p-2 text-white"
            activeClassName="bg-primary"
            to="/people"
          >
            People
          </NavLink>
          <NavLink
            className="m-2 p-2 text-white"
            activeClassName="bg-primary"
            to="/planets"
          >
            Planets
          </NavLink>
          <NavLink
            className="m-2 p-2 text-white"
            activeClassName="bg-primary"
            to="/starships"
          >
            Starships
          </NavLink>
        </nav>

        <Switch>
          <Redirect exact from="/" to="/people" />
          <Route path="/people" component={People} />
          <Route path="/planets" component={Planets} />
          <Route path="/starships" component={Starships} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
