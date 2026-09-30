import React, { useState } from 'react'
import main from '../assets/laptop.jfif'
import ShapeGrid from './ShapeGrid'
import TechNav from './TechNav';
import Backend from './layouts/techlayouts/Backend';
import Frontend from './layouts/techlayouts/Frontend';
import Tools from './layouts/techlayouts/Tools';

function About() {
  const [category, setCategory] = useState('backend');

  return (
  <div className='w-full h-screen flex justify-center items-center bg-background p-10'>
        <div className='h-full w-full p-20'>
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
                  <div className="font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10"></div>
                  <div className="text-text text-lg lg:text-3xl max-w-96 font-meduim z-10 font-mono">
                    Developer building clean, reliable cloud, fintech systems
                  </div>
                </div>
              </div>
              <div className='[grid-area:ben2] w-full overflow-hidden rounded-3xl border border-white/[0.1] bg-background'>
                <img src={main} className='w-full h-full object-cover object-buttom opacity-10' alt="" />
              </div>
              <div className='[grid-area:ben3] w-full rounded-3xl bg-card border border-white/[0.1] text-white relative'>
                <div
                  className=" w-full h-full
                      [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent),linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]
                      [mask-composite:intersect]
                      absolute 
                  "
                  >
                  <ShapeGrid className="absolute w-full overflow-hidden opacity-10" direction={'left'} />
                </div>
                <div className='flex justify-between items-center flex-col gap-4 relative w-full h-full z-10'>
                  <div className='flex justify-center items-center w-full h-11 px-10 py-6 bg-pale-background rounded-t-3xl'>
                    <div className='flex-1 font-mono font-medium text-2xl'>Tech</div>
                    <TechNav setCategory={setCategory}/>
                  </div>
                  <div className='flex items-center justify-center flex-wrap gap-10 w-full h-full bg-background opacity-80 rounded-3xl px-10 py-4'>
                    {category === 'backend' ? <Backend></Backend> : category === 'frontend' ? <Frontend></Frontend> : <Tools></Tools>}
                  </div>
                </div>
              </div>
              <div className='[grid-area:ben4] border-white/[2] bg-card w-full rounded-3xl flex justify-center items-center'>
                <div className='text-text text-lg lg-text-3xl text-center'>
                  Dowload CV
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About