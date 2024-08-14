import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Items } from '../Components/Items/Items';
import './Cart.css';

function Cart() {
    const data = useSelector(state => state.cart);
    const redxTotal = useSelector(state => state.cartTotal);
    const [total, setTotal] = useState(redxTotal);

    useEffect(() => {
        setTotal(redxTotal);
    }, [redxTotal]);

    return (
        <div className='container'>
            <h1>Total: ${total.toFixed(2)}</h1>
            <div className="collections">
                {
                    data.map(item => (
                        <Items
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                            cartLocation={true}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Cart;
