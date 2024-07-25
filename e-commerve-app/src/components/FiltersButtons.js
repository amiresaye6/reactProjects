import { Link } from "react-router-dom";

function FiltersButtons(props) {
    const { categoriesList, bId } = props;
    return (
        <>
            <h2 className="text-center p-3">Our Products</h2>
            <div key={bId} className="container p-3">
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    {
                        categoriesList.map((category, index) => (
                          <Link key={index} to={`products/category/${category}`} type="button" className="btn btn-outline-primary">
                            {category}
                          </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default FiltersButtons;
