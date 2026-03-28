"use client";

import { useEffect, useState } from "react";

type EducationItem = {
  endYear: string;
  startYear: string;
  subtitle: string;
  title: string;
};

type PageDataResponse = {
  educationData?: EducationItem[];
};

const Education = () => {
  const [educationData, setEducationData] = useState<EducationItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = (await res.json()) as PageDataResponse;

        if (!isMounted) {
          return;
        }

        setEducationData(
          Array.isArray(data.educationData) ? data.educationData : [],
        );
      } catch (error) {
        console.error("Error fetching education:", error);
        if (isMounted) {
          setEducationData([]);
        }
      } finally {
        if (isMounted) {
          setIsLoaded(true);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section>
      <div className="container portfolio-container">
        <div className="panel-frame">
          <div className="section-content">
            <p className="section-heading section-heading-spaced">Education</p>

            <div className="education-timeline">
              {educationData.map((item) => {
                const period =
                  item.startYear === ""
                    ? item.endYear
                    : `${item.startYear} - ${item.endYear}`;

                return (
                  <div
                    key={`${item.title}-${item.startYear}-${item.endYear}`}
                    className="education-item row g-3 align-items-start"
                  >
                    <span
                      className={`timeline-marker ${
                        item.endYear === "Present" ? "is-live" : ""
                      }`}
                    />

                    <div className="col-12 col-sm-auto timeline-date-col">
                      <p className="mb-0 timeline-date">{period}</p>
                    </div>

                    <div className="col timeline-content-col">
                      <div className="d-flex flex-column gap-2">
                        <h5 className="mb-0 fw-semibold">{item.title}</h5>
                        <p className="mb-0 education-subtitle">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {isLoaded && educationData.length === 0 ? (
                <p className="mb-0 timeline-date">
                  Education details are currently unavailable.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
