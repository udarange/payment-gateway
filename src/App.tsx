import React from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import PayNow from './views/paynow/pages/PayNow';
import PayResult from './views/payResult/pages/PayResult';
import Checkout from './views/checkout/pages/Checkout';

function App() {
  return (
    <div className="container my-5">
      <div className="d-flex p-0">
        <h1 className="mr-3">Pay Now</h1>
        <img src="https://img.icons8.com/emoji/48/000000/credit-card-emoji.png" alt="logo" />
      </div>
      <p className="m-1">It is so easy now to make your payments.</p>
      <div className="mb-3 p-0" style={{ borderBottom: '1px solid rgb(233, 236, 239)' }} />
      <Router>
        <Switch>
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/pay" component={PayNow} />
          <Route exact path="/payResult" component={PayResult} />
          <Route path="/">
            <Redirect to="/checkout" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
