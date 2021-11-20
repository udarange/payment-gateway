import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import PayNow from "./views/paynow/pages/PayNow";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/pay" component={PayNow} />
          <Route path="/">
            <Redirect to="/pay" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
