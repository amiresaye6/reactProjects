import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LottieAnimation1 from "../animations/LottieAnimation1";
import Card from "./Card";

function FilteredProductsPerCategory() {
  const { categoryName } = useParams();
  const [filteredCategory, setFilteredCategory] = useState([]);
  const backendUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(`${backendUrl}/category/${categoryName}`)
      .then(response => response.json())
      .then(products => setFilteredCategory(products));
  }, [categoryName]);

  return (
    <>
      <div className="container">
        {filteredCategory.length === 0 ? (
          <LottieAnimation1 />
        ) : (
          <div className="row">
            {filteredCategory.map(product => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
                <Card product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default FilteredProductsPerCategory;
