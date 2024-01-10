'use client';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Task = () => {
  const [projectValue, setProjectValue] = useState({projectName: '', title: '', flag: '', status: '', description: ''});
  const [modalVisible, setModalVisible] = React.useState(false);
  const onChangeHandler = (e: { target: { name: any; value: any; }; }) => {
  const {name, value} = e.target
  // console.log(name, value)

   setProjectValue(( preData) => ({...preData, [name]: value}) );
  }
   console.log(projectValue)

   const onDescriptionChangeHandler = (content: React.SetStateAction<string>, delta: any, source: any, editor: any) => {
    setValue(content);
    setProjectValue((preData) => ({ ...preData, description: content }));
  };



  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const [value, setValue] = useState('')
  


  return (
    <>
     <button
          onClick={openModal}
          className="bg-white p-3 flex cursor-pointer items-center justify-center rounded-full bg-primary
        text-regular uppercase "
          type="button"
        >
         <span>+</span> Add Task
        </button>

        {modalVisible && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-1/2 dark:bg-gray-700 absolute rounded-lg bg-white shadow">
              <button
                type="button"
                onClick={closeModal}
                className="float-right m-2 rounded-full p-[7px] shadow-md"
              >
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 lg:px-8">
                <h3 className="text-gray-900 mb-4 flex items-center justify-center text-xl font-medium dark:text-white uppercase">
                  Create a Task
                </h3>
                <form
                  className="grid"
                >
                  <div className='flex mb-3'>
                    <div>
                      <label className='whitespace-nowrap'>Project Name :</label>
                    </div>
                    <div className='w-full pl-5'>
                    <input
                      type="text"
                      name="projectName"
                      id="project"
                      
                      className="bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder:text-gray-400 block w-full rounded-lg border p-2.5 text-sm dark:text-white"
                      placeholder=""
                      required
                      onChange={onChangeHandler}
                    />
                    </div>
                  </div>
                  <div className='flex mb-3'>
                    <div>
                      <label className='whitespace-nowrap'>Title : </label></div>
                      <div className='w-full pl-[87px]'>
                        <input
                        type="text"
                        name="title"
                        id="title"
                        
                        className="bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder:text-gray-400 block w-full rounded-lg border p-2.5 text-sm dark:text-white"
                        placeholder=""
                        required
                        onChange={onChangeHandler}
                      /></div>
                  </div>
                  
                  
                  <div className='flex mb-3'>
                    <div>
                      <label className='whitespace-nowrap'>Select a Flag :</label>
                    </div>
                    <div className='w-full pl-5'>
                    <select
                      name="flag"
                      id="service"
                      className="bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600
                      dark:border-gray-500 dark:placeholder:text-gray-400 block w-full rounded-lg border p-2.5 text-sm dark:text-white" 
                      required 
                      onChange={onChangeHandler}
                    >
                      <option value="">Select a Flag</option>
                      <option value="Low">Low</option>
                      <option value="Normal">Normal</option>
                      <option value="Urgent">Urgent</option>
                      
                    </select>
                    </div>
                  </div>
                  <div className='flex mb-3'>
                    <div>
                      <label className='whitespace-nowrap'>Status :</label>
                    </div>
                    <div className='w-full pl-[68px]'>
                    <select
                      name="status"
                      id="service"
                      className="bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600
                      dark:border-gray-500 dark:placeholder:text-gray-400 block w-full rounded-lg border p-2.5 text-sm dark:text-white" 
                      required 
                      onChange={onChangeHandler}
                    >
                      <option value="">Select a Status</option>
                      <option value="To Do">To Do</option>
                      <option value="In Progress">In Progress</option>
                      
                    </select>
                    </div>
                  </div>
                  <div  className="flex mb-3">
                    <div>
                      <label className='whitespace-nowrap'>description: </label>
                    </div>
                     <div className="w-full pl-[39px]">
                      <ReactQuill theme="snow" value={value} onChange={onDescriptionChangeHandler}/></div>
                  </div>

                  <div className="flex justify-end">
                  <button className='bg-lime-800 mr-3 text-white p-3 flex cursor-pointer items-center justify-center rounded-full bg-primary text-regular uppercase ' type='button'>
                     Create
                    </button>
                    <button 
                    onClick={closeModal}
                    className='bg-slate-300 p-3 flex cursor-pointer items-center justify-center rounded-full bg-primary text-regular uppercase' type='button'>
                     Cancel
                    </button>
                    
                  </div>
                 
                 
                </form>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default Task