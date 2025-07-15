import React from 'react';
import './Home.css';
import ProductCard from './ProductCard';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 599,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 1900,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      category: "Electronics"
    },
    {
      id: 3,
      name: "Cotton T-Shirt",
      price: 199,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      category: "Clothing"
    },
    {
      id: 4,
      name: "Denim Jeans",
      price: 499,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a",
      category: "Clothing"
    },
    {
      id: 5,
      name: "Running Shoes",
      price: 899,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      category: "Footwear"
    },
    {
      id: 6,
      name: "Backpack",
      price: 399,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      category: "Accessories"
    },
    {
      id: 7,
      name: "Sunglasses",
      price: 299,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
      category: "Accessories"
    }
  ];

  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to ShopEasy</h1>
        <p>Your one-stop shop for everything</p>
      </header>

       <section id="featured-products" className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-scroll">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;