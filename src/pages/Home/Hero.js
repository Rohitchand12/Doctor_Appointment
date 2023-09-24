import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import bannerDoctor from "../../assets/images/banner-doctor.png";

const Hero = () => {
  return (
    <section className="h-[85%] lg:w-[100%] bg-blue-100 flex items-center">
    <div className="lg:ml-10 ml-4 h-[80%] sm:w-[50%] flex items-center justify-center">
      <div className="inline-block">
        <p className="lg:text-[3.5rem] max-w-fit font-bold text-[2.5rem] ">Search Doctor,</p>
        <p className="lg:text-[3.5rem] max-w-fit text-blue-500 font-bold text-[2.5rem] ">
         Make an appointment
        </p>
        <div className="mt-4 bg-blue-500 max-w-fit text-white p-3 rounded-md  text-xl">
        <FontAwesomeIcon icon = {faCircleCheck}/><span className="ml-2">Instant appointments and Operations</span>
        </div>
        <p className="mt-4 bg-blue-500 max-w-fit text-white p-3 rounded-md  text-xl">
        <FontAwesomeIcon icon = {faCircleCheck}/><span className="ml-2">100% expert doctors</span>
        </p>
        <p className="mt-4 text-gray-500 text-xl">Discover the best Doctors & Hosipitals nearest to you</p>
      </div>
    </div>
    <div className=" md:block h-full hidden">
      <img src={bannerDoctor} className="h-full w-full" />
    </div>
  </section>
  )
}

export default Hero