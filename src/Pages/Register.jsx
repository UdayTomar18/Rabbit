
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import register from '../assets/register.webp';
const LogIn = () => {
    const[name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [passward, setPassward] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Registered value:', { name, email, passward });
    }
    return (
        <div className='flex border-b'>
            <div className='w-full md:w-1/2 flex flex-col items-center justify-center pt-10 '>
                <form onSubmit={handleSubmit} className='w-full max-w-md mx-auto p-8 rounded-lg border shadow-sm'>
                    <div className='text-center justify-center my-4 py-4'>
                        <h2 className='text-xl font-semibold'>Rabbit</h2>
                    </div>
                    <div className=' justify-center text-center mb-6'>
                        <h2 className='text-2xl font-bold text-center'>Hey there! 👋</h2>
                        <p className="text-gray-700 text-center text-sm">Enter your name,e-mail and passward to register</p>
                    </div>
                    <div className="mb-4">
                        <label className="text-sm block mb-2 font-semibold">Name</label>
                        <input type="name" value={name} placeholder="Enter your name" onChange={(e) => { setName(e.target.value) }} className="border p-2 w-full rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="text-sm block mb-2 font-semibold">Email</label>
                        <input type="email" value={email} placeholder="Enter your e-mail address" onChange={(e) => { setEmail(e.target.value) }} className="border p-2 w-full rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="text-sm block mb-2 font-semibold">Passward</label>
                        <input type="password" value={passward} placeholder="Enter your password" onChange={(e) => { setPassward(e.target.value) }} className="border p-2 w-full rounded" />
                    </div>

                    <button type='submit' className='w-full p-2 rounded-lg text-white font-semibold bg-black hover:bg-gray-800 transition-all duration'>Sign up</button>
                    <p className='mt-6 text-center text-sm'>Already have an account?
                        <Link to='/register' className='text-blue-500 hover:underline'> Log In</Link>
                    </p>


                </form>
            </div>

            <div className='hidden md:block w-1/2 bg-gray-800'>
                <div className='w-full h-full flex items-center justify-center'>
                    <img src={register} alt="" className='h-[750px] w-full object-cover' />

                </div>
            </div>

        </div>
    )
}

export default LogIn
