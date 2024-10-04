import React from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { MdOutlineStar } from "react-icons/md";

const ProductCard = ({_id,images,name,ratings,price}) => {
    
  return (
    <div className="product-card">
        <figure>
          <img src={images[0].image} alt={name} />
        </figure>
        <Link className="title" to={`/product/${_id}`}>
          <h4>{name}</h4>
        </Link>
        <div className="ratings"><MdOutlineStar className='text-primary' size={24} />{ratings} ratings</div>
        <p className="price">${price}</p>
        <Link to={`/product/${_id}`}>
          <button className="view-details">View Details</button>
        </Link>
    </div>
  )
}

export default ProductCard