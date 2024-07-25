import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();
  const productUrl = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${productUrl}/${productId}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={product.image} className="card-img" alt={product.title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">
                <strong>Price:</strong> ${product.price}
              </p>
              <p className="card-text">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="card-text">
                <strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)
              </p>
              <Link to="/" className="btn btn-primary">Back to Products</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
