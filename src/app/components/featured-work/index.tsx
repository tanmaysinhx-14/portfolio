import Image from "next/image";
import Link from "next/link";

import type { FeaturedWorkItem } from "@/data/portfolio";

type FeaturedWorkProps = {
  projects: FeaturedWorkItem[];
};

const FeaturedWork = ({ projects }: FeaturedWorkProps) => {
  return (
    <section id="work">
      <div className="container portfolio-container">
        <div className="panel-frame">
          <div className="section-content d-flex flex-column gap-3">
            <p className="section-heading">Featured Work</p>
            <h2 className="mb-0 featured-work-title">
              A few projects that show how I think about systems, usability, and implementation.
            </h2>
          </div>

          <div className="work-grid">
            <div className="row g-0">
              {projects.map((value) => {
                const projectHref = value.link || "#";

                return (
                  <div key={value.title} className="col-12 col-md-6">
                    <div className="work-card h-100 d-flex flex-column gap-4">
                      <Link
                        href={projectHref}
                        target={value.link ? "_blank" : undefined}
                        rel={value.link ? "noopener noreferrer" : undefined}
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
                          rel={value.link ? "noopener noreferrer" : undefined}
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
