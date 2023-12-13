## Shopping Cart App
This project is a simple React.js application for managing shopping cart items. Users can view a list of products, add them to the shopping cart, adjust quantities, remove items, and view the total amount. The application also supports a coupon discount feature for a 10% discount upon checkout.

## Features
Display a list of at least 10 products with names and amounts.
Add products to the shopping cart.
Adjust the quantity of items in the cart.
Remove items from the cart.
View the total amount of the products.
Apply a discount using the coupon code (WEB3BRIDGECOHORTx) for a 10% discount.
Persist the shopping cart data upon page refresh.
Technologies Used
React.js
TypeScript
HTML
CSS
Project Structure
src/components: Contains React components.

### ProductList.tsx: Displays the list of products.
### ShoppingCart.tsx: Manages the shopping cart, including adding, removing, and updating quantities.
### src/interfaces: Contains TypeScript interfaces for Product and CartItem.

### src/App.tsx: Main application component combining the product list and shopping cart components.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

npm run build
Builds the app for production to the build folder.

How to Use
Clone the repository:

bash
Copy code
### git clone https://github.com/Favourkass/shoppingCartWeb3.git
Navigate to the project directory:

bash
Copy code
cd shopping-cart

### Install dependencies:
bash
Copy code
npm install
Run the app:

bash
Copy code
npm start
Open http://localhost:3000 in your browser.

Usage Instructions
Product List:

### Browse the list of products.
Click "Add to Cart" to add a product to the shopping cart.

### Shopping Cart:
View and adjust the quantity of items in the cart.
Click "Remove from Cart" to remove an item from the cart.
Enter the coupon code (WEB3BRIDGECOHORTx) for a 10% discount.
View the subtotal, discount applied, and the total amount.

### Persist Data:
Shopping cart data is saved locally and persists upon page refresh.

### Mobile Responsive:
The application is designed to be mobile-responsive for a seamless experience on various devices.

### Note
For development purposes, you can explore the code in the src directory.
This project does not include the testing process in the README. Testing configurations can be added separately based on your preferences and requirements.