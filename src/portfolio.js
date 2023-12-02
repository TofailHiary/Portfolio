/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Al-Tofail Al-Hiary",
  title: "Hi all, Al-Tofail",
  subTitle: emoji(
    "A dedicated Senior Quality Assurance Engineer (ISTQB® CTFL/CTAL-TA/CTAL-TTA) 🚀 with extensive experience in ensuring the quality and reliability of both Web and Mobile applications. Proficient in a range of testing methodologies and tools, including Selenium and Appium, and adept in handling complex quality assurance challenges in diverse environments."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1lg0n7kbTfwvkXEXo-rElKU6B_dAZCC4T/edit?usp=sharing&ouid=112975303881704365343&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/TofailHiary",
  linkedin: "https://www.linkedin.com/in/al-tofail-al-hiary-3268a798/",
  gmail: "tofailhiary@gmail.com",
  facebook: "https://www.facebook.com/tofail.hiary",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DEDICATED SENIOR QA ENGINEER FOCUSED ON EVERY ASPECT OF QUALITY ASSURANCE && QUALITY CONTROL",
  skills: [
    emoji(
      "⚡ Ensuring top-notch quality for Web and Mobile applications through comprehensive testing strategies"
    ),
    emoji("⚡ Skilled in creating and executing detailed test plans for a variety of applications"),
    emoji(
      "⚡ Expert in integrating diverse QA tools and methods for efficient and effective quality assurance"
    ),
    emoji("⚡ Providing end-to-end quality assurance solutions for web and mobile applications"),
    emoji("⚡ Designing and implementing comprehensive test plans and cases"),
    emoji("⚡ Leading QA teams in high-paced environments"),
    emoji("⚡ Continuous learning and applying new QA tools and practices"),
    emoji("⚡ Collaborating closely with development teams for quality optimization"),
    emoji("⚡ Special focus on user experience and usability testing"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
      skillName: "Selenium",
      fontAwesomeClassname: "fas fa-robot"
  },
  {
      skillName: "Appium",
      fontAwesomeClassname: "fas fa-mobile-alt"
  },
  {
      skillName: "Jenkins",
      fontAwesomeClassname: "fas fa-cogs"
  },
  {
      skillName: "JMeter",
      fontAwesomeClassname: "fas fa-tachometer-alt"
  },
  {
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-jira"
  },
  {
      skillName: "Azure DevOps",
      fontAwesomeClassname: "fab fa-microsoft"
  },
  {
      skillName: "Postman",
      fontAwesomeClassname: "fas fa-mail-bulk"
  },
  {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
  },
  {
      skillName: "Xcode",
      fontAwesomeClassname: "fab fa-apple"
  },
  {
      skillName: "ISTQB",
      fontAwesomeClassname: "fas fa-vial"
  },
  {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
  },
  {
      skillName: "Cucumber",
      fontAwesomeClassname: "fas fa-seedling"
  },
  {
      skillName: "DATABASE",
      fontAwesomeClassname: "fas fa-database"
  },
],
display: true // Set false to hide this section, defaults to true
,
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Al Balqa’a Applied University",
      logo: require("./assets/images/bau_jordan_logo.jpg"),
      subHeader: "Software Engineering",
      duration: "September 2008 - Jan 2013",
      desc: "GPA 2.5 - Good",
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
        Stack: "Selenium",
        progressPercentage: "90%" // Example proficiency level
    },
    {
        Stack: "Appium",
        progressPercentage: "90%"
    },
    {
        Stack: "Jenkins",
        progressPercentage: "80%"
    },
    {
        Stack: "JMeter",
        progressPercentage: "70%"
    },
    {
        Stack: "Jira",
        progressPercentage: "90%"
    },
    {
        Stack: "Azure DevOps",
        progressPercentage: "70%"
    },
    {
        Stack: "Postman",
        progressPercentage: "90%"
    },
    {
        Stack: "Git",
        progressPercentage: "70%"
    },
    {
        Stack: "Xcode - Required knowlegde for build ,Automation staff ,Release ",
        progressPercentage: "60%"
    },
    {
        Stack: "ISTQB - Foundation && Advanced level ",
        progressPercentage: "90%" // Assuming full proficiency as it's a certification
    },
    {
        Stack: "Java",
        progressPercentage: "60%"
    },
    {
        Stack: "Cucumber",
        progressPercentage: "100%"
    },
    {
        Stack: "DATABASE",
        progressPercentage: "60%"
    },
],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Test Engineer",
      company: "ETQ",
      companylogo: require("./assets/images/Etq.png"),
      date: "Mar 1,2016 – Jun 11,2018",
      desc: "In summary, this role encompasses the entire software testing lifecycle: understanding requirements, preparing test plans and cases, managing test environments, executing manual and automated tests, and defect reporting. It involves continuous updates of test cases and automation scripts, effective communication with stakeholders, and staying current with testing tools and industry trends. The role requires a deep understanding of software development, proactive quality assurance, and team collaboration.",
    },
    {
      role: "Quality Control Engineer/ Quality Automation Engineer",
      company: "Baaz",
      companylogo: require("./assets/images/Baaz.png"),
      date: "Jun 24,2018  – Jun 4,2019",
      desc: "This role encompasses developing and executing comprehensive software testing strategies, including creating and automating test cases using Appium, Java, and JBehave, and managing release testing. Responsibilities include manual API testing, reviewing specifications, planning and monitoring test cycles, and utilizing Zephyr for test case creation. The role involves mobile testing across platforms, supervising testing activities, maintaining logs, reporting via JIRA, and presenting to stakeholders. Key aspects include staying updated with software, generating test cases based on requirements, reporting defects, and continuously refining test cases and automation processes for quality assurance and team efficiency."
    },
    {
      role: "Quality Control Engineer/ Quality Automation Engineer",
      company: "Shepherd",
      companylogo: require("./assets/images/Shepherd.jpg"),
      date: "Jun 10,2019 – Feb 14,2020",
      desc: "This role entails creating Selenium and Cucumber test scripts in Java, setting up Jenkins for continuous testing, and conducting manual API testing. It involves reviewing specifications, planning sprint test cycles, monitoring service logs, and reporting results with TFS. Responsibilities include supervising testing activities, developing test plans, executing tests, and updating test cases and automation based on findings. The role requires a thorough understanding of software requirements and contributing to the improvement of testing processes."
    },
    {
      role: "Quality Control Engineer/ Quality Automation Engineer",
      company: "Mawdoo3.com",
      companylogo: require("./assets/images/Mawdoo3.jpg"),
      date: "Feb 16,2020 – May 20,2021",
      desc: "This role focuses on developing and enhancing testing frameworks, including creating Selenium test cases with Java, enhancing frameworks with utilities like Extent Report, and automating scripts with Cucumber. It involves setting up continuous builds for automated testing using Jenkins, conducting manual API tests, reviewing specifications, and planning test cycles for sprints. Key tasks also include monitoring service logs, reporting with Jira, and supervising testing activities including plan development and progress tracking. The role requires understanding software requirements, becoming familiar with the software under test, and generating test cases from requirements. Responsibilities extend to executing tests, reporting defects, updating test cases and automations based on findings, and contributing to process improvements within the team."
    },
    {
      role: "Quality Automation Engineer",
      company: "MAJID ALFUTTAIM",
      companylogo: require("./assets/images/MAJID ALFUTTAIM.jpg"),
      date: "May 20,2021 – Mar 17,2022",
      desc: "This role combines creating Selenium and Cucumber automation scripts in Java, setting up Jenkins for continuous testing, and performing manual API testing. It involves reviewing project specifications, planning test cycles for sprints, monitoring system logs, and using JIRA for reporting test outcomes. The position includes supervisory duties like developing test plans, tracking progress, and executing both manual and automated tests. Additionally, it encompasses understanding software requirements, generating test cases, updating test scripts based on defects, and contributing to the improvement of testing processes, with a key responsibility for the quality assurance of a specific Majid Al Futtaim product."
    },
    {
      role: "lead Quality Control Engineer/ Quality Automation Engineer",
      company: "Estarta",
      companylogo: require("./assets/images/estarta.png"),
      date: "Mar 2022 – Present",
      desc: "This role is a comprehensive blend of technical and leadership responsibilities in software testing and quality assurance. It involves creating Selenium and Cucumber automation scripts in Java, implementing Jenkins for continuous testing, and performing manual API testing. The role requires reviewing specifications, planning test cycles, monitoring logs, and reporting using JIRA. As a Quality Team Lead, responsibilities extend to setting and overseeing quality processes for the team, leading quality-related activities, and conducting quality control training for over 15 resources. It also includes the development of an automation process and architecture, and working on an outsourced real estate project named ADRES. The position signifies progression to a leadership role, emphasizing both hands-on technical expertise and team management in quality assurance.."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ISTQB - CTFL",
      subtitle:
        "The Certified Tester Foundation Level (CTFL), offered by the International Software Testing Qualifications Board (ISTQB), is a certification aimed at professionals seeking a foundational understanding of software testing. It covers key concepts such as testing fundamentals, test design, test management, and tools, making it ideal for newcomers or those solidifying their knowledge in software testing. The CTFL is recognized globally and enhances professional credibility and career prospects in the field of software testing.",
      image: require("./assets/images/Ctfl.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1NDJaSRnxKBhON8wrwUeQbjsi0I34OEdS/view?usp=sharing"
        },
      ]
    },
    {
      title: "ISTQB - CTAL-TA",
      subtitle:
        "The Certified Tester Advanced Level - Test Analyst (CTAL-TA), provided by the International Software Testing Qualifications Board (ISTQB), is an advanced certification for professionals with foundational knowledge in software testing. It focuses on the role of a Test Analyst, emphasizing test analysis, design, and execution, along with an understanding of software development lifecycles. This certification is suitable for those looking to deepen their expertise in software testing and is recognized internationally, offering significant benefits for career advancement in the field.",
      image: require("./assets/images/CTAL-TA.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1QgMekf_3sMMAQbPAN63QSZY__2-e8iWw/view?usp=sharing"
        }
      ]
    },

    {
      title: "ISTQB - CTAL-TTA",
      subtitle: "The Certified Tester Advanced Level - Technical Test Analyst (CTAL-TTA) is an advanced certification offered by the International Software Testing Qualifications Board (ISTQB). It is tailored for professionals who have already established a foundational understanding of software testing. This certification delves into more technical aspects of software testing, including topics like non-functional testing, white-box testing techniques, and test automation. The CTAL-TTA is designed for those looking to specialize in the technical dimensions of software testing, enhancing their skills in analyzing, designing, and executing tests in complex software environments. Holding this certification demonstrates a high level of expertise and is beneficial for career progression in specialized areas of software testing.",
      image: require("./assets/images/CTAL-TTA.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", 
        url: "https://drive.google.com/file/d/1FSKyq-9186hrLVkpPRN-mgKLDX3m0hSN/view?usp=sharing"
      },
      
      ]
    },

    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+962-777894429",
  email_address: "tofailhiary@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
