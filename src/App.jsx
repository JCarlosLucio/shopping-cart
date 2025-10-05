import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router';

import Cart from './components/Cart';
import ComingSoon from './components/ComingSoon';
import Home from './components/Home';
import Item from './components/Item';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import seedItems from './seedItems';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addCartItem = (newItem) => {
    // check if already in cart
    const alreadyInCart = cartItems
      .map((cItem) => cItem.id)
      .includes(newItem.id);
    // if in cart add 1 to qty
    if (alreadyInCart) {
      changeQty(newItem.id, 1);
    } else {
      // if not add complete item
      setCartItems([...cartItems, newItem]);
    }
  };
  const deleteCartItem = (id) =>
    setCartItems(cartItems.filter((item) => item.id !== id));
  const changeQty = (id, delta) =>
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + delta } : item,
      ),
    );
  const findItem = (id) => seedItems.find((item) => item.id === id);

  const cartItemsQty = cartItems.reduce((acc, cur) => acc + cur.qty, 0);

  return (
    <Router basename="/">
      <React.Fragment>
        <Navbar cartItemsQty={cartItemsQty} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop items={seedItems} />} />
          <Route
            path="/shop/:id"
            element={<Item findItem={findItem} addCartItem={addCartItem} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                items={cartItems}
                deleteCartItem={deleteCartItem}
                changeQty={changeQty}
              />
            }
          />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
