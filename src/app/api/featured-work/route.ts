import { NextResponse } from "next/server";

type FeatureWorkItem = {
  title: string
  description: string
  image: string
  techStack: string[]
  link?: string | null
}

const featureWork: FeatureWorkItem[] = [
  {
    title: "AIProctor – Vision-Based Proctoring System",
    description: "Developed a real-time AI proctoring system with gaze tracking, object detection, and risk analysis.",
    link: "https://github.com/tanmaysinhx-14/AIProctor", // update if different
    techStack: ["Python", "OpenCV", "PyTorch", "YOLO", "FastAPI"],
    image: "/images/feature-work/aiproctor-img.png" // update if needed
  },
  {
    title: "Career Institute's Website",
    description: "Made for performance and clean UI/UX design, powered by Bootstrap and Landkit Themes.",
    link: "https://github.com/tanmaysinhx-14/career-institute",
    techStack: ["UI/UX Designing", "Bootstrap 5", "Front-End Project"],
    image: "/images/feature-work/ci-img.png"
  },
  {
    title: "QR Attendance System",
    description: "A QR-based attendance module enabling users to register attendance instantly through secure, real-time scanning.",
    link: "https://github.com/tanmaysinhx-14/attendance-system",
    techStack: ["Typescript", "PHP", "Back-End Project"],
    image: "/images/feature-work/scan.jpg"
  }
]

export const GET = async () => {
  return NextResponse.json({
    featureWork
  });
};