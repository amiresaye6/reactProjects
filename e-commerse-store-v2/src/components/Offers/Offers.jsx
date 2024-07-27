import './Offers.css';
import exclusiveImage from '../Assets/exclusive_image.png';
const Offers = () => {
    // const txt = 'ONLY ON BEST SELLERS PRODUCTS';
    return (
        <>
            <div className='offers'>
                <div className='offers_left'>
                    <h1>Exclusive</h1>
                    <h1>offers for you</h1>
                    {/* <p>{txt.(char => {
                        return setTimeout(() => {
                            <span>{char}</span>
                        }, 1000);
                    })}</p> */}
                    <p>ONLY ON BEST SELLERS PRODUCTS</p>
                    <button>Check now</button>
                </div>
                <div className='offers_right'>
                    <img src={exclusiveImage} alt="aaaaaa" />
                </div>
            </div>
        </>
    );
};

export default Offers;