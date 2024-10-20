import React from 'react'

const TaskListNumber = ({ userData }) => {

    

  return (
    <>
       <div className='flex flex-wrap justify-between gap-5 mt-10'>
    <div className='px-6 py-4 w-[calc(50%-0.625rem)] sm:w-[calc(50%-0.625rem)] md:w-[30%] lg:w-[23%] bg-red-400 rounded-xl'>
        <h2 className='text-2xl sm:text-3xl font-semibold'>{userData.newTask}</h2>
        <h3 className='text-lg sm:text-xl font-medium'>New Task</h3>
    </div>

    <div className='px-6 py-4 w-[calc(50%-0.625rem)] sm:w-[calc(50%-0.625rem)] md:w-[30%] lg:w-[23%] bg-blue-400 rounded-xl'>
        <h2 className='text-2xl sm:text-3xl font-semibold'>{userData.completedTasks}</h2>
        <h3 className='text-lg sm:text-xl font-medium'>Complete Task</h3>
    </div>

    <div className='px-6 py-4 w-[calc(50%-0.625rem)] sm:w-[calc(50%-0.625rem)] md:w-[30%] lg:w-[23%] bg-green-400 rounded-xl'>
        <h2 className='text-2xl sm:text-3xl font-semibold'>{userData.acceptTasks}</h2>
        <h3 className='text-lg sm:text-xl font-medium'>Accepted Task</h3>
    </div>

    <div className='px-6 py-4 w-[calc(50%-0.625rem)] sm:w-[calc(50%-0.625rem)] md:w-[30%] lg:w-[23%] bg-yellow-400 rounded-xl'>
        <h2 className='text-2xl sm:text-3xl font-semibold'>{userData.failedTasks}</h2>
        <h3 className='text-lg sm:text-xl font-medium'>Failed Task</h3>
    </div>
</div>
    </>
  )
}

export default TaskListNumber