import React from 'react'
import main from '../assets/laptop.jfif'
import ShapeGrid from './ShapeGrid'

function About() {
  return (
  <div className='w-full h-screen flex justify-center items-center bg-background p-10'>
        <div className='h-full w-full p-20'>
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
              gap-8
            ">
              <div className='[grid-area:ben1] overflow-hidden rounded-3xl bg-card border border-white/[0.1]'>
                <div className='justify-end group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10'>
                  <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10"></div>
                  <div className="font-sans text-text text-lg lg:text-3xl max-w-96 font-bold z-10">
                    Developer building clean, reliable cloud, fintech systems
                  </div>
                </div>
              </div>
              <div className='[grid-area:ben2] w-full overflow-hidden rounded-3xl border border-white/[0.1] bg-background'>
                <img src={main} className='w-full h-full object-cover object-buttom opacity-10' alt="" />
              </div>
              <div className='[grid-area:ben3] w-full rounded-3xl bg-card border border-white/[0.1] text-white'>
                <div
                    className=" w-full h-full
                        [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent),linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]
                        [mask-composite:intersect]
                    "
                    >
                    <ShapeGrid className="absolute opacity-60 w-fit" direction={null} />
                  </div>
              </div>
              <div className='[grid-area:ben4] bg-card w-full overflow-hidden rounded-3xl'>
                <div className='text-text text-lg lg-text-3xl text-center w-full h-full'>
                  Dowload CV
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About