import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import OrderForm from './components/OrderForm';
import OrderConfirmation from './components/OrderConfirmation';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/order" component={OrderForm} />
        <Route path="/confirmation" component={OrderConfirmation} />
      </Switch>
    </Router>
  );
};

export default App;
