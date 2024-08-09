import React from 'react';
import RecipeList from './../components/Recipes/RecipeList';
import { useSelector } from 'react-redux';


const RecipesPage = () => {
	const recipesData = useSelector(state => state.recipes)
	return (
		<div>
			<h1 style={{ textAlign: 'center', fontSize: '35px', color: '#e74c3c' }}>
				Our Recipes
			</h1>
			<RecipeList recipes={recipesData} />
		</div>
	);
};

export default RecipesPage;
