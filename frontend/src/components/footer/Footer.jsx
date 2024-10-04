import React from 'react';
import './Footer.scss';

const Footer = () => {

  const date = new Date().getFullYear();
  const name = 'Ragulraj'

  return (
    <footer>
        <div className="container">
            Copyright &#169;{date}
        </div>
    </footer>
  )
}

export default Footer