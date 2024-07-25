import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FiltersButtons(props) {
  const { bId } = props;
  const [categories, setCategories] = useState([]);
  const backendUrl = "https://fakestoreapi.com/products";

  const getProductsCategories = () => {
    fetch(`${backendUrl}/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  useEffect(() => {
    getProductsCategories();
  }, []);
  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div key={bId} className="container p-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
            <Link
              key="all"
              to={`/`}
              type="button"
              className="btn btn-outline-primary"
            >
              All
            </Link>
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`products/category/${category}`}
              type="button"
              className="btn btn-outline-primary"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default FiltersButtons;
