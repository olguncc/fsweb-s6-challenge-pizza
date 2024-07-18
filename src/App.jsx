import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import OrderForm from './OrderForm';
import OrderConfirmation from './OrderConfirmation';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/order" component={OrderForm} />
          <Route path="/confirmation" component={OrderConfirmation} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
