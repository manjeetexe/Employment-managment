import React from 'react';
import Header from './../Other/Header';
import TaskListNumber from '../Other/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployDashboard = ({ handleLogout, userData }) => {
  return (
    <div className='p-5 xl:p-10 bg-[#1C1C1C] h-screen'>
      
      <Header handleLogout={handleLogout} userData={userData} />
      <TaskListNumber userData={userData} />
      <TaskList userData={userData} />
    </div>
  );
};

export default EmployDashboard;