import React from 'react'
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
  return (
    <div className='max-h-fit py-10 '>
        <h1 className='text-3xl font-bold text-center'>Book our Doctor</h1>
        {/* static doctors grid starts  */}
        <div className='max-h-fit my-20 mx-auto py-2 w-[95%] grid lg:grid-cols-4 grid-cols-2 place-items-center gap-2'>
            {doctors.map(doctor =>(
                <div className='flex flex-col my-10  border-2 border-gray-200 rounded-lg items-center shadow-lg'>
                    <img src = {doctor.image}/>
                    <p className='text-xl font-semibold my-2'>{doctor.name}</p>
                    <p className='mb-2'>{doctor.speciality}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Doctors