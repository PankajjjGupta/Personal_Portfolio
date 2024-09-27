import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

export function SkillCarousel () {
    const context = useContext(ThemeContext);
    const theme = context?.theme
    return <CCarousel className="w-[250px] px-5" controls dark={theme !== "dark"}>
        <CCarouselItem>
            <CImage className="p-2" src={"https://icons.veryicon.com/png/System/Hex/html%205.png"} alt="slide 2" />
            <div className="font-semibold text-center">
                HTML
            </div>
        </CCarouselItem>
        <CCarouselItem>
            <CImage className="p-2" src={"https://img.icons8.com/fluent/512/css3.png"} alt="slide 2" />
            <div className="font-semibold text-center">
                CSS
            </div>
        </CCarouselItem>
        <CCarouselItem >
            <CImage className="p-2" src={"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"} alt="slide 1" />
            <div className="font-semibold text-center">
                JS
            </div>
        </CCarouselItem>
        <CCarouselItem>
            <CImage className="p-2" src={"https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg"} alt="slide 2" />
            <div className="font-semibold text-center">
                Tailwind
            </div>
        </CCarouselItem>
        <CCarouselItem>
            <CImage className="p-2" src={"https://img.icons8.com/color/512/nodejs.png"} alt="slide 2" />
            <div className="font-semibold text-center">
                Node JS
            </div>
        </CCarouselItem>
        <CCarouselItem>
            <CImage className="p-2" src={"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png"} alt="slide 2" />
            <div className="font-semibold text-center">
                React
            </div>
        </CCarouselItem>
        <CCarouselItem >
            <CImage className="p-2" src={"https://riadhadrani.github.io/slick-portfolio-svelte/logos/ts.png"} alt="slide 1" />
            <div className="font-semibold text-center">
                Typescript
            </div>
        </CCarouselItem>
  </CCarousel>
}