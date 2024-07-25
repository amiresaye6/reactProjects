const Image1 = 'https://www.shutterstock.com/shutterstock/photos/2425212375/display_1500/stock-photo-bogor-indonesia-february-th-a-supermarket-aisle-with-shelves-of-merchandise-2425212375.jpg';
const Image2 = 'https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148856901.jpg?t=st=1721939841~exp=1721943441~hmac=c856d8826b7d103768be3ca13f5c45e28a77c9a96a2d6c73efda38b6d564d472&w=996';
const Image3 = 'https://img.freepik.com/free-vector/franchise-business-cityscape-composition_1284-74386.jpg?t=st=1721939806~exp=1721943406~hmac=336ca71d4d190ead7fbdf284045da78d608607a94456c4256ee8185a1bdadc1e&w=1060';

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
                        <img src={Image1} className="d-block w-100" alt="not found" style={{ height: "90vh", width: "auto"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={Image2} className="d-block w-100" alt="not found" style={{ height: "90vh", width: "auto"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={Image3} className="d-block w-100" alt="not found" style={{ height: "90vh", width: "auto"}} />
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