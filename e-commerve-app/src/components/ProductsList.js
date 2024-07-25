import { useEffect, useState } from "react";
import Card from "./Card";
import LottieAnimation1 from "../animations/LottieAnimation1";

function ProductsList() {
  const backendUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch(backendUrl)
      .then(response => response.json())
      .then(data => setProducts(data))
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="container">
        {products.length === 0 ? (
          <LottieAnimation1 />
        ) : (
          <div className="row">
            {products.map(product => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
                <Card product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default ProductsList;
