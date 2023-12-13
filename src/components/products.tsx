// ProductList.tsx
import React from 'react';
import { CartItem, Product } from './interfaces';

interface ProductListProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const ProductList: React.FC<ProductListProps> = ({ cart, setCart }) => {
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
    // Add more products as needed
  ];

  const handleAddToCart = (productId: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.productId === productId);

      if (existingItem) {
        // If the product is already in the cart, increase quantity
        return prevCart.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If the product is not in the cart, add with quantity 1
        return [...prevCart, { productId, quantity: 1 }];
      }
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Product List</h2>
      <ul style={styles.list}>
        {products.map((product) => (
          <li key={product.id} style={styles.listItem}>
            {product.name} - ${product.amount}
            <button
              onClick={() => handleAddToCart(product.id)}
              style={styles.button}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
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
    marginLeft: '10px',
  },
};

export default ProductList;