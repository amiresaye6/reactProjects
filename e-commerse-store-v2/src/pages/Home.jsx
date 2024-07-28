import NewCollection from "../components/NewCollection/NewCollection";
import newCollections from '../components/Assets/new_collections';
import Offers from "../components/Offers/Offers";

const Shop = () => {
    return (
        <>
            <Offers />
            <NewCollection title="New Collection" collections={newCollections} />
        </>
    );
};

export default Shop;