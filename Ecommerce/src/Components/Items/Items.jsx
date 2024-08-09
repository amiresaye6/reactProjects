import React from 'react'
import './Items.css'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../redux/actions'

export const Items = (props) => {
    const diapatch = useDispatch()
  return (
      <div className='item'>
          <img src={props.image} alt='' />
          <p>{props.name}</p>
          <div className="item-prices">
              <div className="item-price-new">
                  ${props.new_price}
              </div>
               <div className="item-price-old">
                  ${props.old_price}
              </div>
              <button className='addToCart' onClick={() => diapatch(addToCartAction(props))}>Add to Cart</button>
          </div>
    </div>
  )
}
