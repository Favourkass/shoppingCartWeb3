// App.tsx
import React, { useState, useEffect } from 'react';
import ProductList from './components/products';
import ShoppingCart from './components/shoppingCart';
import { CartItem } from './components/interfaces';
const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from local storage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to local storage on cart change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="App">
      <h1>Shopping Cart App</h1>
      <ProductList cart={cart} setCart={setCart} />
      <ShoppingCart cart={cart} setCart={setCart} />
    </div>
  );
};

export default App;