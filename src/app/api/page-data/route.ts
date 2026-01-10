import { NextResponse } from "next/server";

const experienceData = [
  {
    icon: "/images/icon/bootstrap-icon.svg",
    role: "UI/UX Designing using Bootstrap 5",
    location: "Remote",
    startYear: "2019",
    endYear: "Present",
    bulletPoints: [
      "Developed a strong understanding of UI/UX design principles leveraging semantic HTML5 and modern CSS3 standards.",
      "Utilized the Bootstrap framework to architect responsive, mobile-first user interfaces across multiple projects.",
      "Implemented consistent and scalable design systems through Bootstrap’s grid system, utility classes, and reusable components."
    ]
  },
  {
    icon: "/images/icon/xampp-icon.svg",
    role: "Dynamic Web Application Backend Development",
    location: "Remote",
    startYear: "2021",
    endYear: "Present",
    bulletPoints: [
      "Built a strong foundation in server-side data handling and request processing using PHP in a structured backend environment.",
      "Developed dynamic, data-driven PHP applications with an emphasis on input validation, session management, and secure data processing practices.",
      "Worked extensively with relational databases to design optimized schemas, write efficient SQL queries, and improve overall application performance."
    ]
  },
]

const educationData = [
  {
    date: "2022",
    title: "Matriculation (CBSE)",
    subtitle: "Open Minds - A Birla School — Patna, India"
  },
  {
    date: "2025",
    title: "Intermediate (CBSE)",
    subtitle: "Private Candidate"
  },
  {
    date: "2025 - 2029",
    title: "B. Tech. in Computer Science Engineering",
    subtitle: "SRM Institute of Science and Technology — Chennai, India"
  }
];


const userOverview = {
  communicationMethods: [
    { name: "LinkedIn", url: "https://linkedin.com/in/tanmaysinhx14", 
      icon: "/images/icon/linkedin-icon.svg" },
    { name: "GitHub", url: "https://github.com/tanmaysinhx-14", 
      icon: "/images/icon/github-icon.svg" },
    { name: "Leetcode", url: "https://leetcode.com/u/tanmaysinhx14/", 
      icon: "/images/icon/leetcode-icon.svg" },
    { name: "Instagram", url: "https://instagram.com/tanmaysinhx14", 
      icon: "/images/icon/instagram-icon.svg" },
  ],
  projects: [
    { name: "Organization Management System", comingSoon: true },
  ]
};


export const GET = async () => {
  return NextResponse.json({
    experienceData,
    educationData,
    userOverview
  });
};