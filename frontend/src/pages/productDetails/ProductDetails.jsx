import React, { useState, useEffect } from 'react';
import './ProductDetails.scss';
import { useParams } from 'react-router-dom';
import api from '../../api/axios';

const ProductDetails = ({ cartItems, setCartItems }) => {

  const[product, setProduct] = useState(null);
  const[qty, setQty] = useState(1);
  const{ id } = useParams();

  useEffect(() => {

    const fetchApi = async () => {

      try {

        const response = await api.get(`product/${id}`);
        setProduct(response.data.product)

      } catch(err) {

        console.log(err.message);
        
      }

    }
    
    fetchApi();

  },[id])

  const qtyIncrement = () => {

   qty < product.stock && setQty( prev => prev + 1 )

  }

  const qtyDecrement = () => {

    qty > 1 && setQty( prev => prev - 1 )

  }

  const addToCart = (product) => {

    const itemExists = cartItems.find(item => item.product._id === product._id)   
    
    !itemExists && setCartItems((prev) => [ ...prev, {product, qty}]);

  }

  return (
    <main className='product-details'>

      {

        product && <>

          <figure>
            <img src={product.images[0].image} alt={product.name} />
          </figure>

          <div className="details">
            <h2 className='name'>{product.name}</h2>
            <span className="product-id">Product # {product._id}</span>
            <hr />
            <div className="ratings">Ratings: <span>{product.ratings} out of 5</span></div>
            <hr />
            <p className="price">${product.price}</p>
            <div className="cart-cta">
              <div className="qty">
                <button className='decrement' onClick={qtyDecrement}>-</button>
                <input type="text" value={qty} readOnly/>
                <button className='increment' onClick={qtyIncrement}>+</button>
              </div>
              <button className='cta' onClick={() => addToCart(product)} disabled={Number(product.stock) === 0} >Add to cart</button>
            </div>
            <hr />
            <div className="stock">
              Status: <span className={product.stock > 0 ? "instock" : ''}>{product.stock > 0 ? 'In stock' : 'Out of stock'}</span>
            </div>
            <hr />
            <div className="desc">
              <h4>Description:</h4>
              <p>{product.description}</p>
            </div>
            <hr />
            <div className="seller">
              Sold by: <strong>{product.seller}</strong>
            </div>
          </div>

      </>

      }
      
    </main>
  )
}

export default ProductDetails