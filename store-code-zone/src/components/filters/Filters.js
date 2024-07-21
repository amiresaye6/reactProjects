import React from 'react';
import './Filters.css';

const Filters = (props) => {
    return (
        <div className="filters">
            <select name="filter-selector" id="filter-selector">
                <option value="men's clothing">Men's Clothing</option>
                <option value="jewelery">Jewelry</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's Clothing</option>
            </select>
        </div>
    );
}

export default Filters;
