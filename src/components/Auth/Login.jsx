import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const SubmitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password)
        setEmail('');
        setPassword('');
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form onSubmit={(e) => {
            SubmitHandler(e)
        }} 
        className='flex flex-col items-center justify-center '>
            <input 
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }}
            required className='bg-transparent rounded-full py-3 px-5 border-2 border-emerald-600 text-xl outline-none placeholder:text-gray-400' type="email" placeholder='Enter your email' />
            <input
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            required className='bg-transparent rounded-full py-3 px-5 border-2 border-emerald-600 text-xl outline-none mt-7 placeholder:text-gray-400' type="password" placeholder='Enter your password' />
            <button  className='mt-5 text-white rounded-full py-3 px-5 border-none bg-emerald-600 text-xl outline-none placeholder:text-white'>Log in</button>
        </form>
        </div>
    </div>
  )
}

export default Login