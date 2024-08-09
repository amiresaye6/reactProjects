import React from 'react';
import RecipeList from '../components/Recipes/RecipeList';
import { useSelector } from 'react-redux';

const Wishlist = () => {
	
      const wishlist = useSelector(state=> state.wishlist)
	return (
		<div>
			<h1 style={{ textAlign: 'center', fontSize: '35px', color: '#e74c3c' }}>
				Our Wishlist
			</h1>
			<RecipeList recipes={wishlist}/>
		</div>
	);
};

export default Wishlist;
