import React from 'react'

const BasicInfoCardBody = ({icon , title , description}) => {
  return (
    <div className='flex flex-col h-[90%] w-[90%] justify-between'>
        <img className='h-[30%]  w-[30%]' src = {icon} alt = "service icon"/>
        <p className='text-2xl font-semibold'>{title}</p>
        <p className='text-gray-400 text-lg'>{description}</p>
        <div className='flex items-center justify-start'>
        <button className="
         border-blue-500 border-[1px] rounded-3xl h-10 mr-5 px-4 hover:bg-blue-500 hover:text-white transition ease-in delay-75">
          Read more
        </button>
        </div>
    </div>
  )
}

export default BasicInfoCardBody