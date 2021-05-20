import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./Components/NavBar";
import SubForums from "./Components/SubForums";
import Forum from "./Components/Forum/Forum";

import { SubForumProvider } from "./contexts/SubForumContext";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <SubForumProvider>
          <Switch>
            <Route path="/" exact component={SubForums} />
          </Switch>

          <Switch>
            <Route path="/:forum/:id">
              <Forum />
            </Route>
          </Switch>
        </SubForumProvider>
      </>
    </Router>
  );
}

export default App;
// https://mobile.ant.design/components/nav-bar/
