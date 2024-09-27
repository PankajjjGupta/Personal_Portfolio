import { createContext } from "react";

interface Project {
    name: string;
    metadata: {
        type: string;
        period: string;
        description: string;
        date: string;
        technologies: string[];
    };
}

interface Skills {
    tech_type : string,
    values : string[]
}

interface Education {
    name: string;
    metadata: {
        college_name: string;
        country: string;
        period: string;
    };
}

interface PortfolioData {
    Projects: Project[];
    Skills: Skills[];
    Education: Education[];
}

// const PortfolioDataContext = createContext({
//     Projects : [
//         {
//             name : "Slick Portfolio",
//             metadata : {
//                 type : "Website Template",
//                 period : "1 day",
//                 description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//                 date : "September 2024",
//                 technologies : ["Typescript"]
//             }
//         },
//         {
//             name : "Slick Portfolio",
//             metadata : {
//                 type : "Website Template",
//                 period : "1 day",
//                 description : "A Vercel-like developer portfolio website template made with Typescript and SvelteKit",
//                 date : "September 2024",
//                 technologies: ["Typescript", "Saas"]
//             }
//         }
//     ],
//     Skills : [
//         "TypeScript",
//         "Saas",
//         "JS"
//     ],
//     Education : [
//         {
//             name : "Bachelor degree of Information Technology",
//             metadata : {
//                 college_name : "L.S Raheja",
//                 country : "India",
//                 period : "3 years"
//             }
//         }
//     ]  
// })

export const defaultValue: PortfolioData = {
    Projects: [
        {
            name : "Slick Portfolio 1",
            metadata : {
                type : "Website Template",
                period : "1 day",
                description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!",
                date : "September 2024",
                technologies : ["Typescript", "Javascript"]
            }
        },
        {
            name : "Slick Portfolio 2",
            metadata : {
                type : "Website Template",
                period : "1 day",
                description : "A Vercel-like developer portfolio website template made with Typescript and SvelteKit",
                date : "September 2024",
                technologies: ["Typescript", "ReactJs"]
            }
        }
    ],
    Skills: [
        {
            tech_type : "Programming Languages",
            values : ["Javascript", "Typescript"]
        },
        {
            tech_type : "Markup & Style",
            values : ["CSS", "HTML"]
        },
        {
            tech_type : "Frameworks & Libraries",
            values : ["ReactJs", "NextJs", "ExpressJs", "Mongoose", "Prisma"]
        },
        {
            tech_type : "Databases",
            values :  ["MongoDB", "Postgres"]

        }
    ],
    Education: [
        {
            name : "Bachelor degree of Information Technology",
            metadata : {
                college_name : "L.S Raheja",
                country : "India",
                period : "3 years"
            }
        }
    ]
}

export const PortfolioDataContext = createContext<PortfolioData>(defaultValue);