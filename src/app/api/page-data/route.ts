import { NextResponse } from "next/server";

const heroSocialIcon = [
  {
    icon: "/images/icon/github-icon.svg",
    href: "https://github.com/tanmaysinhx-14",
    label: "Github"
  },
  {
    icon: "/images/icon/linkedin-icon.svg",
    href: "https://linkedin.com/in/tanmaysinhx14",
    label: "Github"
  },
  {
    icon: "/images/icon/leetcode-icon.svg",
    href: "https://leetcode.com/u/tanmaysinhx14/",
    label: "Leetcode"
  }
]

const activeDomains = [
  {
    title: "Web Applications using Typescript",
    description: null
  }, 
  {
    title: "Server Scripting using PHP",
    description: null
  },
  {
    title: "DBMS with MySQL",
    description: null
  }
]

const coreExpertise = [
  {
    title: "UI/UX Development",
    description: null
  },
  {
    title: "Bootstrap 5",
    description: null
  }
]

const experienceData = [
  {
    icon: "/images/icon/bootstrap-icon.svg",
    role: "UI/UX Designing using Bootstrap 5",
    startYear: "2019",
    endYear: "2024",
    bulletPoints: [
      "Developed a strong understanding of UI/UX design principles leveraging semantic HTML5 and modern CSS3 standards.",
      "Utilized the Bootstrap framework to architect responsive, mobile-first user interfaces across multiple projects.",
      "Implemented consistent and scalable design systems through Bootstrap’s grid system, utility classes, and reusable components."
    ]
  },
  {
    icon: "/images/icon/xampp-icon.svg",
    role: "Dynamic Web Application Backend Development",
    startYear: "2021",
    endYear: "2025",
    bulletPoints: [
      "Built a strong foundation in server-side data handling and request processing using PHP in a structured backend environment.",
      "Developed dynamic, data-driven PHP applications with an emphasis on input validation, session management, and secure data processing practices.",
      "Worked extensively with relational databases to design optimized schemas, write efficient SQL queries, and improve overall application performance."
    ]
  },
  {
    icon: "/images/icon/typescript-icon.svg",
    role: "Enterprise-Level Project Development",
    startYear: "2025",
    endYear: "Present",
    bulletPoints: [
      "Actively learning TypeScript to build client-side solutions for interactive and real-time features."
    ]
  }
]

const educationData = [
  {
    startYear: "2022",
    endYear: "2022",
    title: "Matriculation (CBSE)",
    subtitle: "Open Minds - A Birla School — Patna, India",
  },
  {
    startYear: "2023",
    endYear: "2025",
    title: "Intermediate (CBSE)",
    subtitle: "Private Candidate",
  },
  {
    startYear: "2025",
    endYear: "Present",
    title: "B. Tech. in Computer Science Engineering",
    subtitle: "SRM Institute of Science and Technology — Chennai, India",
  },
]

const communicationMethods = [
  { name: "LinkedIn", url: "https://linkedin.com/in/tanmaysinhx14", 
    icon: "/images/icon/linkedin-icon.svg" },
  { name: "GitHub", url: "https://github.com/tanmaysinhx-14", 
    icon: "/images/icon/github-icon.svg" },
  { name: "Leetcode", url: "https://leetcode.com/u/tanmaysinhx14/", 
    icon: "/images/icon/leetcode-icon.svg" },
  { name: "Instagram", url: "https://instagram.com/tanmaysinhx14", 
    icon: "/images/icon/instagram-icon.svg" },
  { name: "Snapchat", url: "https://snapchat.com/add/tanmaysinhx_14", 
    icon: "/images/icon/snapchat-icon.svg" }
]

export const GET = async () => {
  return NextResponse.json({
    heroSocialIcon,
    activeDomains,
    coreExpertise,
    experienceData,
    educationData,
    communicationMethods
  });
};