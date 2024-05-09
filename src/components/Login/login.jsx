import React, { useState } from 'react'
import {server} from '../../server'
import {toast} from 'react-toastify'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    // Function to handle form submission
    const handleSubmit = async(event) =>{
      event.preventDefault();
  //     await axios.post(`${server}/login-user`,{
  //       username,
  //       password,
  //     },
  //   {withCredentials:true}
  // )
  // .then((res)=>{
  //   toast.success("Login success");
  //   Navigate('/')
  // })
  // .catch((err)=>{
  //   toast.error(err.response.data.message);
  // });
  // console.log(response)
      
      console.log('Username:', username);
      console.log('Password:', password);
      
    };
    
    return (
      <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6
      lg:px-8'>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="mt-6 text-centre text-3xl font-extrabold text-gray-900">Login</h2>
     </div>
     <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg:white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className='block text-sm font-medium text-gray-700'>Username:</label>
            <div className='mt-1'>
            <input className='appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
          focus:ring-blue-500
          focus:border-blue-500
          sm:text-sm'
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
              placeholder='Username'
            />
            </div>
          </div>
          <div>
            <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password:</label>
            <div className="mt-1 relative" >
            <input className='appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
          focus:ring-blue-500
          focus:border-blue-500
          sm:text-sm'
              type="password"
              id="password"
              autoComplete='current-password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            </div>
          </div>
          <button type="submit" className='group-relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium 
          rounded-md text-white bg-blue-600 hover:bg-blue-700'>
            Login
            </button>
        </form>
        </div>
        </div>
      </div>
    );
}

export default Login;