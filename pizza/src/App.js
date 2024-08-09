import './App.css';
import Header from './components/Navigation/Header';
import { Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import RecipesPage from './pages/Recipes'
import Wishlist from './pages/Wishlist'


function App() {
	return (
		<div>
			 
				<Header />
				<Routes>
					<Route element={<Cart />} path="/cart" exact />
				<Route element={<Menu />} path="/" exact />
				<Route element={<RecipesPage />} path="/recipes" exact />
					<Route element={<Wishlist />} path="/wishlist" exact />
        </Routes>
   
			
		</div>
	);
}

export default App;
