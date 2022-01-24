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
  Signuplogin,
  Feedback,
  Notfound,
  Support,
  Faq,
  Tabs,
} from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import history from "./services/History";
import { ConnectedRouter } from "connected-react-router";

library.add(fab, faCheckSquare, faCoffee);
const store = configureStore(history);
const App = () => {
  return (
    <Provider store={store}>
      {" "}
      <>
        <ConnectedRouter history={history}>
          {" "}
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
              <Route exact path="/signuplogin" component={Signuplogin} />
              <Route exact path="/feedback" component={Feedback} />
              <Route exact path="/support" component={Support} />
              <Route exact path="/faq" component={Faq} />
              <Route exact path="/questions" component={Tabs} />
              <Route component={Notfound} />
            </Switch>
          </Router>
        </ConnectedRouter>
      </>
    </Provider>
  );
};

export default App;
