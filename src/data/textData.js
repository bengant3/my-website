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
            "🐿️ Senior at Vanderbilt University in Nashville, TN.",
            "👨‍💻 Studying computer science, math, and environmental studies.",
            "📍 Originally from Chapel Hill, NC.",
            "🌎 Interested in engineering software to better our relationship with our planet.",
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
        ]
    },
    {
        type: "ulobject",
        title: "Some of my Experience",
        data: [
            {
                title: "Capital One",
                description: "TBD",
            },
            {
                title: "Vanderbilt Change++",
                description: "Developed a multi-interface fitness tracker for a Nashville nonprofit. "
                //Engineered a React front-end, tested custom APIs, spearheaded UX design discussions, beta tested with future users, and gained experience sprint planning.
            },
            {
                title: "United States Geological Survey",
                description: "Modified an existing codebase to suit the needs of a wildlife imagery deep learning project."
                //Performed bug fixes, code cleanup, and feature implementation in the React/TypeScript codebase.
            },
        ]
    },
    {
        type: "text",
        title: "Projects I've Worked on",
        data: [
            "FlashMob...under construction",
            "As a part of a capstone course, I investigated the energy footprint of various blockchain consensus algorithms and how blockchain implementations affect the environmental and social outcomes associated with peer-to-peer microgrids that use a blockchain platform. You can read it here.",
            "Kanban: Created a simple, Trello-like task manager using Electron with a TypeScript/React frontend, Node/Express backend, and MongoDB database. Find it on my github.",
            "I researched the energy footprints of data centers with a special emphasis on the Meta data center located in Forest City, NC, to understand the hidden energy footprint of the digital world and how these data centers affect local infrastructure and socio-political landscapes.",
            "Recycle Nashville: A simple React-based website that informs users about recycling best practices in Nashville, TN. Website includes an interactive quiz and Google Maps API to the nearest recycling center among other pages. Find it at thewebsiteurl.",
        ]
    },
    {
        type: "ultext",
        title: "Some classes I've Taken",
        data: [
            "Software Engineering",
            "Intermediate Software Design",
            "Computing and the Environment",
            "Algorithms",
            "Program Design and Data Structures",
            "Probability and Statistics",
            "Environment and Development",
        ]
    },
]

export default data;

