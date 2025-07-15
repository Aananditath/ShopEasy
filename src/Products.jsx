import React, { useState, useContext } from 'react';  
import { useLocation } from 'react-router-dom';
import './Products.css';
import { CartContext } from './CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="enhanced-product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} />
        <div className="product-badge">{product.category}</div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="price-rating">
          <span className="price">{product.price.toFixed(2)}</span>
          <div className="rating">★★★★☆</div>
        </div>
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

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const allProducts = [
    {
      id: 1,
      name: "Premium Wireless Earbuds",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop",
      category: "Electronics",
      rating: 4
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop",
      category: "Electronics",
      rating: 5
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop",
      category: "Clothing",
      rating: 4
    },
    {
      id: 4,
      name: "Modern Home Lamp",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop",
      category: "Home",
      rating: 3
    },
    {
      id: 5,
      name: "Bestseller Book Pack",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop",
      category: "Books",
      rating: 5
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="products-page-enhanced">
      <div className="category-filters-enhanced">
        <button 
          onClick={() => setSelectedCategory('all')}
          className={selectedCategory === 'all' ? 'active' : ''}
        >
          All Products
        </button>
        {['Electronics', 'Clothing', 'Home', 'Books'].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="products-grid-enhanced">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;