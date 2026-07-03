import React from 'react'
import main from '../assets/main.png'
import IconList from './IconList'

function Main() {
  return (
    <div className='w-full h-screen bg-red-700 flex justify-center items-center'>
        <div className='flex justify-around bg-slate-500 items-center w-full'>
            <div className='bg-blue-500 border-8 rounded-sm flex justify-center item-center after'>
                <img className='w-80 aspect-square' src={main} alt="" />
            </div>
            <div className='flex justify-center items-start flex-col bg-blue-300 w-max p-5'>
                <div className='text-7xl font-extrabold'>Jorge Rayne</div>
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