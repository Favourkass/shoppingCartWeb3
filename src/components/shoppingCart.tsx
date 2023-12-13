// ShoppingCart.tsx
// ShoppingCart.tsx
import React, { useEffect, useState } from "react";
import { Product, CartItem } from "./interfaces";

interface ShoppingCartProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cart, setCart }) => {
  const products: Product[] = [
    { id: 1, name: 'Product 1', amount: 10 },
    { id: 2, name: 'Product 2', amount: 15 },
    { id: 3, name: 'Product 3', amount: 20 },
    { id: 4, name: 'Product 4', amount: 25 },
    { id: 5, name: 'Product 5', amount: 30 },
    { id: 6, name: 'Product 6', amount: 35 },
    { id: 7, name: 'Product 7', amount: 40 },
    { id: 8, name: 'Product 8', amount: 45 },
    { id: 9, name: 'Product 9', amount: 50 },
    { id: 10, name: 'Product 10', amount: 55 },
  ];

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (couponCode === 'WEB3BRIDGECOHORTx') {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  }, [couponCode]);

  const handleRemoveFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.productId !== productId));
  };

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalAmount = (): number => {
    const subtotal = cart.reduce((total, item) => {
      const product = products.find((p) => p.id === item.productId);
      return product ? total + product.amount * item.quantity : total;
    }, 0);
    console.log(subtotal * (1 - discount))
    return subtotal * (1 - discount);

  };
  const getSubTotalAmount = (): number => {
    const subtotal = cart.reduce((total, item) => {
      const product = products.find((p) => p.id === item.productId);
      return product ? total + product.amount * item.quantity : total;
    }, 0);
    return subtotal 

  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Shopping Cart</h2>
      <ul style={styles.list}>
        {cart.map((item) => (
          <li key={item.productId} style={styles.listItem}>
            {products.find((p) => p.id === item.productId)?.name} - $
            {(products.find((p) => p.id === item.productId)?.amount || 0).toFixed(2)} x{' '}
            {item.quantity}{' '}
            <button
              onClick={() => handleRemoveFromCart(item.productId)}
              style={styles.button}
            >
              Remove from Cart
            </button>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                handleQuantityChange(item.productId, parseInt(e.target.value, 10))
              }
              style={styles.input}
            />
          </li>
        ))}
      </ul>
      <p style={styles.text}>Subtotal: ${getSubTotalAmount().toFixed(2)}</p>
      {discount > 0 && (
        <p style={styles.text}>Discount Applied: {discount * 100}%</p>
      )}
      <p style={styles.text}>Total Amount: ${(getTotalAmount() || 0).toFixed(2)}</p>
      <label style={styles.label}>
        Coupon Code:
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          style={styles.input}
        />
      </label>
    </div>
  );
};
const styles = {
  container: {
    // textAlign: 'center',
    marginTop: '20px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f0f8ff', // Light blue
  },
  header: {
    fontSize: '24px',
    color: '#000080', // Navy blue
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#4169e1', // Royal blue
    color: '#fff',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
    border: 'none',
    marginRight: '10px',
  },
  input: {
    padding: '5px',
    borderRadius: '5px',
    marginRight: '10px',
  },
  text: {
    fontSize: '16px',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
  },
};
export default ShoppingCart;