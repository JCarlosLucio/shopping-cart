import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {
  return (
    <Router>
      <div>
        <h1>Shopping Cart</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
