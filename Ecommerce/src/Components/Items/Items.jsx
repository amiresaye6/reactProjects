import React, { useState } from 'react';
import './Items.css';
import { useDispatch } from 'react-redux';
import { addToCartAction, increaseQuantityAction, removeFromCartAction, decreaseQuantityAction } from '../../redux/actions';

export const Items = (props) => {
    const dispatch = useDispatch();
    const [atCart, setAtCart] = useState(false);
    const [productCount, setProductCount] = useState(1);
    const [buttonContent, setButtonContent] = useState("Add to cart");

    const handleAddToCart = () => {
        if (!atCart) {
            dispatch(addToCartAction(props));
            setAtCart(true);
            setButtonContent("Added to cart");
        } else {
            console.log('already added');
        }
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCartAction(props));
        setAtCart(false);
        setButtonContent("Add to cart");
    };

    const handleIncreaseQuantity = () => {
        setProductCount(productCount + 1);
        dispatch(increaseQuantityAction(props.id));
    };

    const handleDecreaseQuantity = () => {
        if (productCount === 1) {
            handleRemoveFromCart();
        } else {
            setProductCount(productCount - 1);
            dispatch(decreaseQuantityAction(props.id));
        }
    };

    return (
        <div className='item'>
            <img src={props.image} alt='' />
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${props.old_price}
                </div>
                <div className="item-price-old">
                    ${props.new_price}
                </div>
            </div>
            {
                !props.cartLocation ? (
                    <button className='addToCart' onClick={handleAddToCart}>
                        {buttonContent}
                    </button>
                ) : (
                    <div className='edit'>
                        <button className='addToCart' onClick={handleRemoveFromCart}>
                            Remove
                        </button>
                        <div className='editCount'>
                            <button onClick={handleDecreaseQuantity}>-</button>
                            <h1>{productCount}</h1>
                            <button onClick={handleIncreaseQuantity}>+</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};
