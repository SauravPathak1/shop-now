// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../assets/toshi.png';
import './logo.css';

const Logo = () => {
  return (
    <a href='/shop-now' className='navbar-brand'>
      <img src={logo} className='brand-image' alt='shop-now logo'/>
    </a>
  );
};

export default Logo;
