import NewCollection from "../components/NewCollection/NewCollection";
import allProducts from '../components/Assets/all_product';

const Shop = () => {
    return (
        <>
            <NewCollection title="All products" collections={allProducts} />
        </>
    );
};

export default Shop;