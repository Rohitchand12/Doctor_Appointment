import React from 'react'
import login from '../../assets/images/login-banner.png'
import { NavLink } from 'react-router-dom'
const Login = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 place-items-center'>
        <div>
          <img src = {login}/>
        </div>
        <div className='max-h-fit w-[90%] lg:w-[70%] my-20 border-[1px] border-gray-200 rounded-lg p-10'>
          <h1 className='text-xl text-gray-500 font-semibold mb-5'>Doctor/Patient Login</h1>
          <form className='flex flex-col'>
            <input className='border-[1px] border-gray-200 focus:border-gray-400 focus:ring-0 focus:outline-none transition all duration-[0.1s] ease-in my-1 p-4 rounded-lg' placeholder = "Username"  type = "text"></input>
            <input className='border-[1px] border-gray-200 focus:border-gray-400 focus:ring-0 focus:outline-none transition all duration-[0.1s] ease-in my-1 p-4 rounded-lg' placeholder = "Password"  type = "password"></input>
            <NavLink className = "text-emerald-400" to = "/">Forgot password ?</NavLink>
            <input className ="bg-emerald-400 p-4 rounded-lg my-4 text-white text-xl font-semibold" type = "submit" value = "Login"/>
            <div className='flex w-full justify-center mt-5'>
              <p>Don't have an account ?</p>
              <NavLink className = "text-emerald-400" to = "../register">Register</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login