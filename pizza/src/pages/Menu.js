import React from 'react';


import ProductsList from '../components/Products/ProductsList';
import { useSelector } from 'react-redux';
const Menu = () => {
	
	const products = useSelector(state => state.products)
	return (
		<div>
			<h1 style={{ textAlign: 'center', fontSize: '35px', color: '#e74c3c' }}>
				Our Menu
			</h1>
			<ProductsList products={products} />
		</div>
	);
};

export default Menu;
