import React from 'react'
import main from '../assets/main.png'
import IconList from './IconList'
import ShapeGrid from './ShapeGrid'

function Main() {
  return (
    <div className='w-full h-screen bg-background flex justify-center items-center'>
        <div className='w-full flex justify-around items-center  h-[70%] relative'>

            <div
                className="
                    absolute w-full h-[90%]
                    [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent),linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]
                    [mask-composite:intersect]
                "
                >
                <ShapeGrid className="absolute" />
            </div>

            <div className='flex justify-around items-center z-10'>
                <div className='border-4 border-primary flex justify-center item-center relative w-1/4 aspect-square overflow-hidden animate-morph'>
                <div>
                    {/* <img className='w-full aspect-square rounded' src={main} alt="" /> */}
                    <img className='w-full h-full object-cover' src={main} alt="" />
                </div>
            </div>
            <div className='flex justify-center items-start flex-col w-max p-5'>
                <h2 className='text-8xl font-extrabold text-primary font-heading'>Jorge Rayne</h2>
                <div className='text-6xl font-heading font-extrabold bg-gradient-to-r from-text to-transparent inline-block text-transparent bg-clip-text'>Fullstack Dev</div>
                <div>
                    <IconList/>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main