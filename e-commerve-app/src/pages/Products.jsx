// src/Products.js
import React from 'react';
import { Link } from 'react-router-dom';
import PRODUCTS from '../data.js';

const Products = () => {
  return (
    <main>
      <div className="pg-header bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4">Products</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container content my-5">
        <div className="row products-row">
          {PRODUCTS.map((product) => (
            <div className="col-lg-4 mb-4" key={product.id}>
              <div className="card h-100">
                <div className="img-wrap">
                  <img src={product.image} alt={product.name} className="card-img-top" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.details}</p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <span>Price: <strong className="price">{product.price}</strong></span>
                  <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
