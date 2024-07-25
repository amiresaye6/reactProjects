const Image1 = 'https://www.shutterstock.com/shutterstock/photos/2425212375/display_1500/stock-photo-bogor-indonesia-february-th-a-supermarket-aisle-with-shelves-of-merchandise-2425212375.jpg';
const Image2 = 'https://www.shutterstock.com/shutterstock/photos/2425212375/display_1500/stock-photo-bogor-indonesia-february-th-a-supermarket-aisle-with-shelves-of-merchandise-2425212375.jpg';
const Image3 = 'https://www.shutterstock.com/shutterstock/photos/2425212375/display_1500/stock-photo-bogor-indonesia-february-th-a-supermarket-aisle-with-shelves-of-merchandise-2425212375.jpg';

function Slider() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Image1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Image2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Image3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slider;