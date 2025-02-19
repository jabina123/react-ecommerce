import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cart, toggleCart }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Use Link instead of <a href="/"> */}
        <Link className="navbar-brand" to="/">Home</Link>

        <button className="btn btn-primary" onClick={toggleCart}>
          Cart ({cart.length})
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
