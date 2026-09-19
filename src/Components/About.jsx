import React from 'react'

function About() {
  return (
  <div className='w-full h-screen flex justify-center items-center bg-background p-20'>
        <div className='flex justify-between items-center flex-col h-full'>
            <div className='text-4xl font-bold text-text mt-10'>
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
            </div>
        </div>
    </div>
  )
}

export default About