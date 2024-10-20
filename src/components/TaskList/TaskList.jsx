import React from 'react';
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import NewTask from './NewTask';

const TaskList = ({ userData }) => {


  
  return (
    <>
      <div
        id="taskList"
        className="h-[50%] flex items-center overflow-x-auto justify-start gap-5 flex-nowrap w-full py-5 mt-10"
      >
        {userData?.task?.map((elm, index) => {
          
          if (elm.active) {

            return <AcceptTask key={index} elm={elm} />;
          }
          if (elm.failed) {  
            return <FailedTask key={index} elm={elm} />;
          }
          if (elm.complete) {           
            return <CompleteTask key={index} elm={elm} />;
          }
          if (elm.new) {
            return <NewTask key={index} elm={elm} />;
          }
          return null;
        })}
      </div>
    </>
  );
};

export default TaskList;