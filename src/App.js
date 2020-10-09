import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">
            <h1>Shopping Cart</h1>
          </Link>
          <Link to="/shop">Shop</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
