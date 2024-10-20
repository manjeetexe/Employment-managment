import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../context/AuthProvider';

const Header = ({ handleLogout, userData}) => {
  const authData = useContext(AuthContext);
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    
    const storedAdmin = JSON.parse(localStorage.getItem('admin'));
    setAdminData(storedAdmin);
  }, []);

  return (
    <div className='flex justify-between items-end text-white'>
      <h1 className='text-xl sm:text-2xl lg:text-3xl'>
        Hello <br />
        <span className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>
          {adminData ? userData.name : 'User'} 👋 
        </span>
      </h1>
      <button
        onClick={handleLogout}
        className='bg-red-500 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-sm text-base sm:text-lg lg:text-xl font-medium'
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;