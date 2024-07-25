import React from 'react';
import './Card.css'; // Ensure you create this CSS file
import { Link } from 'react-router-dom';

function Card(props) {
  const { product } = props;
  return (
    <div className="card h-100 d-flex flex-column justify-content-between">
      <div className="d-flex justify-content-center" style={{ height: '200px', overflow: 'hidden' }}>
        <img src={product.image} className="card-img-top" alt={product.title} style={{ maxHeight: '100%', objectFit: 'contain', paddingTop: '5px' }} />
      </div>
      <div className="card-body flex-grow-1 d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text description">{product.description}</p>
        <Link to={`/products/${product.id}`} className="btn btn-primary mt-auto">Details</Link>
      </div>
    </div>
  );
}

export default Card;
