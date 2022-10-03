//about me blurb
//skills
//experience
//projects (technical and non technical)
//classes

const data = [
    {
        type: "text",
        title: "About Me",
        data: [
            "Senior at Vanderbilt University in Nashville, TN.",
            "Studying computer science, math, and environmental studies.",
            "Originally from Chapel Hill, NC.",
            "Interested in engineering software to better our relationship with our planet.",
        ]
    },
    {
        type: "ultext",
        title: "Skills",
        data: [
            "JavaScript/HTML/CSS",
            "C++",
            "React/React Native",
            "Node/Express",
            "Python",
            "Java",
            "TypeScript",
            "Docker",
            "Electron",
            "MongoDB",
        ]
    },
    {
        type: "ulobject",
        title: "Some of my Experience",
        data: [
            {
                title: "Capital One",
                description: "Constructing a workflow and approval monitoring system, and a user activity tracker for a internal React/Node UI tool.",
            },
            {
                title: "Vanderbilt Change++",
                description: "Developed a multi-interface mobile fitness tracker for a Nashville nonprofit. React Native, Rest APIs, UX design. "
                //Engineered a React front-end, tested custom APIs, spearheaded UX design discussions, beta tested with future users, and gained experience sprint planning.
            },
            {
                title: "United States Geological Survey",
                description: "Performed bug fixes, code cleanup, and feature implementation to modify an open-source React/TypeScript codebase."
            },
        ]
    },
    {
        type: "ullink",
        title: "Projects I've Worked on",
        data: [
            {
                title: "Micro Scale, Macro Impact",
                link: "/static/docs/BlockchainAndMicrogrids.pdf",
                description: ": an investigation into the energy footprint of different blockchain implementations and how the technology can be used in energy grids.",
            },
            {
                title: "Kanban",
                link: "https://github.com/bengant3/kanban",
                description: ": a Trello-like task manager using Electron with a TypeScript/React frontend and Node/Express backend.",
                
            },
            {
                title: "Forest City Data Center",
                link: "/static/docs/ForestCity.pdf",
                description: ": a research project about the socioeconomic and environmental impact of data centers, with special attention to a case study in Forest City, NC.",
            },    
            {
                title: "Recycle Nashville",
                link: "https://recyclenashville.gatsbyjs.io/",
                description: ": a React-based website including local recycling info, interactive quiz built from scratch, and Google Maps integration.",
            },
        ]
    },
    {
        type: "ultext",
        title: "Some classes I've Taken",
        data: [
            "Principles of Software Engineering",
            "Intermediate Software Design",
            "Computing and the Environment",
            "Algorithms",
            "Program Design and Data Structures",
            "Operating Systems",
            "Probability and Statistics",
            "Environment and Development",
        ]
    },
]

export default data;

