import React from 'react'
import cssIcon from "../../../assets/Icons/css-3.svg";
import gitIcon from "../../../assets/Icons/git.svg";
import htmlIcon from "../../../assets/Icons/html-5.svg";
import jsIcon from "../../../assets/Icons/js.svg";
import laravelIcon from "../../../assets/Icons/laravel.svg";
import npmIcon from "../../../assets/Icons/npm.svg";
import phpIcon from "../../../assets/Icons/php.svg";
import pythonIcon from "../../../assets/Icons/python.svg";
import reactIcon from "../../../assets/Icons/react.svg";
import TechIcon from '@/Components/TechIcon';

function Backend() {
    const techs = [
        {icon: cssIcon,label: "BACKEND",},
        {icon: gitIcon,label: "Git",},
        {icon: htmlIcon,label: "HTML",},
        {icon: jsIcon,label: "JavaScript",},
        {icon: laravelIcon,label: "Laravel",},
        {icon: npmIcon,label: "NPM",},
        {icon: phpIcon,label: "PHP",},
        {icon: pythonIcon,label: "Python",},
        {icon: reactIcon,label: "React",},
    ]

    return (
        <>
            {techs.map((tech, index) => (
                <TechIcon key={index} img={tech.icon} label={tech.label}/>
            ))}
        </>
    )
}

export default Backend