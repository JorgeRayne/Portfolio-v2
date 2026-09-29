import React from 'react'

function NavLinks({ linkTitle }) {
  return (
    <div>
      <a className='font-medium font-mono text-secondary' href={`#${linkTitle.toLowerCase()}`}>{linkTitle}</a>
    </div>
  )
}

export default NavLinks;