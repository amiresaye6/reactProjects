// import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ErrorComponent from "./components/ErrorComponent";
import ProductDetails from "./pages/ProductDetails";
import FilteredProductsPerCategory from "./components/FilteredProductsPerCategory";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="products/:productId" element={<ProductDetails />} />
        <Route
          path="products/category/:categoryName"
          element={<FilteredProductsPerCategory />}
        />
        <Route path="contact" element={<ContactUs />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </div>
  );
}

export default App;
