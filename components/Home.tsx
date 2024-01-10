'use client';

import { useState } from 'react';
import Task from '../components/Task';

const Home = () => {
  return (
    <>
        <div className="bg-lime-800 p-2 flex justify-between">
        <h1 className='text-white italic font-bold text-[23px]'>To Do Application</h1>
        <Task />
        </div>
    </>
      
  );
};

export default Home;
