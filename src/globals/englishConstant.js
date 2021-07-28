import { StayCurrentLandscapeTwoTone } from "@material-ui/icons";

const enConstants = {
    LEGAL_NAME: "Subhasis Chakraborty",
    NAVIGATION_ITEMS: [
        { 'title': 'me()', 'logo_path': 'sss', 'path': '/', 'component': 'Home' },
        { 'title': 'work()', 'logo_path': 'sss', 'path': '/WorkExp', 'component': 'WorkExp' },
        { 'title': 'skills()', 'logo_path': 'sss', 'path': '/Skills', 'component': 'Skills' },
        { 'title': 'projects_achievements()', 'logo_path': 'sss', 'path': '/Projects', 'component': 'Projects' },
        // { 'title': 'gallery()', 'logo_path': 'sss', 'path': '/' },
        // { 'title': 'quotes()', 'logo_path': 'sss', 'path': '/' },
        { 'title': 'contact()', 'logo_path': 'sss', 'path': '/Contacts',  'component': 'Contacts' }
    ],
    PAGE_TITLES: {
        PAGE_1: '',
        PAGE_2: 'Work Experience',
        PAGE_3: 'Skills',
        PAGE_4: 'Projects',
        PAGE_6: 'Contacts'
    },
    JOB_PROFILE: 'MEAN/MERN Developer, Data Engineer',
    JOB_COMPANIES: 'PwC India, Ex L&T Technology Services',
    UNIVERSITY_AND_HIGHEST_QUALIFCATION: 'B.Tech CSE, KIIT University',
    CONTACT_INFORMATION: 'www.chaksta.com',
    WORK_EXPERIENCE: [
        {
            company: 'pwc',
            fullName: 'PriceWaterhouse Coopers Services Ltd.',
            startMonthYear: 'Febuary 2021',
            endMonthYear: 'Present',
            profile: 'MEAN/MERN Stack Developer, Data Engineer',
            location: 'Kolkata, IN'
        },
        {
            company: 'ltts',
            fullName: 'L&T Technology Services',
            startMonthYear: 'September 2018',
            endMonthYear: 'January 2021',
            profile: 'MEAN Stack Developer',
            location: 'Mysore, IN'
        }
    ],
    WORK_EXPIRIENCE_PHRASE: 'of experience as a MEAN/MERN Stack developer and Data engineer in LTTS and PwC with expertise in Angular 2+, NodeJs,Salesforce Lightning, TIBCO data virtulization, ADF projects with quality code measures and following AGILE methodology',
    SKILLS: {
        SKILL_SET_1: [ // RATE OUT OF 100
            {
                SKILL: 'MEAN / MERN stack',
                RATE: '85'
            },
            {
                SKILL: 'Node Js / Express Framework',
                RATE: '90'
            },
            {
                SKILL: 'Angular Js / Angular Material',
                RATE: '80'
            },
            {
                SKILL: 'React Js',
                RATE: '40'
            },
            {
                SKILL: 'Ionic / Cordova',
                RATE: '80'
            },
            {
                SKILL: 'Veu Js,Polymer Js',
                RATE: '60'
            }
        ],
        SKILL_SET_2: [ // RATE OUT OF 100
            {
                SKILL: 'Salesforce Lightning/ Apex/ Triggers/ Aura components',
                RATE: '70'
            },
            {
                SKILL: 'TIBCO Data Virtualization',
                RATE: '80'
            },
            {
                SKILL: 'Git/ Github / GitLab',
                RATE: '80'
            },
            {
                SKILL: 'JavaScript, HTML/CSS/Bootstrap/material UI',
                RATE: '95'
            },
            {
                SKILL: 'Databases - SQL / NO-SQL / Mongo DB',
                RATE: '85'
            }
        ],
        SKILL_SET_3: [ // RATE OUT OF 100
            {
                SKILL: 'MICROSERVICES',
                RATE: '90'
            },
            {
                SKILL: 'SLDC / AGILE Methodologies',
                RATE: '90'
            },
            {
                SKILL: 'Unit Testing -  Chai Mocha / Postman / SOAP UI / JMETER',
                RATE: '90'
            },
            {
                SKILL: 'SONARQUBE -  Maintaining Code Metrics',
                RATE: '90'
            },
            {
                SKILL: 'Azure Data Factory/ Basics of Python/ OpenCV / IOT / Arduino Programming / JSP/ Servlets',
                RATE: '80'
            },
        ]
    },
    PROJECTS : [
        {
            PROJECT_NAME: 'A portal for integrated data management',
            PROJECT_DATE: 'Feb 2021 to Present',
            PROJECT_DESCRIPTION: 'Setting up an integrated portal for data management with data from various resources',
            PROJECT_ROLE: 'Working as a data engineer, gathering, layering, and modelling data from various resource, creating and exposing web services to be called from User portal',
            PROJECT_TOOLS_USED: 'TIBCO Studio, Azure Data Factory'
        },
        {
            PROJECT_NAME: 'Activity Management system for a group of telecom companies',
            PROJECT_DATE: 'Feb 2019 to Jan 2021',
            PROJECT_DESCRIPTION: 'For telecom industry in the US, this deals right from information gathering while building up a tower to setting up and then maintenance, for different roles in hierarchy. All data are module as COP which is worked on for operational and analytical purposes.',
            PROJECT_ROLE: 'Worked as a developer - developing new features, fixing bugs, unit testing, maintaining code quality',
            PROJECT_TOOLS_USED: 'Salesforce lightning, apex, components, triggers, NodeJS, GIT, Mongo DB, SQL, Docker, Visual Studio Code, Putty, WinSCP, Pulse Secure'
        },
        {
            PROJECT_NAME: ' Document relation table and file upload – POC',
            PROJECT_DATE: '2 days - Oct,20',
            PROJECT_DESCRIPTION: 'Showing multiple related data in a single page application and file uploa',
            PROJECT_ROLE: 'Worked as a Full stack Developer- Developing the frontend using Angular JS, backend using Node JS, Connecting NoSQL db. to backend, connecting both the services, Part of devOps for publishing the app in server',
            PROJECT_TOOLS_USED: 'Salesforce lightning, apex, components, triggers, NodeJS, GIT, Mongo DB, SQL, Docker, Visual Studio Code, Putty, WinSCP, Pulse Secure'
        },
        {
            PROJECT_NAME: 'Fall Detecting App',
            PROJECT_DATE: 'Jan 2019 to Feb 2019',
            PROJECT_DESCRIPTION: 'An emergency app for lone workers who are high up in telecom towers for setup or maintenance, this app used an algorithm to detect the fall detection and alert his higher hierarchy or medical personal.',
            PROJECT_ROLE: 'Worked as a shadow developer - developing new features, fixing bugs, maintaining code quality',
            PROJECT_TOOLS_USED: ' NodeJS, AngularJS, Mongo DB, devOps – docker and Nginx, Visual Studio Code, git'
        },
        {
            PROJECT_NAME: 'Social Media data collection - POC',
            PROJECT_DATE: 'Nov 2018 to Jan 2020',
            PROJECT_DESCRIPTION: 'Getting user stats from social media like YouTube, show up in Dashboard UI',
            PROJECT_ROLE: 'Worked as a developer - developing new features, fixing bugs, unit testing, maintaining code quality',
            PROJECT_TOOLS_USED: 'NodeJS, AngularJS, Mongo DB, Visual Studio Code'
        },
        {
            PROJECT_NAME: 'Smart Door Lock',
            PROJECT_DATE: 'College semester project',
            PROJECT_DESCRIPTION: 'Open door lock using face recognition',
            PROJECT_ROLE: 'Worked as a developer, building the project from scratch. Creating all documents, front end, back end, DB schemas, connecting all services',
            PROJECT_TOOLS_USED: ' Python, OpenCV, IOT, Arduino programming, Visual Studio Code, PyCharm, Arduino'
        }
    ],
    CONTACTS : [
        {
            NAME : 'LinkedIn',
            LINK : '',
            ICON : 'linkedIn',
            ALT_TEXT: 'LinkedIn'
        },
        {
            NAME : 'Facebook',
            LINK : '',
            ICON : 'fb',
            ALT_TEXT: 'Facebook'
        },
        {
            NAME : 'Gmail',
            LINK : '',
            ICON : 'gmail',
            ALT_TEXT: 'Gmail'
        },
        {
            NAME : 'Git',
            LINK : '',
            ICON : 'git',
            ALT_TEXT: 'GitHub'
        },
        {
            NAME : 'Insta',
            LINK : '',
            ICON : 'insta',
            ALT_TEXT: 'Insta'
        }
    
    ]
}

export default enConstants;