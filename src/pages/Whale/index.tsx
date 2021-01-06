import React from "react";
// import { useLocation } from "react-router-dom";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Beluga from "./Beluga";
import Blue from "./Blue";

const Whale = () => {
  // const { search } = useLocation();
  // const match = search.match(/type=(.*)/);
  // const type = match?.[1];

  const { path } = useRouteMatch();

  return (
    <div>
      <>
        <h2>Whale</h2>
        {/* {type === "beluga" && <Beluga />}
        {type === "blue" && <Blue />} */}

        <Switch>
          <Route path={`${path}/beluga`}>
            <Beluga />
          </Route>
          <Route path={`${path}/blue`}>
            <Blue />
          </Route>
        </Switch>
      </>
    </div>
  );
};

export default Whale;
