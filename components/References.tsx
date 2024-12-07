import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { references } from '@/data'

const References = () => {
  return (
    <div className='py-20' id='references'>
        <h1 className='heading'>
            Kind words from {' '}
            <span className='text-purple'>my network</span>
        </h1>
        <div className='flex flex-col items-center max-lg:mt-10'>
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
            <InfiniteMovingCards items={references} direction='right' speed='slow'/>
            </div>
        </div>
    </div>
  )
}

export default References