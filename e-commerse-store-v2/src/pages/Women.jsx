import NewCollection from "../components/NewCollection/NewCollection";
import allProducts from '../components/Assets/all_product';

const Shop = () => {
    return (
        <>
            <NewCollection title="Women's Products" collections={allProducts.filter(product => product.category === 'women')} />
        </>
    );
};

export default Shop;