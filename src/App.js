import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartOffcanvas from './components/CartOffcanvas';
import ProductDetails from './components/ProductDetails'; // Import the new component
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Navbar cart={cart} toggleCart={() => setShowCart(true)} />
      <div className="container mt-4">
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="row">
                {products.map(product => (
                  <div className="col-md-4 mb-4" key={product.id}>
                    <ProductCard 
                      product={product} 
                      cart={cart} 
                      addToCart={addToCart} 
                      removeFromCart={removeFromCart} 
                    />
                  </div>
                ))}
              </div>
            } 
          />
          {/* Updated Route for ProductDetails */}
          <Route 
            path="/product/:id" 
            element={<ProductDetails addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />} 
          />
        </Routes>
      </div>
      <CartOffcanvas 
        show={showCart} 
        handleClose={() => setShowCart(false)} 
        cart={cart} 
        removeFromCart={removeFromCart} 
      />
    </Router>
  );
};

export default App;
