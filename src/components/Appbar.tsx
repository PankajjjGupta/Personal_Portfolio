import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { Logo } from "./Logo"
import { 
    RiDragMoveLine,
    RiSearchLine, 
    RiInstanceLine, 
    RiGraduationCapLine,
    RiFileTextLine,
    RiMoonLine,
    RiSunLine,
    RiMenuLine,
    RiCloseLine
} from "@remixicon/react"
import { ThemeContext } from "../context/Theme"

export function Appbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const context = useContext(ThemeContext)
    const isDarkMode = context?.theme === 'dark'

    function handleTheme(e: React.MouseEvent) {
        e.preventDefault()
        e.stopPropagation()
        const newTheme = isDarkMode ? 'light' : 'dark'
        context?.setTheme(newTheme)
        window.localStorage.setItem("pref_theme", newTheme)
    }

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <>
            {/* Desktop Navigation */}
            <div className={`hidden lg:flex ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} border-b border-stone-200 dark:border-stone-700 w-full justify-center`}>
                <div className="flex w-3/4 justify-between items-center">
                    <Logo logoName="Pankaj Gupta" color={isDarkMode ? "" : "black"}/>
                    <div className="flex gap-3 justify-evenly">
                        <DesktopNavLink to="/" icon={<RiDragMoveLine size={18} />} text="Skills" />
                        <DesktopNavLink to="/projects" icon={<RiInstanceLine size={18} />} text="Projects" />
                        <DesktopNavLink to="/education" icon={<RiGraduationCapLine size={18} />} text="Education" />
                        <DesktopNavLink to="/resume" icon={<RiFileTextLine size={18} />} text="Resume" />
                    </div>
                    <div className="flex gap-4 px-4 cursor-pointer">
                        <RiSearchLine size={18}/>
                        <div onClick={handleTheme}>
                            {isDarkMode ? <RiMoonLine size={18}/> : <RiSunLine size={18}/>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
<div className={`lg:hidden sticky top-0 z-20 w-full ${isDarkMode ? "bg-black text-white" : 'bg-white text-black'}`}>
    {/* Fixed Navbar */}
    <div className="w-full border-b border-stone-700">
        <div className="flex py-3 px-4 justify-between items-center">
            <div className="text-xl font-semibold">{"</>"}</div>
            <div>Pankaj Gupta</div>
            <button onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <RiCloseLine size={18} /> : <RiMenuLine size={18} />}
            </button>
        </div>
    </div>
    
    {/* Mobile Menu */}
    <div 
        className={`fixed z-50 left-0 w-full h-screen 
            ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}  
            overflow-hidden transition-[max-height] duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-[calc(100vh-53px)]' : 'max-h-0'}
        `}
    >
        <nav className={`absolute transition-all top-[-500px] duration-300 ease-in-out flex flex-col space-y-4 p-4 ${isMenuOpen ? 'top-0' : ''}`}>
            <MobileNavLink to="/skills" icon={<RiDragMoveLine size={20} />} text="Skills" />
            <MobileNavLink to="/projects" icon={<RiInstanceLine size={20} />} text="Projects" />
            <MobileNavLink to="/education" icon={<RiGraduationCapLine size={20} />} text="Education" />
            <MobileNavLink to="/resume" icon={<RiFileTextLine size={20} />} text="Resumé" />
            <MobileNavLink to="/search" icon={<RiSearchLine size={20} />} text="Search" />
            <button 
                onClick={handleTheme}
                className="flex items-center space-x-4 py-2 w-full text-left"
            >
                {isDarkMode ? <RiMoonLine size={20} /> : <RiSunLine size={20} />}
                <span>{isDarkMode ? "Dark Theme" : "Light Theme"}</span>
            </button>
        </nav>
    </div>
</div>

        </>
    )
}

function DesktopNavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
    const context = useContext(ThemeContext)
    const isDarkMode = context?.theme === 'dark'
    return (
        <Link 
            className={`${isDarkMode ? "hover:bg-neutral-900" : "hover:bg-neutral-200"} no-underline py-3 px-7 ${isDarkMode ? "text-white" : "text-black"}`}
            to={to}
        >
            <div className="flex gap-2 items-center">
                {icon}
                {text}
            </div>
        </Link>
    )
}

function MobileNavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
    const context = useContext(ThemeContext)
    const isDarkMode = context?.theme === 'dark'
    return (
        <Link 
            className={`flex items-center space-x-4 py-2 ${isDarkMode ? 'text-white' : 'text-black'} no-underline`}
            to={to}
        >
            {icon}
            <span>{text}</span>
        </Link>
    )
}
