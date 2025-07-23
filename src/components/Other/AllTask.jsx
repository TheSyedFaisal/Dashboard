import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

    const authData = useContext(AuthContext);

    return (
        <div id='task' className='border-1 border-gray-300 p-5 mt-7 rounded min-h'>
            <div className='bg-blue-600 mb-2 py-2 px-4 flex justify-between rounded '>
                <h2 className='text-white text-lg font-medium w-1/5'>Employee Name</h2>
                <h3 className=' text-white text-lg font-medium w-1/5'>New Task</h3>
                <h5 className='text-white text-lg font-medium w-1/5'>Completed Task</h5>
                <h5 className='text-white text-lg font-medium w-1/5'>Active Task</h5>
                <h5 className='text-white text-lg font-medium w-1/5'>Failed Task</h5>
            </div>
                    {authData.map((elem, idx)=>{
                    return (
                        <div key={idx} className='border-1 border-[#23393d] mb-2 py-2 px-4 flex justify-between rounded'>
                            <h2 className='text-lg font-medium w-1/5 '>{elem.userName}</h2>
                            <h3 className='text-lg font-medium w-1/5 px-4 text-blue-600'>{elem.taskCount.newTask}</h3>
                            <h5 className='text-lg font-medium w-1/5 px-4 text-green-600'>{elem.taskCount.completed} </h5>
                            <h5 className='text-lg font-medium w-1/5 px-4 text-yellow-600'>{elem.taskCount.active} </h5>
                            <h5 className='text-lg font-medium w-1/5 px-4 text-red-600'>{elem.taskCount.failed} </h5>
                        </div>
                    )
                })}
        </div>
    )
}

export default AllTask