import React from 'react'
import WellSelection from './selection/WellSelection'
import FieldSelection from './selection/FieldSelection'
import FromDate from './selection/FromDate'
import ToDate from './selection/ToDate'


export default function header() {
  return (
    <div className='flex flex-col bg-white h-[140px] w-screen px-4'>
      <h1 className='text-black text-xl font-medium p-3'>Production Monitoring</h1>
      <div className='flex flex-row text-black'>
        
          <div className='basis-1/6 px-2'><FieldSelection /></div>
          <div className='basis-1/6 px-2'>< WellSelection /></div>
        
          <div className='basis-1/6 px-auto'>< FromDate /></div>
          <div className='basis-1/6 px-auto'>< ToDate /></div>
        
        
      </div>
    </div>
  )
}
