/* eslint-disable react/prop-types */
import Items from "../Items/Items";
import './NewCollection.css';
const NewCollection = (props) => {
  return (
    <div className='Collection'>
      <h1>{props.title}</h1>
      <div className='Collection_items'>
      {
        props.collections.map((item) => {
          return (
            <Items key={item.id} name={item.name} newPrice={item.new_price} oldprice={item.old_price} image={item.image} />
          );
        })
      }
      </div>
    </div>
  );
};
export default NewCollection;