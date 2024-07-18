import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import OrderForm from './components/OrderForm';
import OrderConfirmation from './components/OrderConfirmation';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/order" component={OrderForm} />
        <Route path="/confirmation" component={OrderConfirmation} />
      </Switch>
    </Router>
  );
};

export default App;
