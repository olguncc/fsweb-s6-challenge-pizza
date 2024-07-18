import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import OrderForm from './components/OrderForm/OrderForm';
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/order" component={OrderForm} />
        <Route path="/confirmation" component={OrderConfirmation} />
      </Switch>
    </Router>
  );
};

export default App;
