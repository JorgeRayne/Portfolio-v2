import React from 'react'

function ExpCard({children}) {
  return (
    <div className='flex gap-3 p-4'>
        {children}
    </div>
  )
}

export default ExpCard