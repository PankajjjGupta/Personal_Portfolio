import { useContext } from "react"
import { Search } from "../components/Search"
import { ThemeContext } from "../context/Theme"
import { Appbar } from "../components/Appbar"
import { Skill } from "../components/Skill"
import { PortfolioDataContext } from "../context/User"
import { LabelLine } from "../components/LabelLine"

export function Skills() {
  const context = useContext(ThemeContext)
  const { Skills } = useContext(PortfolioDataContext)
  const isDarkMode = context?.theme === "dark"

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Appbar />
      <div className="flex-grow overflow-y-auto">
        <div className="w-4/5 pt-10 mx-auto pb-5">
          <Search
            theme={context?.theme}
            label="Skills"
            onChange={() => {
              console.log("Hello From Projects Page")
            }}
          />

          {Skills.map((skills, index) => (
            <div key={index} className="mb-6">
              <LabelLine isDarkMode={isDarkMode} labelText={skills.tech_type} />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {skills.values.map((skill) => (
                  <Skill key={skill} isDarkMode={isDarkMode} skillName={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}