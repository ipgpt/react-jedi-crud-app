import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import JEDI from './components/JEDI';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">JEDI</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
            <li>
              <Link to="/planets">Planets</Link>
            </li>
            <li>
              <Link to="/starships">Starships</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/planets">
            <Planets />
          </Route>
          <Route path="/starships">
            <Starships />
          </Route>
          <Route path="/">
            <JEDI />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
