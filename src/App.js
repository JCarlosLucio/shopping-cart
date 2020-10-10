import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Item from './components/Item';
import Cart from './components/Cart';
import seedItems from './seedItems';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addCartItem = (item) => setCartItems([...cartItems, item]);
  const deleteCartItem = (id) =>
    setCartItems(cartItems.filter((item) => item.id !== id));
  const changeQty = (id, delta) =>
    setCartItems(
      cartItems.map(
        (item) => (item.id === id ? { ...item, qty: item.qty + delta } : item)
      )
    );
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
              <Item
                item={findItem(routeProps.match.params.id)}
                addCartItem={addCartItem}
              />
            )}
          />
          <Route exact path="/cart">
            <Cart
              items={cartItems}
              deleteCartItem={deleteCartItem}
              changeQty={changeQty}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
