import NewCollection from "../components/NewCollection/NewCollection";
import allProducts from '../components/Assets/all_product';

const Shop = () => {
    return (
        <>
            <NewCollection title="Men's Products" collections={allProducts.filter(product => product.category === 'men')} />
        </>
    );
};

export default Shop;