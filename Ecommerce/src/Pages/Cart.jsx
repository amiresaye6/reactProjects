import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
// import { addToCartAction } from '../redux/actions'
import { Items } from '../Components/Items/Items'

function Cart() {
  // const dispatch = useDispatch()
  const data = useSelector(state => state.cart)
  const [cart, setCart] = React.useState(data)
  useEffect(() => {
    setCart(data)
  }, [data])
  return (
    <>
      <div className='cart'>
        {
          cart.map(item => {
           return  <Items key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          })
        }
      </div>
    </>
  )
}

export default Cart
