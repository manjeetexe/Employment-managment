import React from 'react';
import Header from '../Other/Header';
import CreateTask from '../Other/CreateTask';
import AllTask from '../Other/AllTask';


const AdminDashboard = ({ handleLogout , userData }) => {
  return (
    <div className='p-10 h-screen w-full'>
      {/* Pass handleLogout to the Header */}
      <Header handleLogout={handleLogout} userData={userData} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;