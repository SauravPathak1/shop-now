// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div className='large'>
      <Input variant="outlined" className='bg-white rounded ps-2 border border-dark'
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon className=''/>
          </InputAdornment>
        }
      />
    </div>
  );
};

export default SearchBar;