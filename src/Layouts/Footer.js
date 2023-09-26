import React from 'react'

const Footer = () => {
  return (
    <footer className="max-h-fit bg-sky-700 w-full p-10">
        <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 lg:gap-6'>
            <div className='text-white my-10'>
                <h1 className='font-bold text-3xl mb-4'>medUP</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='text-white mb-5'>
                <h1 className='font-bold text-xl mb-3'>Specialities</h1>
                <ul className='flex flex-col gap-2'>
                    <li>Neurology</li>
                    <li>Cardiology</li>
                    <li>Dentist</li>
                    <li>Urology</li>
                    <li>Orthopedic</li>
                </ul>
            </div>
            <div className='text-white mb-5'>
                <h1 className='font-bold text-xl mb-3'>Services</h1>
                <ul className='flex flex-col gap-2'>
                    <li>Medical</li>
                    <li>Operation</li>
                    <li>Laboratory</li>
                    <li>ICU</li>
                    <li>Testroom</li>
                </ul>
            </div>
            <div className='text-white mb-5'>
                <h1 className='font-bold text-xl mb-3'>Contact us</h1>
                <ul className='flex flex-col gap-2'>
                    <li>248001 IT Park Dehradun</li>
                    <li>6395513067</li>
                    <li>rohitchand490@gmail.com</li>
                </ul>
            </div>
        </div>
        <div className='text-white my-5 text-center'>
            <p>© 2023 medUP. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer