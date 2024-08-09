import React from 'react';

import ProductsList from './../components/Products/ProductsList';
import { useSelector } from 'react-redux';


const Cart = () => {

	const cartData = useSelector(state => state.cart) 
	const cartTotalData = useSelector(state => state.cartTotal) 
	return (
		<div>
			<h1 style={{ textAlign: 'center', fontSize: '35px', color: '#e74c3c' }}>
				Cart
			</h1>
			<h4
				style={{
					textAlign: 'center',
					fontSize: '25px',
					color: '#60a5fa',
					margin: 0,
				}}
			>
				{' '}
				total: {cartTotalData}
			</h4>
			<ProductsList products={cartData} />
		</div>
	);
};

export default Cart;
