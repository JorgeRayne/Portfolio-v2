import React from 'react'
import main from '../assets/laptop.jfif'

function About() {
  return (
  <div className='w-full h-screen flex justify-center items-center bg-background p-20'>
        <div className='h-full bg-red-200 w-full'>
            {/* <div className='text-4xl font-bold text-text mt-10'>
              ABOUT<span className='text-primary font-bold'>.</span>
            </div>
            <div className='overflow-hidden flex justify-around items-center h-[80%] '>
              <div className='h-full w-[50%] flex justify-center items-center'>
                <div className='w-[70%] h-80 bg-primary'></div>
              </div>
              <div className='text-lg font-semibold text-text w-[50%]'>
                <div>
                  <span className='font-bold'>Web Developer</span> transitioning to a career in technology.
                </div>
                <div>
                  Currently, my focus is on learning and mastering essetials web development skills. I have a solid foundation in <span className='font-bold'>HTML</span>, <span className='font-bold'>CSS</span>, <span className='font-bold'>GIT</span> and <span className='font-bold'>JAVASCRIPT</span>
                </div>
                <div>
                  Currently, my focus in on learning and mastering essetials web development skills. I have a solid foundation
                </div>
              </div>
            </div> */}



            {/* object-cover object-center */}
            <div className="
              w-full
              h-full
              grid
              grid-cols-4
              grid-rows-3
              [grid-template-areas:'ben1_ben1_ben2_ben2'_'ben3_ben3_ben2_ben2'_'ben3_ben3_ben4_ben4']
              gap-2
            ">
              <div className='[grid-area:ben1] bg-red-950 w-full h-full overflow-hidden relative'>
                <img src={main} className='w-full h-full object-cover object-top' alt="" />
              </div>
              <div className='[grid-area:ben2] bg-red-950 w-full'>
                <img src={main} className='w-full h-full object-cover object-buttom' alt="" />
              </div>
              <div className='[grid-area:ben3] bg-red-950 w-full'>
                <img src={main} className='w-full h-full object-cover object-buttom' alt="" />
              </div>
              <div className='[grid-area:ben4] bg-red-950 w-full overflow-hidden'>
                <img src={main} className='w-fit object-cover object-center' alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default About