import React from 'react'

function NavLinks({ linkTitle }) {
  console.log(linkTitle)
  return (
    <div>
      <a className='text-2xl font-semibold text-gray-100' href={`#${linkTitle}`}>{linkTitle}</a>
    </div>
  )
}

export default NavLinks;