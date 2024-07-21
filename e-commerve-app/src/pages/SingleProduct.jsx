import { Link, useParams } from 'react-router-dom';
import PRODUCTS from '../data.js';

const SingleProduct = () => {
  const { productid } = useParams();
  const product = PRODUCTS.find(p => p.id === parseInt(productid));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Product Details</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col-lg-5">
            <img src={product.image} alt={product.name} className="img-fluid" />
          </div>
          <div className="col-lg-7">
            <h2>{product.name}</h2>
            <p className="price"><strong>{product.price}</strong></p>
            <p>{product.details}</p>
            <br />
            {/* Add any additional details or actions here */}
            <Link to="/products" className="btn btn-secondary">Back to Products</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
