import React from 'react'
import main from '../assets/main.png'
import IconList from './IconList'

function Main() {
  return (
    <div className='wfull h-screen bg-background flex justify-center items-center'>
        <div className='w-[80vw] flex justify-around items-center'>
            <div className='border-4 border-primary flex justify-center item-center relative w-1/4 aspect-square
    overflow-hidden
    animate-morph'>
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
  )
}

export default Main