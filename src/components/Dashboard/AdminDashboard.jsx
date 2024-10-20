import React, { useState } from 'react';
import Header from '../Other/Header';
import CreateTask from '../Other/CreateTask';
import AllTask from '../Other/AllTask';

const AdminDashboard = ({ handleLogout, userData }) => {
  // Initialize employees from local storage or empty array if not present
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employees')) || []);

  // Function to add a new task
  const addTask = (newTask) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.name === newTask.assignTo) {
        return {
          ...employee,
          task: [...employee.task, newTask], // Add new task to the employee's task array
        };
      }
      return employee;
    });

    // Update state and local storage
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <div className='p-10 h-screen w-full'>
      {/* Pass handleLogout to the Header */}
      <Header handleLogout={handleLogout} userData={userData} />

      {/* Pass addTask function as a prop to CreateTask */}
      <CreateTask addTask={addTask} />

      {/* AllTask will display all tasks */}
      <AllTask employees={employees} />
    </div>
  );
};

export default AdminDashboard;