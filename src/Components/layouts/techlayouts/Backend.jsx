import React from 'react'
import TechIcon from '@/Components/TechIcon';
import html from '../../../assets/Icons/html-5.svg';
import css from '../../../assets/Icons/css-3.svg';
import js from '../../../assets/Icons/js.svg';
import python from '../../../assets/Icons/python.svg';
import node from '../../../assets/Icons/node-js-svgrepo-com.svg';
import npm from '../../../assets/Icons/npm.svg';
import react from '../../../assets/Icons/react.svg';
import laravel from '../../../assets/Icons/laravel.svg';
import inertia from '../../../assets/Icons/inertia.svg';
import composer from '../../../assets/Icons/composer-svgrepo-com.svg';
import ts from '../../../assets/Icons/typescript-icon-svgrepo-com.svg';
import sql from '../../../assets/Icons/sql-svgrepo-com.svg';

function Backend() {
    const techs = [
        { icon: html, label: 'HTML' },
        { icon: css, label: 'CSS' },
        { icon: js, label: 'JavaScript' },
        { icon: python, label: 'Python' },
        { icon: node, label: 'Node.js' },
        { icon: npm, label: 'NPM' },
        { icon: react, label: 'React' },
        { icon: laravel, label: 'Laravel' },
        { icon: inertia, label: 'Inertia' },
        { icon: composer, label: 'Composer' },
        { icon: ts, label: 'TypeScript' },
        { icon: sql, label: 'SQL' },
    ];

    return (
        <>
            {techs.map((tech, index) => (
                <TechIcon key={index} img={tech.icon} label={tech.label}/>
            ))}
        </>
    )
}

export default Backend