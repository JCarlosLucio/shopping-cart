import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Item from './components/Item';
import Cart from './components/Cart';
import seedItems from './seedItems';

function App() {
  const findItem = (id) => seedItems.find((item) => item.id === id);

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop">
            <Shop items={seedItems} />
          </Route>
          <Route
            exact
            path="/shop/:id"
            render={(routeProps) => (
              <Item {...findItem(routeProps.match.params.id)} />
            )}
          />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
