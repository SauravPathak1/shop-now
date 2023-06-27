// eslint-disable-next-line no-unused-vars
import React from 'react';
import Logo from '../logo/Logo';
import './navbar.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchBar from '../search/SearchBar';
import UserProfile from '../userprofile/UserProfile';

const Navbar = () => {
  return (
    <div className='navbar px-3 py-1'>
      <Logo className="ms-2"/>
      <SearchBar/>
      <div className='d-flex'>
        <UserProfile/>
        <ShoppingCartOutlinedIcon fontSize='large' className='me-2 ms-2'/>
      </div>
    </div>
  );
};

export default Navbar;
