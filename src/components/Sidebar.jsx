import React from 'react'
import Link from 'next/link'

export default function sidebar() {
  return (
    <div className='flex flex-col items-center bg-white w-60 p-2 h-screen shadow-xl text-black'>
      <div className='flex flex-col items-center pb-3'>
        <h1 className='text-3xl font-bold text-blue-700'>Enfinite</h1>
        <p className='text-[10px] text-black'>Production Monitoring</p>
      </div>
      <div className='flex flex-1 flex-col gap-4 justify-start items-center pt-4'>
        <div className='my-4 border-b border-gray-100 px-4'>
          
          <div className='flex mb-2 justify-center items-center gap-4 px-8 hover:bg-blue-700 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
            <Link href='/' className=' text-gray-800 group-hover:text-white font-medium text-md px-8'>Dashboard</Link>
          </div>
          <div className='flex mb-2 justify-center items-center gap-4 px-8 hover:bg-blue-700 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
            <Link href='/production' className=' text-gray-800 group-hover:text-white font-medium text-md px-8'>Production</Link>
          </div>
          <div className='flex mb-2 justify-center items-center gap-4 px-8 hover:bg-blue-700 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
            <h3 className=' text-gray-800 group-hover:text-white font-medium text-md px-8'>Chatbot</h3>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 justify-start items-center'>
        <div className='my-4 border-b border-gray-100 px-4'>
        <div className='flex mb-2 justify-center items-center gap-4 px-10 hover:bg-blue-700 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
          <h3 className=' text-gray-800 group-hover:text-white font-medium text-md px-8'>Settings</h3>
        </div>
        <div className='flex mb-2 justify-center items-center gap-4 px-10 hover:bg-red-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
          <h3 className=' text-red-600 group-hover:text-white font-medium text-md px-8'>Signout</h3>
        </div>
        </div>
      </div>
    </div>
  )
}
