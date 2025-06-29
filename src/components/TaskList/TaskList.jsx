import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div id='task' className=' h-[57%] flex items-center overflow-x-auto justify-start flex-nowrap gap-5 py-5 w-full mt-5 '>
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem}/>
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem}/>
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem}/>
                }
            })}
        </div>
    )
}

export default TaskList