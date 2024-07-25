// import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider";
import About from "./components/About";
import ErrorComponent from "./components/ErrorComponent";
import ProductDetails from "./components/ProductDetails";
import FilteredProductsPerCategory from "./components/FilteredProductsPerCategory";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path="/" element={
					<>
						<Slider />
						<ProductsList />
					</>
				} />
				<Route path="/about" element={<About />} />
				<Route path="products/:productId" element={<ProductDetails />} />
				<Route path="products/category/:categoryName" element={<FilteredProductsPerCategory />} />
				<Route path="*" element={<ErrorComponent />} />
			</Routes>
		</div>
	);
}

export default App;
