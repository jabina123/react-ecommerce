import React from 'react';

const Navbar = ({ cart, toggleCart }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <a className="navbar-brand fw-bold" href="#">Fake Store</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#">About</a></li>
        </ul>
      </div>
      <button className="btn btn-primary position-relative" onClick={toggleCart}>
         Cart 
        {cart.length > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cart.length}
          </span>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
