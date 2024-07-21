import PRODUCTS from '../data.js'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <main>
      
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Products</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container content">
        <div className="row products-row">
          {
            PRODUCTS.map( product => {
              return (
                <div className='col-lg-4' key={Products.id}>
                  <div className='card'>
                  <div className='img-wrap'>
                    <img src={ product.image} alt='n'/>
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'>{product.name}</h5>
                    <p className='card-title'>{product.details}</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <span>Price:<strong className='price'>{product.price}</strong></span>
                    <Link to={`/products/${product.id}`} className='btn btn-primary btn-sm'>Details</Link>
                  </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

    </main>
  )
}

export default Products