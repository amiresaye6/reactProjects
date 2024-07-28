import './Items.css';

const Items = (props) => {
    // eslint-disable-next-line react/prop-types
    const { name, newPrice, oldprice, image } = props;
    return (
        <>
            <div className='items'>
                <img src={image} alt="not found" />
                <h2>{name}</h2>
                <div className='item_price'>
                    <div className='new_price'>{newPrice}</div>
                    <div className='old_price'>{oldprice}</div>
                </div>
            </div>
        </>
    );
};
export default Items;