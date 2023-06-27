import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PropTypes from 'prop-types';
import { useState } from 'react';

const UserProfile = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(true);
  const handleProfileButtonClick= () =>{
    setProfileDropdownOpen(false);
  };
  return (
    <div className='ms-2 me-2'>
      <button onClick={handleProfileButtonClick}>
        <PersonOutlineOutlinedIcon fontSize='large'/>
        {
          profileDropdownOpen && (
            <div>
                hererer
            </div>
          )}
      </button>
    </div>
  );
};

UserProfile.propTypes = {
  className: PropTypes.string
};

export default UserProfile;