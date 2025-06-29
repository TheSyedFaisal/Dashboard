import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='p-7 h-screen  w-full'>
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard