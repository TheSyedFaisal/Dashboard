import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='bg-blue-400 rounded-xl w-[45%] py-6 px-9 cursor-pointer'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='bg-green-400 rounded-xl w-[45%] py-6 px-9 cursor-pointer'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-xl font-medium'>Completed</h3>
        </div>
        <div className='bg-yellow-400 rounded-xl w-[45%] py-6 px-9 cursor-pointer'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
            <h3 className='text-xl font-medium'>Accepted</h3>
        </div>
        <div className='bg-red-400 rounded-xl w-[45%] py-6 px-9 cursor-pointer'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-medium'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumber