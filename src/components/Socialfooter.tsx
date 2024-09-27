import { 
    RiGithubLine, 
    RiLinkedinBoxLine,
    RiTwitterXLine,
    RiInstagramLine
} from "@remixicon/react";
export function Socialfooter () {
    return <div className="flex gap-1 cursor-pointer justify-center lg:justify-start">
        <RiGithubLine  size={20}/>
        <RiLinkedinBoxLine  size={20}/>
        <RiTwitterXLine  size={20}/>
        <RiInstagramLine size={20}/>
    </div>
}