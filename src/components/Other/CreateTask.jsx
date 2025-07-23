import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const task =
      { title, date, category, description, active: false, newTask: true, completed: false, failed: false };

      const data = JSON.parse(localStorage.getItem('employees'));

      data.map((elem)=>{
        if (assignTo == elem.userName) {
          elem.tasks.push(task);
          elem.taskCount.newTask = elem.taskCount.newTask + 1;
          
        }
      });

      localStorage.setItem('employees',JSON.stringify(data));

      window.location.reload();

    setTitle('');
    setDate('');
    setCategory('');
    setAssignTo('');
    setDescription('');

  }

  return (
    <div className='mt-7 border-1 border-gray-300 p-5 rounded'>
      <form onSubmit={((e) => {
        submitHandler(e)
      })} className='flex flex-wrap items-start justify-between w-full p-2 rounded'>
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm mb-0.5'>Task Tittle</h3>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
              className='text-sm w-4/5 outline-none border-[1px] border-gray-400 mb-3 rounded bg-transparent py-1 px-2' type="text" placeholder='Make a Frontend Design' />
          </div>
          <div>
            <h3 className='text-sm mb-0.5'>Date</h3>
            <input
              value={date}
              onChange={(e) => {
                setDate(e.target.value)
              }}
              className='text-sm w-4/5 outline-none border-[1px] border-gray-400 mb-3 rounded bg-transparent py-1 px-2' type="date" />
          </div>
          <div>
            <h3 className='text-sm mb-0.5'>Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value)
              }}
              className='text-sm w-4/5 outline-none border-[1px] border-gray-400 mb-3 rounded bg-transparent py-1 px-2' type="text" placeholder='employee name' />
          </div>
          <div>
            <h3 className='text-sm mb-0.5'>Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }}
              className='text-sm w-4/5 outline-none border-[1px] border-gray-400 mb-3 rounded bg-transparent py-1 px-2' type="text" placeholder='design, dev, etc' />
          </div>
        </div>

        <div className='w-2/5 flex flex-col items-start '>
          <h3 className='text-sm mb-0.5'>Description</h3>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
            className='bg-transparent w-full h-44 text-sm py-2 px-4 rounded outline-none border-[1px] border-gray-400' name="" id="" cols="30" rows="10"></textarea>
          <button className='w-full bg-[#162d3a] hover:bg-[#275672] text-white py-3 px-5 text-sm cursor-pointer mt-3 rounded'>Create Task</button>
        </div>

      </form>
    </div>
  )
}

export default CreateTask