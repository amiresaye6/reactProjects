import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImStopwatch } from 'react-icons/im';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import styles from './recipes.module.scss';
import { addToWishlistAction , removeFromWishlistAction} from '../../redux/actions';

const RecipeCard = ({ recipe }) => {
	const dispatch = useDispatch()
	
	const addToWishlist = () => {
		dispatch(addToWishlistAction(recipe))
	}
		const removeWishlist = () => {
		dispatch(removeFromWishlistAction(recipe))
	}
	
   const isWishListed = useSelector(state=> state.wishlist.findIndex((rec) => rec.title === recipe.title) >= 0)
	return (
		<div className={styles['recipe-card']}>
			{isWishListed ? (
				<button className={styles['wishlist-btn']} onClick={removeWishlist}>
					<BsHeartFill />
				</button>
			) : (
				<button className={styles['wishlist-btn']} onClick={addToWishlist}>
					<BsHeart />
				</button>
			)}

			<img src={recipe.image} alt={recipe.title} />
			<div className={styles['recipe-details']}>
				<h6>{recipe.category}</h6>
				<h2>{recipe.title}</h2>
				{recipe.duration && (
					<div className={styles['recipe-footer']}>
				
						<ImStopwatch />
						<span>{recipe.duration}</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default RecipeCard;
