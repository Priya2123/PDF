import React from "react";
import {
  Main,
  About,
  Started,
  Landing,
  Doc,
  Upload,
  Profile,
  Login,
  Signup,
} from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);

const App = () => {
  return (
    <>
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gettingStarted" component={Started} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/doc" component={Doc} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
