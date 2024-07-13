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
  username: "Chathura Lakshan",
  title: "Hi all, I'm Chathura ",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 having an experience of building Web and Mobile applications with Java / MERN Stack / Flutter and also having an experience of  Network📡/Hardware troblshooting,Windows/Linux Servers 🧑‍💻managment and monitoring."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/IT21168536",
  linkedin: "https://www.linkedin.com/in/chathura-lakshan-50b838211/",
  gmail: "lakshankapuge@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/chathura.lakshan.14224094?mibextid=ZbWKwL",
  medium: "https://medium.com/@ChathuraLk",
  stackoverflow: "https://stackoverflow.com/users/21128529/cathu56",

  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end /UX/UI / User Interfaces for web and mobile applications"
    ),
    emoji("⚡ Architect scalable back-end solutions with Node.js and integrate robust databases using SQL and MongoDB to ensure efficient data management and security"),
    emoji("⚡ Manage and monitor Linux servers and configurations to ensure optimal system performance, enhanced security, and reliable network connectivity across enterprise environments."),
    emoji(
      "⚡ Utilize JavaFX and MySQL to develop robust desktop applications, ensuring seamless user interfaces and reliable data management for enhanced user productivity and system efficiency."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "postman",
      fontAwesomeClassname: "fas fa-envelope" // Placeholder using an envelope icon
    },
    {
      skillName: "mongoDb",
      fontAwesomeClassname: "fas fa-leaf" // Using a leaf as a creative representation for MongoDB
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fas fa-mobile-alt" // Using a mobile icon as a placeholder for Flutter
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fab fa-cuttlefish" // Note: Font Awesome doesn't have a specific icon for C++, using C icon for representation.
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "H/Mahanaga National School - Angunukolapelessa",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "A/L Technology Stream with ICT ",
      duration: "Year : 2017 -  2019",
      desc: "GCE Advance Level   [ District Rank - 52 ]",
      descBullets: [
        "Engineering Technology - B",
        "Science for Technology - C",
        "ICT              - S"
      ]
    },
    {
      schoolName: "SLIIT | Sri Lanka Institute of Information Technology - Malabe",
      logo: require("./assets/images/SLIIT.png"),
      subHeader: "BSc (Hons) in Information Technology Specialising in Information Technology",
      duration: "Year :  2021 - Current",
      desc: "I'm an Information Technology undergraduate student at the Sri Lanka Institute of Information Technology (SLIIT).",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend| UX/UI Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Hardware/Network troubleshooting ",
      progressPercentage: "70%"
    }

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Network Administrator",
      company: "SK INTERNATIONAL HOLDINGS (PVT) LTD",
      companylogo: require("./assets/images/skphoto.png"),
      date: "June 2023 – Present",
      desc: "",
      descBullets: [
        "Computer Assembling, Upgrading and servicing/ Troubleshooting and Repairing.",
        "Operating System Installing and Configuring (Windows 98, 2000, XP, 2003, Vista, 2008, 7, 8, 10  & 11)",
        "Implementing and planning single Domain environment.",
        "Installing and configuring 2000, 2003, 2008, 2012, 2012 R2 & 2016 2022 DNS Server.",
        "VPN Solutions for with or without DNS.",
        "Implementing mail server solution for the company (POP3 or IMAP).",
        "Implementing and maintaining CHILD SERVER environment or Department wise network solutions.",
        "Network monitoring solutions.",
        "Planning and implementing short Distance and long Distance WIRELESS BRIDGING solutions.",
        "Maintaining WEBSERVER and online software solutions (ERP).",
        "Planning BACKUP power solutions or sola power solutions for the company",
        "Implementing network security solutions with software or hardware firewalls.",
        "Planning and implementing our own cloud server solutions.",
        "Maintaining LOAD BALANCING devices and network traffic balancing devices.",

      ]
    }
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
 
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
  title: "Projects 🧑🏻‍💻💯",
  subtitle: " ________________________________________",
  projects: [
    {
      image: require("./assets/images/UBapp.png"),
      projectName: "UbernMall-web-application (web-application )",
      projectDesc: "Fully functional shopping mall and user-friendly e-commerce web application that connects retailers with customers",
      footerLink: [
        {
          name: "View in Github",
          url: "https://github.com/IT21168536/UbernMall-web-application"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/chserver.png"),
      projectName: "Chatting Server and Client Program",
      projectDesc: "This project involves the development of a chatting server (`chat.ndm.lk`) and client program using the C programming language. The server is designed to be concurrent, handle multiple clients, and includes user registration and chat functionalities.",
      footerLink: [
        {
          name: "view in Github",
          url: "https://github.com/IT21168536/chattingServer"
        }
      ]
    },
    {
      image: require("./assets/images/todoapp.png"),
      projectName: "ToDo List App",
      projectDesc: "My TODO App is a simple and user-friendly task management application that helps you stay organized and keep track of your tasks and to-do lists.(Kotlin)",
      footerLink: [
        {
          name: "view in Github",
          url: "https://github.com/IT21168536/To-Do-List-App"
        }
      ]
    },
    {
      image: require("./assets/images/uidex.png"),
      projectName: "UI/UX in food delivery app",
      projectDesc: "Expertise in UI/UX design for food delivery apps, delivering intuitive navigation, engaging visuals, and seamless ordering experiences across devices.",
      footerLink: [
        {
          name: "Visit Figma",
          url: "https://www.figma.com/proto/ujqtfR8PNWv3wMNv8gvK45/Untitled?page-id=29%3A324&node-id=115-78&viewport=216%2C81%2C0.44&t=u2VTWLK0Paptpzdm-1&scaling=scale-down&content-scaling=fixed"
        }
      ]
    },
    {
      image: require("./assets/images/glassMn.png"),
      projectName: "UI/UX in Glass Store Management System",
      projectDesc: "Designed the UX/UI for a comprehensive Glass Store Management System Web App,  price calculating, order processing,Glass cutting and customer service for glass-related businessest",
      footerLink: [
        {
          name: "Visit Figma",
          url: "https://www.figma.com/proto/I9QNxoCf19kcWVm6riZtiO/SK-glass-managment-system?page-id=0%3A1&node-id=9-2807&scaling=scale-down&content-scaling=fixed&t=3VrT76um8coGWhAn-1"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Foundations of User Experience (UX) Design",
      subtitle:
        "I completed the Foundations of User Experience (UX) Design specialization.",
      image: require("./assets/images/uiuxcet.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://coursera.org/share/82c99364b4597c0c64db001a3d10a135"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Reverse Engineering .NET for Beginners (Visual Basic)",
      subtitle:
        "I Will Learn .NET Reverse Engineering From Beginning. If You Are Completely New In Reverse Engineering & Want To Learn .NET Reverse Engineering With Full Practical Guide & Concepts .",
      image: require("./assets/images/revese.jpg"),
      imageAlt: "",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.udemy.com/certificate/UC-df4018e6-82e6-4fd3-b6f8-b2eb56de4716/"
        }
      ]
    },

    {
      title: "Network Security (CISCO cetification)",
      subtitle: "this course will provide introduction to network infrastructure and network security monitoring tools.",
      image: require("./assets/images/ntsucure.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "View Certification", url: "https://www.coursera.org/account/accomplishments/verify/ZEXUEEZZS6RC?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Oracle Cloud Infrastructure 2023 Foundations Associate (1Z0-1085-23) ",
      subtitle: "The Oracle Cloud Infrastructure (OCI) Foundations certification is for individuals who intend to demonstrate fundamental knowledge of public cloud services provided by Oracle Cloud Infrastructure (OCI).",
      image: require("./assets/images/oracleBj.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "View Certification", url: "https://www.coursera.org/account/accomplishments/verify/ZEXUEEZZS6RC?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "CCNA: Introduction to Networks",
      subtitle: "Cisco verifies the earner of this badge successfully completed the Introduction to Networks course and achieved this student level credential.",
      image: require("./assets/images/CCNAITN.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "View Certification", url: "https://www.credly.com/badges/55aca16c-675d-4651-a54c-e52f2b750473/linked_in?t=rhmldg"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    } ,
    {
      title: "Introduction to Cybersecurity",
      subtitle: "Cisco verifies the earner of this badge successfully completed the Introduction to Cybersecurity course. ",
      image: require("./assets/images/cybebj.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "View Certification", url: "https://www.credly.com/badges/d00b180d-76a3-48db-a4e5-4917a2572cda/linked_in"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Introduction to MongoDB",
      subtitle: "Achieved certification in 'Introduction to MongoDB', enhancing skills in managing NoSQL databases and developing scalable applications. ",
      image: require("./assets/images/mongoDb.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "View Certification", url: "https://learn.mongodb.com/c/_8au-XhhTBKI38x3vWLIhw"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
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
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // {
    //   url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
    //   title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
    //   description:
    //     "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    // },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+94 70 1797 406",
  email_address: "lakshankapuge@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
