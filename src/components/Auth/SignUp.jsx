import React, { useContext, useEffect, useState } from 'react'
import facebook from "../../assets/facebook.png"
import google from "../../assets/google.png"
import signUpImage from "../../assets/signUpImage.png"
import { Link, useNavigate, } from "react-router-dom";


const SignUp = () => {

  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
  e.preventDefault();

  const employees = JSON.parse(localStorage.getItem('employees')) || [];

  const newEmployee = {
    newId: Date.now(),
    userName,
    email,
    password,
    taskCount : {
      active: false,
      completed: false,
      newTask: false,
      failed: false,
    },
    tasks: [],
  }

  employees.push(newEmployee);

  localStorage.setItem('employees', JSON.stringify(employees) );

  alert("Account Successfully Created");
  navigate('/');
  window.location.reload();

};

  return (
    <div>
      <div className='bg-[#fcfbfb] flex h-screen w-screen items-center justify-center'>
        <div className=' w-[40%] h-full p-10 flex items-center'>
          <div className='ml-auto w-full'>
            <div className='mb-6'>
              <h2 className='mb-6 text-2xl font-semibold'>Create Account 👋</h2>
              <div className='mb-6 flex gap-2'>
                <div className='bg-[#edf8fa] cursor-pointer w-full py-2  rounded-lg text-sm flex items-center justify-center '>
                  <img className='w-6 mr-4' src={google} alt="Google" />
                  <p>Sign in with Google</p>
                </div>
                <div className='bg-[#edf8fa] cursor-pointer w-full py-2  rounded-lg text-sm flex items-center justify-center '>
                  <img className='w-6 mr-2' src={facebook} alt="Facebook" />
                  <p >Sign in with Facebook</p>
                </div>
              </div>
            </div>
            <div className='mt-6 flex items-center gap-4 my-4'>
              <hr className="flex-grow border-gray-300" />
              <span className="">Or</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <div>
              <form onSubmit={(e) => {
                submitHandler(e)
              }}>
                  <div className='w-full mb-3'>
                    <h5 className='mb-1 text-sm'>User Name</h5>
                    <input 
                    value={userName}
                    onChange={(e)=>{
                      setUserName(e.target.value)
                    }}
                    className='bg-[#F7FBFF] w-full px-2 py-1 rounded-lg outline-none border-1 border-[#D4D7E3]' type="text" placeholder='username' />
                  </div>
                <div className='mb-3'>
                  <h5 className='mb-1 text-sm'>Email</h5>
                  <input 
                  value={email}
                    onChange={(e)=>{
                      setEmail(e.target.value)
                    }}
                  className='bg-[#F7FBFF] w-full px-2 py-1 rounded-lg outline-none border-1 border-[#D4D7E3]' type="text" placeholder='example@example.com' />
                </div>
                <div className='mb-5'>
                  <h5 className='mb-1 text-sm'>Password</h5>
                  <input 
                  value={password}
                    onChange={(e)=>{
                      setPassword(e.target.value)
                    }}
                  className='bg-[#F7FBFF] w-full px-2 py-1 rounded-lg outline-none border-1 border-[#D4D7E3]' type="text" placeholder='Enter a New Password' />
                </div>
                <div className='mt-4'>
                  <button className='cursor-pointer bg-[#162D3A] w-full py-2 text-white text-sm rounded-lg'>Sign Up</button>
                </div>
              </form>
            </div>
            <div className='mt-6 flex items-center gap-4 my-4'>
              <hr className="flex-grow border-gray-300" />
              <span className="">Or</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <div className=''>
              <p className='text-sm text-center'>Don't you have an account?
                <Link className='text-[#1e4ae9] ml-1' to="/" >
                  Sign in
                </Link>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp