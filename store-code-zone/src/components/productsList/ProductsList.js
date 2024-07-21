import Card from '../card/Card';
import ProductsData from '../../data/ProductsData'
import './productsList.css'
function ProductsList (props) {
    return (
        <div className="productsContaner">
            {ProductsData.map((product) => <Card product={product} key={product.id}/>)}
        </div>
    )
}

export default ProductsList;