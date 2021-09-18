const benConstants = {
    LEGAL_NAME: "সুভাষিস চক্রবর্তী",
    NAVIGATION_ITEMS: [
        { 'title': 'আমি()', 'logo_path': 'sss', 'path': '/', 'component': 'Home' },
        { 'title': 'কাজ()', 'logo_path': 'sss', 'path': '/WorkExp', 'component': 'WorkExp' },
        { 'title': 'দক্ষতা()', 'logo_path': 'sss', 'path': '/Skills', 'component': 'Skills' },
        { 'title': 'প্রকল্প_ সাফল্য()', 'logo_path': 'sss', 'path': '/Projects', 'component': 'Projects' },
        { 'title': 'যোগাযোগ()', 'logo_path': 'sss', 'path': '/Contacts',  'component': 'Contacts' }
    ],
    PAGE_TITLES: {
        PAGE_1: '',
        PAGE_2: 'কর্মদক্ষতা',
        PAGE_3: 'দক্ষতা',
        PAGE_4: 'প্রকল্প',
        PAGE_6: 'যোগাযোগ'
    },
    JOB_PROFILE: 'MEAN/MERN ডেভেলপার, ডেটা ইঞ্জিনিয়ার',
    JOB_COMPANIES: 'PwC India, Ex L&T Technology Services',
    UNIVERSITY_AND_HIGHEST_QUALIFCATION: 'B.Tech CSE, KIIT University',
    CONTACT_INFORMATION: 'www.chaksta.com',
    WORK_EXPERIENCE: [
        {
            company: 'pwc',
            fullName: 'PriceWaterhouse Coopers Services Ltd.',
            startMonthYear: 'ফেব্রুয়ারি 2021',
            endMonthYear: 'বর্তমান',
            profile: 'MEAN/MERN ডেভেলপার, ডেটা ইঞ্জিনিয়ার',
            location: 'কলকাতা, ভারত'
        },
        {
            company: 'ltts',
            fullName: 'L&T Technology Services',
            startMonthYear: 'সেপ্টেম্বর 2018',
            endMonthYear: 'জানুয়ারি 2021',
            profile: 'MEAN স্ট্যাক ডেভেলপার',
            location: 'মহীশূর, ভারত'
        }
    ],
    WORK_EXPIRIENCE_PHRASE: 'দক্ষতা সহ LTTS এবং PwC এ MEAN/MERN স্ট্যাক ডেভেলপার এবং ডেটা ইঞ্জিনিয়ার হিসাবে অভিজ্ঞতা Angular 2+, NodeJs,Salesforce Lightning, TIBCO data virtulization, ADF মানের কোড পরিমাপ এবং AGILE পদ্ধতি অনুসরণ করে প্রকল্প',
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
            PROJECT_NAME: 'সমন্বিত ডেটা ব্যবস্থাপনার জন্য একটি পোর্টাল',
            PROJECT_DATE: 'ফেব্রুয়ারি 2021 থেকে বর্তমান',
            PROJECT_DESCRIPTION: 'বিভিন্ন সম্পদ থেকে তথ্য সহ তথ্য ব্যবস্থাপনার জন্য একটি সমন্বিত পোর্টাল স্থাপন করা',
            PROJECT_ROLE: 'ডেটা ইঞ্জিনিয়ার হিসেবে কাজ করা, বিভিন্ন রিসোর্স থেকে ডেটা সংগ্রহ করা, লেয়ার করা এবং মডেলিং করা, ইউজার পোর্টাল থেকে আহ্বান করা ওয়েব সার্ভিস তৈরি এবং প্রকাশ করা',
            PROJECT_TOOLS_USED: 'TIBCO Studio, Azure Data Factory'
        },
        {
            PROJECT_NAME: 'একদল টেলিকম কোম্পানির জন্য কার্যকলাপ ব্যবস্থাপনা ব্যবস্থা',
            PROJECT_DATE: 'ফেব্রুয়ারি 2019 থেকে জানুয়ারি 2021',
            PROJECT_DESCRIPTION: 'মার্কিন যুক্তরাষ্ট্রে টেলিকম শিল্পের জন্য, এটি তথ্য সংগ্রহ থেকে শুরু করে একটি টাওয়ার নির্মাণের সময় ঠিক করা এবং তারপর রক্ষণাবেক্ষণ, শ্রেণিবিন্যাসের বিভিন্ন ভূমিকার জন্য। সমস্ত ডেটা সিওপি হিসাবে মডিউল যা কাজ এবং বিশ্লেষণাত্মক উদ্দেশ্যে কাজ করে।',
            PROJECT_ROLE: 'একজন ডেভেলপার হিসেবে কাজ করেছেন - নতুন বৈশিষ্ট্য তৈরি করা, বাগ ফিক্স করা, ইউনিট টেস্টিং, কোডের মান বজায় রাখা',
            PROJECT_TOOLS_USED: 'Salesforce lightning, apex, components, triggers, NodeJS, GIT, Mongo DB, SQL, Docker, Visual Studio Code, Putty, WinSCP, Pulse Secure'
        },
        {
            PROJECT_NAME: ' ডকুমেন্ট রিলেশন টেবিল এবং ফাইল আপলোড - POC',
            PROJECT_DATE: ' দিন - অক্টোবর, 20',
            PROJECT_DESCRIPTION: 'একটি একক পৃষ্ঠার অ্যাপ্লিকেশন এবং ফাইল আপলোডে একাধিক সম্পর্কিত ডেটা দেখানো হচ্ছে',
            PROJECT_ROLE: 'ফুল স্ট্যাক ডেভেলপার হিসেবে কাজ করেছেন- Angular JS ব্যবহার করে ফ্রন্টএন্ড ডেভেলপ করা, নোড JS ব্যবহার করে ব্যাকএন্ড, NoSQL db কানেক্ট করা। ব্যাকএন্ডে, উভয় পরিষেবার সংযোগ, সার্ভারে অ্যাপ প্রকাশের জন্য devOps এর অংশ',
            PROJECT_TOOLS_USED: 'Salesforce lightning, apex, components, triggers, NodeJS, GIT, Mongo DB, SQL, Docker, Visual Studio Code, Putty, WinSCP, Pulse Secure'
        },
        {
            PROJECT_NAME: 'ফল শনাক্তকরণ অ্যাপ',
            PROJECT_DATE: 'জানুয়ারি 2019 থেকে ফেব্রুয়ারি 2019',
            PROJECT_DESCRIPTION: 'সেটআপ বা রক্ষণাবেক্ষণের জন্য টেলিকম টাওয়ারে উঁচুতে থাকা একাকী কর্মীদের জন্য একটি জরুরি অ্যাপ, এই অ্যাপটি একটি অ্যালগরিদম ব্যবহার করে পতন সনাক্তকরণ এবং তার উচ্চতর শ্রেণিবিন্যাস বা মেডিকেল ব্যক্তিগতকে সতর্ক করে।',
            PROJECT_ROLE: 'ছায়া বিকাশকারী হিসাবে কাজ করেছেন - নতুন বৈশিষ্ট্যগুলি বিকাশ করা, বাগ সংশোধন করা, কোডের মান বজায় রাখা',
            PROJECT_TOOLS_USED: ' NodeJS, AngularJS, Mongo DB, devOps – docker and Nginx, Visual Studio Code, git'
        },
        {
            PROJECT_NAME: 'সোশ্যাল মিডিয়া ডেটা সংগ্রহ- POC',
            PROJECT_DATE: 'নভেম্বর 2018 থেকে জানুয়ারী 2020',
            PROJECT_DESCRIPTION: 'ইউটিউবের মতো সোশ্যাল মিডিয়া থেকে ব্যবহারকারীর পরিসংখ্যান পাওয়া, ড্যাশবোর্ড UI- এ দেখান',
            PROJECT_ROLE: 'একজন ডেভেলপার হিসেবে কাজ করেছেন - নতুন বৈশিষ্ট্য তৈরি করা, বাগ ফিক্স করা, ইউনিট টেস্টিং, কোডের মান বজায় রাখা',
            PROJECT_TOOLS_USED: 'NodeJS, AngularJS, Mongo DB, Visual Studio Code'
        },
        {
            PROJECT_NAME: 'স্মার্ট ডোর লক',
            PROJECT_DATE: 'কলেজ সেমিস্টার প্রকল্প',
            PROJECT_DESCRIPTION: 'মুখ স্বীকৃতি ব্যবহার করে দরজা লক খুলুন',
            PROJECT_ROLE: 'একটি বিকাশকারী হিসাবে কাজ, প্রকল্প শুরু থেকে নির্মাণ। সব ডকুমেন্ট তৈরি করা, ফ্রন্ট এন্ড, ব্যাক এন্ড, ডিবি স্কিমা, সকল সার্ভিস সংযুক্ত করা',
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

export default benConstants;