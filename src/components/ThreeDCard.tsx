import { 
  RiExchange2Fill,
  RiTimeLine 
} from "@remixicon/react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import typescript from "../assets/skill_icons/typescript.png";
import javascript from "../assets/skill_icons/javascript.png";
import reactjs from "../assets/skill_icons/reactjs.png";

interface ProjectProps {
  name: string;
  metadata: {
      type: string;
      period: string;
      description: string;
      date: string;
      technologies: string[];
  };
}

type Theme = string | undefined;

type FinalProjectProps =  ProjectProps & {
  theme : Theme
}


// Mapping technology names to image sources
const technologyImages: { [key: string]: string } = {
    typescript: typescript,
    javascript: javascript,
    reactjs: reactjs,
    // Add more mappings as needed
};

export function ThreeDCardDemo(props: FinalProjectProps) {
  console.log(props);
  return (
    <CardContainer className="w-full md:w-96 inter-var">
      <CardBody className={`${props.theme === "dark" ? "bg-black text-stone-300" : "bg-white text-black"}  relative group/card border-black/[0.1] w-full sm:w-[30rem] h-[550px] rounded-xl p-10 border`}>
        <CardItem className="mb-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-24 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem className="pb-2 mb-1 border-zinc-500 border-b w-full text-xl font-bold">
          {props.name}
        </CardItem>
        <CardItem className="flex items-center gap-2 pb-2 mb-1 border-zinc-500 border-b w-full text-md font-normal">
          <RiExchange2Fill size={15} />
          {props.metadata.type}
        </CardItem>
        <CardItem as="p" className="flex items-center gap-2 pb-2 border-zinc-500 border-b w-full text-md font-normal">
          <RiTimeLine size={15} />
          {props.metadata.period}
        </CardItem>
        <CardItem as="p" className="flex border-zinc-500 border-b gap-2 pb-2 w-full text-md font-normal h-[200px]">
          {props.metadata.description}
        </CardItem>
        
        <div className="flex items-center">
          {props.metadata.technologies.map(technology => (
            <CardItem
              as="button"
              key={technology} // Use the technology name as the key
              className="border-zinc-500 border-1 mr-2 h-9 w-9 px-2 rounded-xl text-xs font-normal dark:text-white flex items-center justify-center"
            >
              <img src={technologyImages[technology.toLowerCase()]} alt={technology} className="h-5 w-5" />
            </CardItem>
          ))}
        </div>
      </CardBody>
    </CardContainer>
  );
}
