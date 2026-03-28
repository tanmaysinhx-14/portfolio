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
    label: "LinkedIn"
  },
  {
    icon: "/images/icon/leetcode-icon.svg",
    href: "https://leetcode.com/u/tanmaysinhx14/",
    label: "Leetcode"
  },
  {
    icon: "/images/icon/mail-icon.svg",
    href: "mailto:mail.tanmaysinha@gmail.com",
    label: "Email"
  }
]

const activeDomains = [
  {
    title: "Computer Vision (OpenCV, MediaPipe)",
    description: null
  },
  {
    title: "Machine Learning & Deep Learning (PyTorch)",
    description: null
  },
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
    icons: [
      {
        src: "/images/icon/bootstrap-icon.svg",
        label: "Bootstrap 5"
      }
    ],
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
    icons: [
      {
        src: "/images/icon/xampp-icon.svg",
        label: "XAMPP"
      },
      {
        src: "/images/icon/php-icon.svg",
        label: "PHP"
      }
    ],
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
    icons: [
      {
        src: "/images/icon/typescript-icon.svg",
        label: "TypeScript"
      }
    ],
    role: "Enterprise-Level Project Development",
    startYear: "2025",
    endYear: "Present",
    bulletPoints: [
      "Actively learning TypeScript to build client-side solutions for interactive and real-time features."
    ]
  },
  {
    icons: [
      {
        src: "/images/icon/opencv-icon.svg",
        label: "OpenCV"
      },
      {
        src: "/images/icon/python-icon.svg",
        label: "Python"
      },
      {
        src: "/images/icon/pytorch-icon.svg",
        label: "PyTorch"
      },
      {
        src: "/images/icon/fastapi-icon.svg",
        label: "FastAPI"
      }
    ],
    role: "Computer Vision & AI System Development",
    startYear: "2026",
    endYear: "Present",
    bulletPoints: [
      "Engineered a real-time AI proctoring system using OpenCV, PyTorch, and YOLO.",
      "Designed gaze tracking and head pose estimation for behavioral analysis.",
      "Developed a rule-based risk engine for detecting suspicious patterns.",
      "Built a FastAPI + WebSocket backend for real-time monitoring."
    ]
  }
]

const educationData = [
  {
    startYear: "",
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
    icon: "/images/icon/snapchat-icon.svg" },
  { name: "Spotify", url: "https://open.spotify.com/user/31bayf77ivq6iq3lpquebal3rysa?si=b6241cee5a66464f", 
    icon: "/images/icon/spotify-icon.svg" }
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
