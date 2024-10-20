import React, { useContext } from 'react';
import { AuthContext } from './../../context/AuthProvider';

const AllTask = () => {
    const authData = useContext(AuthContext);

    // Ensure authData and employees are available before mapping
    if (!authData || !authData.employees) {
        return <p>Loading...</p>;  // Show a loading message if data is not available
    }

    return (
        <div className='bg-[#1C1C1C] p-5 rounded mt-5'>
            <div className='bg-emerald-100 border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-black text-lg font-bold'>Employee Name</h2>
                <h3 className='text-blue-600 text-lg font-bold'>New Task</h3>
                <h3 className='text-yellow-600 text-lg font-bold'>Active Task</h3>
                <h3 className='text-green-600 text-lg font-bold'>Completed</h3>
                <h3 className='text-red-800 text-lg font-bold'>Failed</h3>
            </div>

            {/* Map through each employee and display their tasks */}
            {authData.employees.map((employee, index) => (
                <div key={index} className='bg-transparent border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                    <h2 className='text-white text-lg'>{employee.name}</h2>
                    <h3 className='text-blue-600 text-lg'>{employee.newTask}</h3>
                    <h3 className='text-yellow-600 text-lg'>{employee.acceptTasks}</h3>
                    <h3 className='text-green-600 text-lg'>{employee.completedTasks}</h3>
                    <h3 className='text-red-800 text-lg'>{employee.failedTasks}</h3>
                </div>
            ))}
        </div>
    );
};

export default AllTask;