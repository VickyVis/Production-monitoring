import React from 'react'
import Comparison1 from '../components/charts/Comparison1'
import Comparison2 from '../components/charts/Comparison2'
import TimeSeries from '../components/charts/TimeSeries'
import Aggregation from '../components/charts/Aggregations'

export default function page() {
  return (
    <div className='flex justify-stretch flex-col gap-2'>
      <div className='flex flex-row'>
        <TimeSeries />
        <Aggregation />
      </div>
      <div className='flex flex-row'>
        <Comparison1 />
        <Comparison2 />
      </div>
    </div>
  )
}
