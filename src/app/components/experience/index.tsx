import Image from "next/image";

import type { ExperienceItem } from "@/data/portfolio";

type ExperienceProps = {
  experience: ExperienceItem[];
};

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section id="experience">
      <div className="container portfolio-container">
        <div className="panel-frame">
          <div className="section-content">
            <p className="section-heading section-heading-spaced">Experience</p>

            <div>
              {experience.map((value) => (
                <div
                  key={`${value.role}-${value.startYear}-${value.endYear}`}
                  className="experience-item"
                >
                  <div className="d-flex flex-column flex-lg-row align-items-start justify-content-between gap-4 mb-4">
                    <div className="experience-icon-group">
                      {value.icons.map((icon) => (
                        <div
                          key={`${value.role}-${icon.label}`}
                          className="experience-icon-shell"
                          title={icon.label}
                          aria-label={icon.label}
                        >
                          <Image
                            src={icon.src}
                            alt={icon.label}
                            width={48}
                            height={48}
                            className="experience-icon-image rounded-3"
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
                    {value.bulletPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
