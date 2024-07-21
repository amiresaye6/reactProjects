import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Posts from './pages/Posts.jsx';
import Products from './pages/Products.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import Error from './pages/Error.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route element={ <Home /> } path='/'></Route>
				<Route element={ <About /> } path='/about'></Route>
				<Route element={ <Posts /> } path='/posts'></Route>
				<Route element={ <Products /> } path='/products'></Route>
				<Route element={ <SingleProduct /> } path='/products/:productid'></Route>
				<Route element={ <Error /> } path='*'></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
