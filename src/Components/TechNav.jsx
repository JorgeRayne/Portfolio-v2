import React from 'react'

function TechNav({ setCategory }) {
    const handleCategory = (tech) => {
        setCategory(tech)
    }

    return (
        <nav>
            <ul className='flex justify-center items-center gap-8 font-mono font-medium cursor-pointer'>
                <li onClick={() => handleCategory('backend')}>
                    BACKEND
                </li>
                <li onClick={() => handleCategory('frontend')}>
                    FRONTEND
                </li>
                <li onClick={() => handleCategory('tools')}>
                    TOOLS
                </li>
            </ul>
        </nav>
    )
}

export default TechNav