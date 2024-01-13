import React from 'react'
import { login } from '../redux/slice';
import { useDispatch } from 'react-redux'

const Login = () => {

    const dispatch = useDispatch();

    const handlelogin = (e) => {
        e.preventDefault();
        dispatch(login());
    };




    return (
       <div className='flex m-auto flex-col items-center'>
           <h2 className='my-2 text-2xl font-bold'>Login</h2>
            <form action="" className='w-[300px] md:w-[20%] m-auto' >
                <input type="email" placeholder='email' required className=' border-cyan-600 border-2 rounded p-[0.4rem] mb-4 w-[100%]'/> <br />
               <input type="password" placeholder='password' required className='p-[0.4rem] mb-4 w-[100%] border-cyan-600 border-2 rounded' /> <br />
               <button type='submit' onClick={handlelogin} className='p-[0.4rem] border-2 rounded w-[100%] border-cyan-400 bg-cyan-600 text-white'>Login</button>
            </form>
     </div>
   )
}

export default Login
