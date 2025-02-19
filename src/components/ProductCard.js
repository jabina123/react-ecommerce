import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, cart, addToCart, removeFromCart }) => {
  const navigate = useNavigate();
  const inCart = cart.some(item => item.id === product.id);
  
  const truncatedTitle = product.title.slice(0, 25) + (product.title.length > 25 ? "..." : "");
  const truncatedDescription = product.description.slice(0, 55) + (product.description.length > 55 ? "..." : "");

  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{truncatedTitle}</h5>
        <p className="card-text">{truncatedDescription}</p>
        <button className="btn btn-primary me-2" onClick={() => navigate(`/product/${product.id}`)}>
          View Product
        </button>
        {inCart ? (
          <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>
            Remove from Cart
          </button>
        ) : (
          <button className="btn btn-success" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
