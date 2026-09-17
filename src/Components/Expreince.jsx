import React from 'react'
import ExpCard from './ExpCard'

function Expreince() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-red-500'>
        <div className='h-[90%] w-full p-20'>


            {/* exprience component */}
            <ExpCard>
                <span className='shrink-0 whitespace-nowrap pt-2'>
                    <p className='text-primary font-semibold'>June 2023-August 2024</p>
                </span>
                <div className='flex justify-center items-start flex-col'>
                    <div className='mb-4'>
                        <div className='font-bold text-muted text-2xl'>Lorem ipsum</div>
                    </div>
                    <div className='font-semibold text-text'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, repellat unde corporis perspiciatis, modi quas laborum beatae ipsa molestiae veritatis voluptatem cum ab mollitia aut consectetur error asperiores aperiam voluptatibus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, repellat unde corporis perspiciatis, modi quas laborum beatae ipsa molestiae veritatis voluptatem cum ab mollitia aut consectetur error asperiores aperiam voluptatibus.
                    </div>
                </div>
            </ExpCard>

            <ExpCard>
                <span className='shrink-0 whitespace-nowrap pt-2'>
                    <p className='text-primary font-semibold'>June 2023-August 2024</p>
                </span>
                <div className='flex justify-center items-start flex-col'>
                    <div className='mb-4'>
                        <div className='font-bold text-muted text-2xl'>Lorem ipsum</div>
                    </div>
                    <div className='font-semibold text-text'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, repellat unde corporis perspiciatis, modi quas laborum beatae ipsa molestiae veritatis voluptatem cum ab mollitia aut consectetur error asperiores aperiam voluptatibus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, repellat unde corporis perspiciatis, modi quas laborum beatae ipsa molestiae veritatis voluptatem cum ab mollitia aut consectetur error asperiores aperiam voluptatibus.
                    </div>
                </div>
            </ExpCard>


        </div>
    </div>
  )
}

export default Expreince