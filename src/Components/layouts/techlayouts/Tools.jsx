import React from 'react'
import TechIcon from '@/Components/TechIcon';
import github from '../../../assets/Icons/git.svg';
import gitbash from '../../../assets/Icons/git-bash.svg';
import bit from '../../../assets/Icons/bitbucket-svgrepo-com.svg';
import laragon from '../../../assets/Icons/laragon-svgrepo-com.svg';
import awsS3 from '../../../assets/Icons/aws-simple-storage-serviCe.svg';
import { Import } from 'lucide-react';

function Tools() {
    const techs = [
        {icon: github,label: "GITHUB",},
        {icon: gitbash,label: "GITBASH",},
        {icon: bit,label: "BITBUCKET",},
        {icon: laragon,label: "LARAGON",},
        {icon: awsS3,label: "AWS S3",},
    ]

    return (
        <>
            {techs.map((tech, index) => (
                <TechIcon key={index} img={tech.icon} label={tech.label}/>
            ))}
        </>
    )
}

export default Tools