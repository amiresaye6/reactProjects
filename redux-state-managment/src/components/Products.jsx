import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, fetchProducts } from '../store/actions/products_actions';

function Products() {
  const data = useSelector(store => store.products);
  console.log(data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, []);
  return (
    <div>
      <h1>All Producst</h1>
      <button onClick={() => dispatch(addProduct({id: 2, title: 'p 2'}))}>Add Product</button>
      {
        data.map(product => <h1 key={product.id}>{product.title}</h1>)
      }
    </div>
  )
}

export default Products;
