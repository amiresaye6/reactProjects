import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LottieAnimation1 from "../animations/LottieAnimation1";
import Card from "./Card";
import FiltersButtons from "./FiltersButtons";

function FilteredProductsPerCategory() {
  const { categoryName } = useParams();
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const backendUrl = "https://fakestoreapi.com/products";

  const getProducts = () => {
    fetch(`${backendUrl}/category/${categoryName}`)
      .then(response => response.json())
      .then(products => setFilteredCategory(products));
  }

  const getProductsCategories = () => {
    fetch(`${backendUrl}/categories`)
      .then(response => response.json())
      .then(data => setCategories(data))
  }

  useEffect(() => {
    getProducts();
    getProductsCategories();
  }, []);

  return (
    <>
      <FiltersButtons categoriesList={categories} bId="f" />
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
