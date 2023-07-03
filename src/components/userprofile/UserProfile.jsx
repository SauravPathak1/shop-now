import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PropTypes from 'prop-types';
import './userprofile.css';
import { Divider } from '@mui/material';

const UserProfile = () => {
  return (
    <div className='profile-dropdown'>
      <button className="dropbtn">
        <PersonOutlineOutlinedIcon fontSize='large'/>
      </button>
      <div className="dropdown-content">
        <a href="/shop-now/login">Login / Sign In</a>
        <Divider sx={{ my: 0.5, bgcolor: 'black' }} />
        <a href="/shop-now/orders">Your Orders</a>
        <a href="/shop-now/profile">Profile</a>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  className: PropTypes.string
};

export default UserProfile;