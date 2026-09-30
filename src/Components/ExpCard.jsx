import React from 'react'

function ExpCard({children}) {
  return (
    <div className='flex gap-3 p-4 font-mono'>
        {children}
    </div>
  )
}

export default ExpCard