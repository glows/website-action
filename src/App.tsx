import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Switch, useLocation } from "react-router-dom";

import Manatee from "./pages/Home";
import Narwhal from "./pages/About";
import Whale from "./pages/Whale";

function App(props: any) {
  return (
    <div className="App">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
        <h3>
          <a>
            <Link to="/manatee">Manatee</Link>
          </a>
          &nbsp;&bull;&nbsp;
          <a>
            <Link to="/narwhal">Narwhal</Link>
            &nbsp;&bull;&nbsp;
          </a>
          <a>
            <Link to="/whale">Whale</Link>
            &nbsp;&bull;&nbsp;
          </a>
          <a>
            <Link to="/whale/beluga">Beluga Whale</Link>
            &nbsp;&bull;&nbsp;
          </a>
          <a>
            <Link to="/whale/blue">Blue Whale</Link>
          </a>
          &nbsp;&bull;&nbsp;
          <a>
            <Link to="/whale?type=beluga">Beluga Whale</Link>
          </a>
          &nbsp;&bull;&nbsp;
          <a>
            <Link to="/whale?type=blue">Blue Whale</Link>
          </a>
        </h3>
      <hr />


        <Switch>
          <Route path="/">
            <Manatee />
          </Route>
          <Route path="/manatee">
            <Manatee />
          </Route>
          <Route path="/narwhal">
            <Narwhal />
          </Route>
          <Route path="/whale">
            <Whale />
          </Route>
          {/* <Route path="/whale/:type">
            <Whale />
          </Route> */}
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
