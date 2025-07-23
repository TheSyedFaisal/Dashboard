import React, { useState } from 'react'
import { Link, } from "react-router-dom";
import facebook from "../../assets/facebook.png"
import google from "../../assets/google.png"
import imageLog from "../../assets/imageLog.png"

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const SubmitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password)
        setEmail('');
        setPassword('');
    }

    return (
        <div className='bg-[#fcfbfb] flex h-screen w-screen items-center justify-center'>
            <div className=' w-[60%] h-full p-10 flex items-center'>
                <div className='flex-col m-auto'>
                    <div className='mb-6'>
                        <h2 className='mb-4 text-2xl font-semibold'>Welcome Back 👋</h2>
                        <p className='text-sm'>Today is a new day. It's your day. You shape it. <br />
                            Sign in to start managing your projects.</p>
                    </div>
                    <div>
                        <form onSubmit={(e) => {
                            SubmitHandler(e)
                        }}>
                            <div className='mb-3'>
                                <h5 className='mb-1 text-sm'>Email</h5>
                                <input
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                    className='bg-[#F7FBFF] w-full px-2 py-1 rounded-lg outline-none border-1 border-[#D4D7E3]' type="text" placeholder='example@example.com' />
                            </div>
                            <div className='mb-3'>
                                <h5 className='mb-1 text-sm'>Password</h5>
                                <input
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    className='bg-[#F7FBFF] w-full px-2 py-1 rounded-lg outline-none border-1 border-[#D4D7E3]' type="text" placeholder='Enter a Correct Password' />
                            </div>
                            <div className='flex justify-end'>
                                <p className='text-[#1e4ae9] cursor-pointer text-sm'>Forgot Password?</p>
                            </div>
                            <div className='mt-4'>
                                <button className='cursor-pointer bg-[#162D3A] w-full py-2 text-white text-sm rounded-lg'>Sign in</button>
                            </div>
                        </form>
                    </div>
                    <div className='mt-6 flex items-center gap-4 my-4'>
                        <hr className="flex-grow border-gray-300" />
                        <span className="">Or</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>
                    <div className='mb-6 flex flex-col gap-2'>
                        <div className='bg-[#edf8fa] cursor-pointer w-full py-2  rounded-lg text-sm flex items-center justify-center '>
                            <img className='w-6 mr-4' src={google} alt="Google" />
                            <p>Sign in with Google</p>
                        </div>
                        <div className='bg-[#edf8fa] cursor-pointer w-full py-2  rounded-lg text-sm flex items-center justify-center '>
                            <img className='w-6 mr-2' src={facebook} alt="Facebook" />
                            <p >Sign in with Facebook</p>
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-sm text-center'>Don't you have an account?
                            <Link className='text-[#1e4ae9] ml-1' to="/signup" >
                                Sign up
                            </Link>
                        </p>

                    </div>
                </div>
            </div>
            <div className="w-[40%] h-screen overflow-hidden flex items-center justify-center">
                <div className="p-5 w-full h-full">
                    <img
                        src={imageLog}
                        alt="Login Visual"
                        className="rounded-xl w-full h-full object-cover object-center"
                    />
                </div>
            </div>

        </div>

    )
}

export default Login