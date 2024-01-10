'use client';
import React, { useState } from 'react';


const Cards = () => {
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    done: [],
  });


  
  return (
    <>
    <div className='grid grid-cols-3 gap-6 mt-[20px]'>
        <div className='bg-slate-100 p-4 rounded-sm'>
            <h1 className='text-lime-950 font-medium text-[18px]'>To Do</h1>
            <div className='rounded bg-white p-4 mt-5'>
                <h2>Task Name </h2>
            </div>
            <div className='float-right'>
              <button className='bg-[#73af73] text-white p-3 flex cursor-pointer items-center justify-center rounded-full bg-primary
        text-regular uppercase mt-5' type='button'>next</button>
            </div>

        </div>
        <div><h1 className='text-lime-950 font-medium text-[18px]'>In Progress</h1>
        
        
        <div className="parent1">
          <div className="child">Hover Me
              <div className="parent2">Child Element</div>
          </div>
        </div>
        
        </div>
        <div><h1 className='text-lime-950 font-medium text-[18px]'>Done</h1></div>

       
            
            
     


        
          
    </div>
    
    </>
  )
}

export default Cards