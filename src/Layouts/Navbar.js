import React ,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideNav from './SideNav';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [show , setShow] = useState(false);

const sideNavHandler = ()=>{
    setShow(prev => !prev);
    console.log('clicked');
}

  return (
    <nav className="h-20 lg:w-[100%] flex items-center">
          {show && <SideNav closeHandler = {setShow} />}
         <FontAwesomeIcon onClick = {sideNavHandler} className = " mx-4 cursor-pointer md:hidden" icon={faBars} />
          <p className="font-bold ml-2 text-4xl cursor-pointer">medUP</p>
        <ul className="md:flex hidden">
          <NavLink to = "/" className="ml-20 cursor-pointer">Home</NavLink>
          <NavLink to = "/appointments" className="ml-10 cursor-pointer">Book appointment</NavLink>
          <NavLink to = "/" className="ml-10 cursor-pointer">Appointments</NavLink>
          <NavLink to = "/" className="ml-10 cursor-pointer">About us</NavLink>
        </ul>
        <NavLink to = "/login" className="ml-auto">

          <button className="border-blue-500 border-2 rounded-lg h-10 w-auto ml-auto mr-5 px-4 hover:bg-blue-500 hover:text-white transition ease-in delay-75">
            Login/Register
          </button>
          
        </NavLink>
      </nav>
  )
}

export default Navbar