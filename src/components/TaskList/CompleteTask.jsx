import React from 'react'

const CompleteTask = ({ data }) => {
    return (
        <div className='bg-gray-100 border-slate-400 shadow-2xl rounded-xl flex-shrink-0 p-5 w-[285px] h-full'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-blue-600 text-sm px-3 py-1 rounded text-white'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='text-2xl font-bold mt-5 text-gray-800'>{data.title}</h2>
            <p className='text-sm mt-2'>
                {data.description}
            </p>
            <div className='mt-4'>
                <button className='w-full bg-green-500 text-white rounded py-1 text-sm transition'>
                    Complete
                </button>
            </div>
        </div>

    )
}

export default CompleteTask