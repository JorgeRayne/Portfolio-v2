import React from 'react'

function TechIcon({img, label}) {
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <div className="w-full h-full] flex flex-col justify-center items-center rounded-2xl opacity-100 relative">
        <div className='w-8 h-8'>
          <img
            src={img}
            alt={label}
            className=" object-contain w-full"
          />
        </div>

        <p className="font-mono text-sm text-text font-medium">
          {label.toUpperCase()}
        </p>
      </div>
    </div>
  )
}

export default TechIcon