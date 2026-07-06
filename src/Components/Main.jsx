import React from 'react'
import main from '../assets/main.png'
import IconList from './IconList'

function Main() {
  return (
    <div className='w-full h-screen bg-background flex justify-center items-center'>
        <div className='flex justify-around items-center w-full'>
            <div className='border-4 border-primary rounded-sm flex justify-center item-center'>
                <img className='w-80 aspect-square' src={main} alt="" />
            </div>
            <div className='flex justify-center items-start flex-col w-max p-5'>
                <div className='text-7xl font-extrabold text-primary'>Jorge Rayne</div>
                <div className='text-6xl font-extrabold'>Fullstack Dev</div>
                <div>
                    <IconList/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main