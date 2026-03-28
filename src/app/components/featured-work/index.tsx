"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type FeatureWorkItem = {
  description: string;
  image: string;
  link?: string | null;
  techStack: string[];
  title: string;
};

const FeaturedWork = () => {
  const [featureWork, setFeatureWork] = useState<FeatureWorkItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/featured-work");

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();
        setFeatureWork(data?.featureWork ?? []);
      } catch (error) {
        console.error("Error fetching featured work:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="container portfolio-container">
        <div className="panel-frame">
          <div className="section-content">
            <p className="section-heading section-heading-spaced">Featured Work</p>
          </div>

          <div className="work-grid">
            <div className="row g-0">
              {featureWork.map((value, index) => {
                const projectHref = value.link || "#";

                return (
                  <div key={`${value.title}-${index}`} className="col-12 col-md-6">
                    <div
                      className={`work-card h-100 d-flex flex-column gap-4`}
                    >
                      <Link
                        href={projectHref}
                        target={value.link ? "_blank" : undefined}
                        rel={value.link ? "noreferrer" : undefined}
                        className="project-image-link"
                      >
                        <Image
                          src={value.image}
                          alt={value.title}
                          width={720}
                          height={450}
                          className="project-image"
                        />
                      </Link>

                      <div className="d-flex flex-column gap-3 px-md-2">
                        <Link
                          href={projectHref}
                          target={value.link ? "_blank" : undefined}
                          rel={value.link ? "noreferrer" : undefined}
                          className="project-title-link text-decoration-none"
                        >
                          <h4 className="mb-0">{value.title}</h4>
                          <Image
                            src="/images/icon/tile-arrow-icon.svg"
                            alt="open project"
                            width={18}
                            height={18}
                            className="project-title-arrow"
                          />
                        </Link>

                        <p className="mb-0">{value.description}</p>

                        <div className="d-flex flex-wrap gap-2">
                          {value.techStack.map((tech) => (
                            <span key={tech} className="portfolio-chip">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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

export default FeaturedWork;
