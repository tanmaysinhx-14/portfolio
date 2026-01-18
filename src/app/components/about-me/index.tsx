"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const AboutMe = () => {
  const [activeDomains, setActiveDomains] = useState<any[]>([]);
  const [coreExpertise, setCoreExpertise] = useState<any[]>([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();

        setActiveDomains(data?.activeDomains ?? []);
        setCoreExpertise(data?.coreExpertise ?? []);
      } catch (error) {
        console.error("Error fetching about-me data:", error);
      }
    };

    fetchData();
  }, []);

  
  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
            <div className="flex flex-col gap-4">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">About Me</p>
              <h2 className="text-lg sm:text-lg md:text-lg lg:text-2xl">
                Hey there. I'm Tanmay — a Computer Science student based in Chennai, currently&nbsp;
                <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">
                  building production-grade digital applications,
                </span>
                &nbsp;with a strong emphasis on scalability and intuitive design.
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-primary uppercase font-medium">Currently Active in </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {activeDomains.map((item, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="py-1.5 px-3 rounded-lg"
                  >
                    <p className="text-xs sm:text-sm font-medium text-primary">
                      {item.title}
                    </p>
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-primary uppercase font-medium">Core Expertise</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {coreExpertise.map((item, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="py-1.5 px-3 rounded-lg"
                  >
                    <p className="text-xs sm:text-sm font-medium text-primary">
                      {item.title}
                    </p>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe