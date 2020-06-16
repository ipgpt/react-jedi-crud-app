import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import JEDI from "./components/JEDI";
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
          <Route exact path="/" component={JEDI} />
          <Route exact path="/people" component={People} />
          <Route exact path="/planets" component={Planets} />
          <Route exact path="/starships" component={Starships} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
