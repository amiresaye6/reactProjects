import new_collections from '../Assets/new_collections';
import Items from "../Items/Items";
import './NewCollection.css';
const NewCollection = () => {
  return (
    <div className='newCollection'>
      <h1>New Collection</h1>
      <div className='newCollection_items'>
      {
        new_collections.map((item) => {
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