import React, { useRef, useState } from 'react'
import main from '../assets/laptop.jfif'
import ShapeGrid from './ShapeGrid'
import TechNav from './TechNav';
import Backend from './layouts/techlayouts/Backend';
import me from '../assets/main.png'
import Tools from './layouts/techlayouts/Tools';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faSquareFacebook, faSquareThreads } from '@fortawesome/free-brands-svg-icons'
import js from '../assets/Icons/js.svg';

function About() {
  const [category, setCategory] = useState('stack');

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
              <div className='[grid-area:ben1] overflow-hidden rounded-3xl bg-card border border-white/[0.1] relative'>
                <img src={main} className='w-full h-full object-cover object-right-bottom opacity-10 absolute' alt="" />
                <div className='justify-end group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10'>
                  <div className="font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10"></div>
                  <div className="text-text text-lg lg:text-3xl max-w-96 font-meduim z-10 font-mono">
                    Developer building clean, reliable cloud, fintech systems
                  </div>
                </div>
              </div>
              <div className="relative z-0 [grid-area:ben2] w-full overflow-hidden rounded-3xl border border-white/[0.1] bg-background">
                {/* <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,#2A7B9B_0%,#57E6D9_0%,#000_100%)] opacity-25" /> */}

                <div className="relative z-10 h-full w-full text-text font-mono ">
                  <div className='w-full h-full flex flex-col'>
                    <div className='flex justify-center items-center h-1/2'>
                      <div className='w-1/2 h-full'>
                        <div className='w-full h-full flex justify-center items-center overflow-hidden'>
                          <img src={me} className='h-3/4 object-fit' alt="" />
                        </div>
                      </div>
                      <div  className='text-text text-lg lg:text-3xl max-w-96 font-meduim z-10 font-mono'>Developer building clean, reliable cloud, fintech systems</div>
                    </div>
                    <div className='min-h-0 flex-1 px-4 text-ellipsis flex justify-center items-center'>
                      <div className='indent-10 font-medium'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quidem reprehenderit ab asperiores, est veritatis esse, nam commodi pariatur soluta, dicta dolor quos officia. Id eveniet numquam beatae voluptatum amet.
                        Doloremque eum esse officia voluptates error excepturiLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quidem reprehenderit ab 
                      </div>
                    </div>
                  </div>
                </div>
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
                    <div className='flex-1 font-mono font-medium text-2xl'></div>
                    <TechNav category={category} setCategory={setCategory} />
                  </div>
                  <div className={`grid ${category == 'stack' ? 'grid-rows-3 grid-cols-5' : 'grid-cols-3'} gap-3 w-full h-full bg-background opacity-80 rounded-3xl px-10 py-4`}>
                    {category === 'stack' ? <Backend></Backend> : <Tools></Tools>}
                  </div>
                </div>
              </div>
              <div className='[grid-area:ben4] border border-white/[0.1] bg-card w-full rounded-3xl flex justify-center items-center relative overflow-hidden'>
                {/* <div className='text-text text-lg lg-text-3xl text-center'>
                  Dowload CV
                </div> */}
                
                <div className='w-full h-full absolute flex flex-row-reverse font-mono font-medium'>
                  <div className='flex justify-center items-center px-6'>
                    <button className='opacity-80 py-4 px-12 text--card rounded-2xl bg-primary border border-secondary text-2xl'>Resume</button>
                  </div>
                  <div className='w-full flex justify-evenly items-center px-4'>
                    <div className='py-2 px-4 bg-background rounded-2xl'>
                      <FontAwesomeIcon className='text-primary h-10 w-6' icon={faSquareFacebook}/>
                    </div>
                    <div className='py-2 px-4 bg-background rounded-2xl'>
                      <FontAwesomeIcon className='text-primary h-10 w-6'  icon={faInstagram}/>
                    </div>
                    <div className='py-2 px-4 bg-background rounded-2xl'>
                      <FontAwesomeIcon className='text-primary h-10 w-6'  icon={faSquareThreads}/>
                    </div>
                    <div className='py-2 px-4 bg-background rounded-2xl'>
                      <FontAwesomeIcon className='text-primary h-10 w-6'  icon={faEnvelope}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About