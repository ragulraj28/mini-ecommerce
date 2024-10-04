import React, { useState } from 'react';
import './Header.scss';
import { FiSearch } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ cartItems }) => {

  const[search, setSearch] = useState('');
  const navigate = useNavigate();

  const searchHandler = () => {
    navigate(`search?keyword=${search}`)
  }

  return (
    <header>
        <div className="container">
            <Link to={'/'}><div className="logo">miComm</div></Link>
            <div className="search">
                <input type="text" placeholder='Search Products' value={search} onBlur={searchHandler} onChange={(e) => setSearch(e.target.value)} />
                <button className='search-button' onClick={searchHandler}><FiSearch size={20}/></button>
            </div>
            <Link to={'/cart'}>
            <div className="cart">
                <FaCartShopping size={20}/>
                Cart
                <span className="count">{cartItems && cartItems.length}</span>
            </div>
            </Link>
        </div>
    </header>
  )
}

export default Header