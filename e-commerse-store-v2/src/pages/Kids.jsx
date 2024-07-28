import NewCollection from "../components/NewCollection/NewCollection";
import allProducts from '../components/Assets/all_product';

const Shop = () => {
    return (
        <>
            <NewCollection title="Kids's Products" collections={allProducts.filter(product => product.category === 'kid')} />
        </>
    );
};

export default Shop;