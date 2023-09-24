import React, { useState } from 'react'
import dentist from '../../assets/images/doctor-dentist.jpg'
import neurologist from '../../assets/images/neurologist.jpg'
import ortho from '../../assets/images/ortho.jpg'
import urology from '../../assets/images/urology.jpg'
const doctors = [
    {
        name: 'Doctor Demo',
        speciality :'Dentist',
        image : dentist
    },
    {
        name: 'James Amen',
        speciality :'Neurology',
        image : neurologist
    },
    {
        name: 'Carl Kelly',
        speciality :'orthopedic',
        image : ortho
    },
    {
        name: 'Darren Elder',
        speciality :'urology',
        image : urology
    }

]

const Doctors = () => {
    const [index , setIndex] = useState(0);
    let hasPrev = index > 0
    let hasNext = index < doctors.length-1  

    const nextHandler = ()=>{
        if(hasNext){
            setIndex(prev=>prev+1)
        }
    }
    const prevHandler = ()=>{
        if(hasPrev){
            setIndex(prev=>prev-1)
        }
    }
  return (
    <div className='max-h-fit py-10 '>
        <h1 className='text-3xl font-bold text-center'>Book our Doctor</h1>
        {/* static doctors grid starts  */}
        <div className='max-h-fit my-20  w-full grid lg:grid-cols-4 grid-cols-2 place-items-center'>
            {doctors.map(doctor =>(
                <div className='flex flex-col my-10  border-2 border-gray-200 rounded-lg items-center shadow-lg'>
                    <img src = {doctor.image}/>
                    <p>{doctor.name}</p>
                    <p>{doctor.speciality}</p>
                </div>
            ))}
        </div>
        {/* static doctors grid ends  */}
        {/* carousel starts*/}
        {/* <div className='md:hidden flex flex-nowrap h-auto w-screen' >
            {doctors.map(doctor =>(
                    <div className='flex flex-col border-2 border-gray-200 rounded-lg items-center shadow-lg'>
                        <img src = {doctor.image}/>
                        <p>{doctor.name}</p>
                        <p>{doctor.speciality}</p>
                    </div>
                ))}
        </div> */}
        {/* carousel ends  */}
        {/* <button disabled = {!hasPrev} onClick = {prevHandler} className='h-10 w-32 bg-blue-500 mr-4 lg:hidden'>Prev</button>
        <button disabled = {!hasNext} onClick = {nextHandler} className='h-10 w-32 bg-blue-500 mr-4 lg:hidden'>Next</button> */}
    </div>
  )
}

export default Doctors