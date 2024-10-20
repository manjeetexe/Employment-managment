import React, { useEffect, useState } from 'react';
import Header from './../Other/Header';
import TaskListNumber from '../Other/TaskListNumber';
import TaskList from '../TaskList/TaskList';


const EmployDashboard = ({ handleLogout, userData }) => {
  const [employees, setEmployees] = useState([]);

  // Load employee data from local storage on mount
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(data);
  }, []);

  // Function to add a new task and update state
  const addTask = (newTask) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.name === newTask.assignTo) {
        return {
          ...employee,
          task: [...employee.task, newTask],
        };
      }
      return employee;
    });

    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <div className='p-5 xl:p-10 bg-[#1C1C1C] h-screen'>
      <Header handleLogout={handleLogout} userData={userData} />
      <TaskListNumber userData={userData} />
      <TaskList userData={employees.find(emp => emp.name === userData.name)} />
      
    </div>
  );
};

export default EmployDashboard;