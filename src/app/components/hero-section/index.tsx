"use client"

import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { useState, useEffect } from "react";

const HeroSection = () => {
  const [heroSocialIcon, setHeroSocialIcon] = useState<any[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch hero data");

        const data = await res.json();
        setHeroSocialIcon(data?.heroSocialIcon ?? []);
      } catch (error) {
        console.error("Error fetching hero social icons:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="">
          <div className="w-full h-72">
            <Image src={"/images/hero-sec/banner.png"} 
                   alt="banner-img" 
                   width={1080} 
                   height={267} 
                   className="w-full h-full object-cover" />
          </div>
          <div className="border-x border-primary/10">
            <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
              <div className="absolute top-0 transform -translate-y-1/2">
                <Image src={"/images/hero-sec/user.jpg"} 
                       alt="user-img" 
                       width={150} 
                       height={150} 
                       className="border-4 border-white rounded-full object-cover" />
                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                <h1 className="font-bold">Tanmay</h1>
                <p className="text-violet-700 font-normal">Exploring. Learning. Creating. ✨</p>
                <div className="flex items-center gap-2 pt-5">
                  <Image src={"/images/icon/educap-icon.svg"} 
                         alt="map-icon" 
                         width={20} 
                         height={20} />
                  <p className="text-primary">SRM Ramapuram</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={"/images/icon/map-icon.svg"} 
                         alt="map-icon" 
                         width={20} 
                         height={20} />
                  <p className="text-primary">Chennai, India</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex items-center gap-2">
                  {heroSocialIcon.map((item: any, index: number) => (
                    <Link key={index}
                          href={item.href}
                          target="_blank"
                          className="p-1.5 hover:bg-primary/5 border border-primary/10 rounded-full transition-colors"
                          aria-label={item.label}>
                      <Image src={item.icon}
                             alt={item.label}
                             width={30}
                             height={30} />
                    </Link>
                  ))}
                </div>
                <Button asChild
                        className="h-auto p-0 rounded-full">
                  <Link href="mailto:mail.tanmaysinha@gmail.com"
                        className="inline-flex items-center gap-3 rounded-full bg-primary px-4 py-2 transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <Image src="/images/icon/mail-icon.svg"
                           alt="mail icon"
                           width={20}
                           height={20} />
                    <span className="text-sm font-semibold text-white">
                      Get in touch
                    </span>
                  </Link>
                </Button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection