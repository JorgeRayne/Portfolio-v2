import React from 'react'

function TechNav({ category, setCategory }) {
    const handleCategory = (tech) => {
        setCategory(tech)
    }

    return (
        <nav>
            <ul className='flex justify-center items-center gap-8 font-mono font-medium cursor-pointer'>
                <li
                    className={`relative cursor-pointer after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[1px] after:bg-primary after:transition-all after:duration-300
                        ${category === "stack"
                        ? "after:w-full"
                        : "after:w-0"
                        }
                    `}
                    onClick={() => handleCategory('stack')}>
                    TECH
                </li>
                <li className={`relative cursor-pointer after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[1px] after:bg-primary after:transition-all after:duration-300
                    ${category === "tools"
                    ? "after:w-full"
                    : "after:w-0"
                    }
                `} onClick={() => handleCategory('tools')}>
                    TOOLS
                </li>
            </ul>
        </nav>
    )
}

export default TechNav