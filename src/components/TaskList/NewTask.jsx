import React from 'react'

const NewTask = ({elm}) => {
  return (
    <div className='h-full p-5 flex-shrink-0 w-[300px] bg-green-400 rounded-xl'>
        <div className='flex justify-between'>
            <h3 className='bg-red-500 px-3 py-1 rounded-md'>{elm?.category || "No Category"}</h3>
            <h4>{elm?.date || "No Date"}</h4> 
        </div>
        <h1 className='mt-5 text-2xl font-semibold'>{elm?.title || "No Title"}</h1>
        <p className='text-sm mt-2 '> {elm?.description || "No description available"}</p>
        <div className='mt-5'>
            <button className='bg-blue-500 px-2 py-1 text-sm rounded-md'>Accept Task</button>
        </div>
    </div>
  )
}

export default NewTask;