import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  
  return <h1>Product Details for ID: {id}</h1>;
};

export default ProductDetail;