"use client";

import { useEffect, useState } from "react";

type TagItem = {
  title: string;
};

const AboutMe = () => {
  const [activeDomains, setActiveDomains] = useState<TagItem[]>([]);
  const [coreExpertise, setCoreExpertise] = useState<TagItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

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
      <div className="container portfolio-container">
        <div className="panel-frame about-surface">
          <div className="section-content-lg">
            <div className="d-flex flex-column gap-5">
              <div className="d-flex flex-column gap-4">
                <p className="section-heading">About Me</p>
                <h2 className="mb-0">
                  Hey there. I&apos;m Tanmay, a Computer Science student based in
                  Chennai, currently{" "}
                  <span className="highlight-sweep">
                    building production-grade digital applications,
                  </span>{" "}
                  with a strong emphasis on scalability and intuitive design.
                </h2>
              </div>

              <div className="d-flex flex-column gap-3">
                <p className="section-heading">Currently Active In</p>
                <div className="d-flex flex-wrap gap-2 gap-sm-3">
                  {activeDomains.map((item) => (
                    <span key={item.title} className="portfolio-chip">
                      {item.title}
                    </span>
                  ))}
                </div>
              </div>

              <div className="d-flex flex-column gap-3">
                <p className="section-heading">Core Expertise</p>
                <div className="d-flex flex-wrap gap-2 gap-sm-3">
                  {coreExpertise.map((item) => (
                    <span key={item.title} className="portfolio-chip">
                      {item.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
