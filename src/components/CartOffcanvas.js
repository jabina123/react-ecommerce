import React from 'react';
import { Offcanvas } from 'react-bootstrap';

const CartOffcanvas = ({ show, handleClose, cart, removeFromCart }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map(item => (
          <div key={item.id} className="card p-2 mb-2">
            <img src={item.image} alt={item.title} style={{ height: "50px", objectFit: "contain" }} />
            <p className="mb-1">{item.title}</p>
            <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartOffcanvas;
