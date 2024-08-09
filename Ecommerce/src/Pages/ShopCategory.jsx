
import './ShopCategory.css'

import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import all_product from '../Components/Assets/all_product';
import { Items } from '../Components/Items/Items';

const ShopCategory = (props) => {
  let target = all_product.filter(
    (item) => item.category === props.category
  );
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt='' />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className="shopcategory-products">
        {target.map((item, i) => {
          return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default ShopCategory;
