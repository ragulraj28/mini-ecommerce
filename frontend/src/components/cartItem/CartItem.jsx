import React from 'react';
import './CartItem.scss';
import { Link } from 'react-router-dom';

const CartItem = ({product, qty, qtyIncrement, qtyDecrement, deleteHandler}) => {       

  return (

    <div className='cartitem-card'>
        <figure>
            <img src={product.images[0].image} alt={product.name} />
        </figure>
        <h4 className="name"><Link to={`/product/${product._id}`}>{product.name.length > 30 ? product.name.substring(0,30) + '...' : product.name}</Link></h4>
        <p className="price">${product.price} </p>
        <div className="qty">
            <button className='decrement' onClick={() => qtyDecrement(product)} >-</button>
            <input type="text" value={qty} readOnly/>
            <button className='increment' onClick={() => qtyIncrement(product)} >+</button>
        </div>
        <button className="delete" onClick={() => deleteHandler(product) }>
            Remove
        </button>
    </div>

  )

}

export default CartItem