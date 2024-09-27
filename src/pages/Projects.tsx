import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../context/Theme"
import { Appbar } from "../components/Appbar";
import { PortfolioDataContext } from "../context/User";
import { ThreeDCardDemo } from "../components/ThreeDCard";
import { Search } from "../components/Search";
import { Tag } from "../components/Tag";

export function Projects () {
    const context = useContext(ThemeContext);
    const userData = useContext(PortfolioDataContext);
    const [technologies, setTechnologies] = useState<string []>([]);
    const lightModeStyle = "bg-white text-black";
    useEffect(() => {
        let tempArr: string[] = [];
        userData.Projects.forEach(e => {
            tempArr.push(...(e.metadata.technologies))
        })
        tempArr = tempArr.filter((value, index, self) => self.indexOf(value) === index)
        setTechnologies(tempArr)
    }, [userData])
    return <div className={`${context?.theme === "dark" ? 'bg-slate-950' : lightModeStyle}`}>
        <Appbar />
        <div className="w-4/5 pt-10 mx-auto">
            <Search  theme={context?.theme} label="Projects" onChange={() => {
                console.log("Hello From Projects Page")
            }}/>
            <div className="mt-2 py-3 text-white">
                {technologies.map(tech => <Tag technologie={tech}/>)}
            </div>
        </div>
        <div className="mx-auto px-4 flex flex-col items-center lg:flex-row lg:items-start gap-3 w-4/5 min-h-screen">
            {userData.Projects.map(project => <ThreeDCardDemo {...project} theme={context?.theme}/>)}
        </div>
    </div>
}