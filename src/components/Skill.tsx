import typescript from '../assets/skill_icons/typescript.png'
import reactjs from '../assets/skill_icons/reactjs.svg'
import javascript from '../assets/skill_icons/javascript.png'
import css from '../assets/skill_icons/css.svg'
import html from '../assets/skill_icons/html.svg'
import nextjs from '../assets/skill_icons/nextjs.png'
import expressjs from '../assets/skill_icons/expressjs.jpg'
import mongoose from '../assets/skill_icons/mongoose.jpg'
import prisma from '../assets/skill_icons/prisma.png'
import mongodb from '../assets/skill_icons/mongodb.svg'
import postgres from '../assets/skill_icons/postgres.png'

const SkillImages: {[key: string]: string} = {
    typescript, 
    reactjs, 
    javascript, 
    css, 
    html,
    nextjs,
    expressjs,
    mongoose,
    prisma,
    mongodb,
    postgres
}

interface SkillProps {
    isDarkMode?: boolean;
    skillName: string;
}

export function Skill({ isDarkMode, skillName }: SkillProps) {
    const lightGradient = 'linear-gradient(90deg, rgba(32,20,239,0) 0%, rgba(255,255,255,0.9473039215686274) 0%, rgba(255,255,255,0.8352591036414566) 59%, rgba(0,0,0,0) 100%)';
    const darkGradient = "linear-gradient(90deg, rgba(32,20,239,0) 0%, rgba(0,0,0,0.9473039215686274) 0%, rgba(0,0,0,0.8352591036414566) 27%, rgba(0,0,0,0) 100%)";

    const labelText = skillName
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");

    const skillImage = skillName.split("-").join("").toLowerCase();
    console.log("skillimage ", skillImage)
    return (
        <div className={`
            ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}
            flex flex-row items-center
            h-16 my-2 rounded-2xl
            w-full border border-neutral-200 overflow-hidden
        `}>
            <div className="flex items-center justify-start w-3/5 p-4">
                <p className="font-normal text-sm sm:text-base md:text-lg m-0 truncate">{labelText}</p>
            </div>
            <div 
                style={{ 
                    backgroundImage: `${isDarkMode ? darkGradient : lightGradient}, url(${SkillImages[skillImage]})`,
                }} 
                className="
                    w-2/5 h-full
                    bg-center bg-no-repeat bg-cover
                    opacity-70
                "
            />
        </div>
    );
}