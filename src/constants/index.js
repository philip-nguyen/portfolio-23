export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

const experiences = [
    {
        title: "Associate Software Engineer",
        company_name: "Datacare",
        location: "San Jose, CA",
        date: "Jun 2019 - Oct 2020",
        points: [
        "Innovated documentation access and business logic on the Ahshay web platform that reduced redundant end user workflow clicks by 25%.",
        "Designed and implemented fullstack web solutions in Linux, MySQL, PHP and Git in a test-driven development process that improved workflow processes for utilization reviewers.",
        "Analyzed, identified, and debugged software malfunctions’ root causes to successfully redeploy features in a timely manner.Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Bolt Graphics",
        location: "Sunnyvale, CA (Remote)",
        date: "Dec 2021 - Mar 2023",
        points: [
            "Developed a driver application for 3D model rendering using C++ and Vulkan 1.2.",
            "Designed and implemented test plans for ray tracing modules including unit and integration tests.",
            "Managed software development and test implementations through GitHub version control.",
            "Collaborated on an interdisciplinary team and delivered software features in an agile environment.",
            "Documented software designs, code changes and user guides for developed modules."
        ]
    },
    {
        title: "Associate Software Engineer",
        company_name: "Datacare",
        location: "San Jose, CA",
        date: "Jun 2019 - Oct 2020",
        points: [
        "Innovated documentation access and business logic on the Ahshay web platform that reduced redundant end user workflow clicks by 25%.",
        "Designed and implemented fullstack web solutions in Linux, MySQL, PHP and Git in a test-driven development process that improved workflow processes for utilization reviewers.",
        "Analyzed, identified, and debugged software malfunctions’ root causes to successfully redeploy features in a timely manner.Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Bolt Graphics",
        location: "Sunnyvale, CA (Remote)",
        date: "Dec 2021 - Mar 2023",
        points: [
            "Developed a driver application for 3D model rendering using C++ and Vulkan 1.2.",
            "Designed and implemented test plans for ray tracing modules including unit and integration tests.",
            "Managed software development and test implementations through GitHub version control.",
            "Collaborated on an interdisciplinary team and delivered software features in an agile environment.",
            "Documented software designs, code changes and user guides for developed modules."
        ]
    },
    {
        title: "Associate Software Engineer",
        company_name: "Datacare",
        location: "San Jose, CA",
        date: "Jun 2019 - Oct 2020",
        points: [
        "Innovated documentation access and business logic on the Ahshay web platform that reduced redundant end user workflow clicks by 25%.",
        "Designed and implemented fullstack web solutions in Linux, MySQL, PHP and Git in a test-driven development process that improved workflow processes for utilization reviewers.",
        "Analyzed, identified, and debugged software malfunctions’ root causes to successfully redeploy features in a timely manner.Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Bolt Graphics",
        location: "Sunnyvale, CA (Remote)",
        date: "Dec 2021 - Mar 2023",
        points: [
            "Developed a driver application for 3D model rendering using C++ and Vulkan 1.2.",
            "Designed and implemented test plans for ray tracing modules including unit and integration tests.",
            "Managed software development and test implementations through GitHub version control.",
            "Collaborated on an interdisciplinary team and delivered software features in an agile environment.",
            "Documented software designs, code changes and user guides for developed modules."
        ]
    },
    
];

const projects = [
    {
        name: "Digital Audio Workstation Web App - ClAud-io",
        description: "DAW Sequencer that will play back notes that the user has clicked on",
        date: "Feb 2021 - Dec 2021",
        points: [
            "Developed a web UI for a digital audio sequencer using ReactJS and ToneJS and deployed on AWS.",
            "Integrated with Firebase NoSQL Realtime Database to store user account info and compositions.",
            "Collaborated in a team to design and plan development with mock-ups and documentation."
        ],
        source_code_link: "https://github.com/philip-nguyen/claudio"
    },
    {
        name: "Plant Communicator IoT Device",
        description: "An arduino controller that sends soil hydration notifications through email",
        date: "Sep 2021 - Dec 2021",
        points: [
            "Developed a program and computer system for sensing soil moisture and light with an Arduino microcontroller MKR1000 and C++.",
            "Integrated with Firebase NoSQL Realtime Database to upload and store input data from the microcontroller to allow for data visualization on a React front end web application.",
            "Formalized the computer system specification into a technical final report."
        ],
        source_code_link: "https://github.com/philip-nguyen/plantCommunicator"
    },
    {
        name: "Stock Sandbox",
        description: "A stock tracker dashboard to visualize investments",
        date: "Feb 2021 - May 2021",
        points: [
            "Developed a front end application for stock investments using ReactJS.",
            "Integrated with Flask backend application to interface with Yahoo Finance Python API.",
            "Connected to Firebase to store stock investment information for data visualization."
        ],
        source_code_link: "https://github.com/philip-nguyen/stock-sandbox"
    }
]

export { experiences, projects };