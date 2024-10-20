import React, { useState } from 'react';

const CreateTask = () => {
  const [task, setTask] = useState({
    description: '',
    title: '',
    active: false,
    failed: false,
    complete: false,
    new: true,
    date: '',
    category: '',
    assignTo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for the employee in local storage
    const data = JSON.parse(localStorage.getItem('employees')) || []; // Ensure we have an array
    const assignedEmployee = data.find((elm) => elm.name === task.assignTo);
    
    if (assignedEmployee) {
      // Push the new task object into the existing tasks array of the assigned employee
      assignedEmployee.task.push({
        description: task.description,
        title: task.title,
        active: task.active,
        failed: task.failed,
        complete: task.complete,
        new: task.new,
        date: task.date,
        category: task.category,
      });
      
      // Update the employees array in local storage
      const updatedData = data.map((elm) => 
        elm.name === assignedEmployee.name ? assignedEmployee : elm
      );
      localStorage.setItem('employees', JSON.stringify(updatedData));
    } else {
      console.log('Employee not found');
    }

    // Reset the task input fields
    setTask({
      description: '',
      title: '',
      active: false,
      failed: false,
      complete: false,
      new: true,
      date: '',
      category: '',
      assignTo: '',
    });
  };

  return (
    <div className='p-5 mt-7 rounded-xl bg-[#1C1C1C]'>
      <form className='flex w-full items-start justify-between' onSubmit={handleSubmit}>
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input
              name='title'
              value={task.title}
              onChange={handleChange}
              className='text-sm text-gray-300 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 border-gray-400'
              type='text'
              placeholder='Make a task'
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
              name='date'
              value={task.date}
              onChange={handleChange}
              className='text-sm text-gray-300 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 border-gray-400'
              type='date'
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input
              name='assignTo'
              value={task.assignTo}
              onChange={handleChange}
              className='text-sm text-gray-300 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 border-gray-400'
              type='text'
              placeholder='Employee Name'
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input
              name='category'
              value={task.category}
              onChange={handleChange}
              className='text-sm text-gray-300 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 border-gray-400'
              type='text'
              placeholder='design, dev, etc.'
            />
          </div>
        </div>

        <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea
            name='description'
            value={task.description}
            onChange={handleChange}
            className='text-sm text-gray-300 py-1 h-44 px-2 w-full rounded outline-none bg-transparent border-[1px] mb-4 border-gray-400'
          ></textarea>
          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;