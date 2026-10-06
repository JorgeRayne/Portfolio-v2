import React from 'react'
import {motion} from 'framer-motion'

function NavLinks({ linkTitle, activeSection}) {
  return (
    <div className=''>
      <a className={`
      relative px-4 py-2 text-center
      transition-colors duration-300 ${activeSection === linkTitle.toLowerCase() ? "text-text" : "text-secondary"}`} href={`#${linkTitle.toLowerCase()}`}>
        {linkTitle}
          {activeSection === linkTitle.toLowerCase() && (
            <motion.span
              layoutId="active-nav"
              className="
                absolute
                left-[20%]
                right-[20%]
                bottom-2
                h-[2px]
                rounded-full
                bg-primary
                shadow-[0_0_10px_#57E6D9]
              "
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            />
          )}
      </a>
    </div>
  )
}

export default NavLinks;