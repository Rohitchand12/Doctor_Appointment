import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const SideNav = ({closeHandler}) => {
  return (
    <div className = 'animate-slide h-screen fixed left-0 top-0  bg-blue-500 w-[50%] cursor-pointer'>
      <FontAwesomeIcon onClick = {()=>closeHandler(false)} className = "absolute top-2 left-[90%]" icon={faXmark} size = {"xl"} />
      <ul className='flex flex-col mt-16 justify-center'>
          <NavLink to = "/" className="flex items-centerm my-1 text-white font-semibold hover:bg-blue-400 pl-5 h-14 cursor-pointer">Home</NavLink>
          <NavLink to = "/" className="flex items-centerm my-1 text-white font-semibold hover:bg-blue-400 pl-5 h-14 cursor-pointer">Book appointment</NavLink>
          <NavLink to = "/" className="flex items-centerm my-1 text-white font-semibold hover:bg-blue-400 pl-5 h-14 cursor-pointer">Appointments</NavLink>
          <NavLink to = "/" className="flex items-centerm my-1 text-white font-semibold hover:bg-blue-400 pl-5 h-14 cursor-pointer">About us</NavLink>
          <NavLink to = "/login" className="flex items-centerm my-1 text-white font-semibold hover:bg-blue-400 pl-5 h-14 cursor-pointer">Login/Signup</NavLink>
        </ul>
    </div>
  )
}

export default SideNav