import React from 'react'

const NewTask = ({data}) => {
    return (
        <div className='bg-green-400 h-full w-[285px] rounded-xl flex-shrink-0 p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category }</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='text-2xl font-bold mt-5'>{data.title}</h2>
            <p className='text-sm mt-2'>
                {data.description}
            </p>
            <div className='mt-4'>
                <button className=' bg-blue-500 rounded py-1 px-4 text-sm'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask