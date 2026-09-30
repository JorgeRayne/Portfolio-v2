import React from 'react'

function TechIcon({img, label}) {
  return (
    <div>
        <div className='bg-card py-2 px-8 flex justify-center items-center flex-col rounded-3xl border border-white/[0.1]'>
            <img src={img} alt={label} className='w-10'/>
            <p className='font-mono'>{label.toUpperCase()}</p>
        </div>
    </div>
  )
}

export default TechIcon