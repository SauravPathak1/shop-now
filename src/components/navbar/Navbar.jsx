// eslint-disable-next-line no-unused-vars
import React from 'react';
import Logo from '../logo/Logo';
import './navbar.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Profile from '../profile/Profile';

const Navbar = () => {
  return (
    <div className='navbar' style={{'backgroundColor':'green'}}>
      <Logo className="ms-2"/>
      <Profile/>
      <ShoppingCartOutlinedIcon fontSize='large' className='me-2'/>
    </div>
  );
};

export default Navbar;
