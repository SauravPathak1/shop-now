// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../assets/logo_updated.png';
import './logo.css';

const Logo = () => {
  return (
    <a href='/' className='navbar-brand'>
      <img src={logo} className='brand-image' alt='shop-now logo'/>
    </a>
  );
};

export default Logo;