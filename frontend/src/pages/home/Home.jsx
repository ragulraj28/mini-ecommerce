import React, { useState, useEffect } from 'react';
import './Home.scss';
import ProductCard from '../../components/productCard/ProductCard';
import { useSearchParams } from 'react-router-dom';
import api from '../../api/axios';

const Home = ( ) => {

  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);

  useEffect(()=>{

    const fetchApi = async () => {
      
      try {

        const response = await api.get('products?'+searchParams);
        setProducts(response.data.products)

      } catch(err) {

        console.log(err.message);

      }

    }

    fetchApi();

  },[searchParams])
  
  return (
    <main className="home-page">
      <h1>Latest products</h1>
      <div className="product-container">
        {
          products && products.map( product => <ProductCard key={product._id} {...product} />)
        }
      </div>
    </main>
  )

}

export default Home