import { Appbar } from "../components/Appbar";
import { Socialfooter } from "../components/Socialfooter";
import { SkillCarousel } from "../components/SkillCarousel";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

export function Home() {
    const context = useContext(ThemeContext);
    const lightModeStyle = "bg-white text-black";

    return (
        <div className={`${context?.theme === 'dark' ? "bg-black text-white" : lightModeStyle} min-h-screen flex flex-col transition-colors duration-300 `}>
                <Appbar />
            <div className="flex-grow flex items-center justify-center p-2">
                <div className="w-4/5">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="lg:col-span-10 px-2 py-10">
                            <h1 className="font-bold text-5xl md:text-[70px] select-none">
                                Pankaj Gupta,
                            </h1>

                            <div className="flex flex-col justify-center items-center lg:items-start">
                                
                                <div className="text-gray-400 text-xl">
                                    <p>Enthusiastic MERN stack developer in the early stages of my career journey. Passionate about creating web solutions and committed to mastering MongoDB, Express.js, React, and Node.js. Eager to apply my growing skills and contribute fresh perspectives to innovative projects in a collaborative environment.</p>
                                </div>
                            </div>
                            <Socialfooter />
                        </div>
                        <div className="flex flex-col items-center lg:items-start justify-center col-span-2 mt-10 lg:mt-0">
                            <SkillCarousel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}