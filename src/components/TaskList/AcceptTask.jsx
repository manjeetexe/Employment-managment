const AcceptTask = ({ elm }) => {
  return (
    <div className='h-full p-4 flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl'>
      <div className='flex justify-between'>
        <h3 className='bg-red-500 px-3 py-1 rounded-md'>{elm?.category || "No Category"}</h3>
        <h4>{elm?.date || "No Date"}</h4>
      </div>
      <h1 className='mt-5 text-2xl font-semibold'>{elm?.title || "No Title"}</h1>
      <p className='text-base mt-2'>{elm?.description || "No description available"}</p>
      <div className='flex mt-5 justify-between'>
        <button className='bg-green-500 px-2 py-1 text-sm rounded-md'>Mark as Completed</button>
        <button className='bg-red-500 px-2 py-1 text-sm rounded-md'>Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;