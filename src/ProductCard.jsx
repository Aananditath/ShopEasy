import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext); // Add this

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">{product.price.toFixed(2)}</p>
        <button 
          className="add-to-cart-btn"
          onClick={() => addToCart(product)} 
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;