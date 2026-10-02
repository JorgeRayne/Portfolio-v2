import React from 'react'
import main from '../assets/main.png'
import IconList from './IconList'
import ShapeGrid from './ShapeGrid'

function Main() {
  return (
    <div className='w-full h-screen bg-background flex justify-center items-center relative'>
        <div className='w-full flex justify-between items-center h-full relative'>

            <div
                className="
                    absolute w-full h-[90%]
                    bottom-0
                    [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent),linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]
                    [mask-composite:intersect]
                "
                >
                <ShapeGrid className="absolute opacity-10" />
            </div>

            <div className='flex justify-center items-center z-10 w-1/2 h-screen '>
                <div className=' w-3/4 border-4 border-primary flex justify-center item-center relative aspect-square overflow-hidden animate-morph'>
                    <div>
                        {/* <img className='w-full aspect-square rounded' src={main} alt="" /> */}
                        <img className='w-full object-cover' src={main} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-start flex-col w-1/2 p-5 h-screen'>
                    <div className='w-full'>
                        <div className='text-2xl font-heading font-base bg-gradient-to-r from-text to-transparent inline-block text-transparent bg-clip-text font-mono'>Fullstack Developer</div>
                        <div className='text-text font-mono text-4xl font-medium'>Hello I'm</div>
                    </div>
                    <div className='text-6xl font-medium text-primary font-heading font-mono'>Jorge Rayne</div>
                    <div>
                        {/* <IconList/> */}
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Main