import React from 'react'

function TechIcon({img, label}) {
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <div className="bg-card w-full h-[50%] flex flex-col justify-center items-center rounded-2xl">
        <img
          src={img}
          alt={label}
          className="w-8 h-8 object-contain"
        />

        <p className="font-mono text-sm">
          {label.toUpperCase()}
        </p>
      </div>
    </div>
  )
}

export default TechIcon