"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ExperienceIcon = {
  label: string;
  src: string;
};

type ExperienceItem = {
  bulletPoints: string[];
  endYear: string;
  icon?: string;
  icons?: ExperienceIcon[];
  role: string;
  startYear: string;
};

const Experience = () => {
  const [experienceData, setExperienceData] = useState<ExperienceItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();
        setExperienceData(data?.experienceData ?? []);
      } catch (error) {
        console.error("Error fetching experience:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="container portfolio-container">
        <div className="panel-frame">
          <div className="section-content">
            <p className="section-heading section-heading-spaced">Experience</p>

            <div>
              {experienceData.map((value, index) => {
                const stackIcons = value.icons?.length
                  ? value.icons
                  : value.icon
                    ? [{ label: value.role, src: value.icon }]
                    : [];

                return (
                  <div key={`${value.role}-${index}`} className="experience-item">
                    <div className="d-flex flex-column flex-lg-row align-items-start justify-content-between gap-4 mb-4">
                      <div className="experience-icon-group">
                        {stackIcons.map((icon) => (
                          <div
                            key={`${value.role}-${icon.label}`}
                            title={icon.label}
                            aria-label={icon.label}
                          >
                            <Image
                              src={icon.src}
                              alt={icon.label}
                              width={50}
                              height={50}
                              className="experience-icon-image rounded-1"
                            />
                          </div>
                        ))}
                      </div>

                      <div className="period-badge">
                        <span
                          className={`status-dot ${
                            value.endYear === "Present" ? "status-dot-live" : ""
                          }`}
                        />
                        <span>
                          {value.startYear} - {value.endYear}
                        </span>
                      </div>
                    </div>

                    <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between gap-3 mb-4">
                      <h5 className="mb-0">{value.role}</h5>
                    </div>

                    <ul className="bullet-list">
                      {value.bulletPoints?.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
