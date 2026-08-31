import React from 'react'

function NavLinks({ linkTitle }) {
  return (
    <div>
      <a className='text-3xl font-heading font-semibold text-secondary' href={`#${linkTitle.toLowerCase()}`}>{linkTitle}</a>
    </div>
  )
}

export default NavLinks;