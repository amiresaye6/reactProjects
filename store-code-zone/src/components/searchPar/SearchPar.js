import React, { useState } from 'react';
import './SearchPar.css';
import ProductsData from '../../data/ProductsData';

const SearchPar = (props) => {
    const [results, setResults] = useState([]);

    const inputSearchHelper = (valueSearched) => {
        if (valueSearched.length > 0) {
            let result = ProductsData.filter(product => 
                product.title.toLowerCase().includes(valueSearched)
            );
            setResults(result);
        } else {
            setResults([]);
        }
    };

    return (
        <div className="search-par">
            <input 
                type="search" 
                placeholder="Search..." 
                onInput={e => inputSearchHelper(e.target.value.toLowerCase())}
            />
            <div className="search-results">
                {results.map((product, index) => (
                    <div key={product.id} className="search-result-item">
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchPar;
