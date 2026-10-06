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
                    <div className='text-8xl font-bold text-primary font-heading font-mono w-full'>Jorge Rayne</div>
                    <div className='pl-4 my-5'>
                        <div className='text-secondary font-mono font-base'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi similique quaerat reprehenderit illum recusandae placeat voluptatem distinctio nostrum quidem odio magni at, eaque pariatur culpa maiores inventore sit sapiente praesentium.
                            Illum voluptate molestiae ipsam totam quia quisquam quos sint omnis nesciunt itaque consectetur est, iusto laboriosam, eveniet sunt, quo tempora repellat explicabo laudantium officiis culpa adipisci. Voluptate quidem eveniet quia.
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='flex justify-start items-center gap-5 w-full font-mono text-text'>
                            <div>
                                <div className='py-4 px-12 text--card rounded-full bg-card border border-white text-2xl relative'>
                                    <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,#2A7B9B_0%,#57E6D9_0%,#000_100%)]  rounded-full opacity-25" />
                                    About me
                                </div>
                            </div>
                            <div>
                                <button className='opacity-80 py-4 px-12 text--card rounded-full bg-card border border-white text-2xl'>About Me</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Main