"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeroSocialIcon = {
  href: string;
  icon: string;
  label: string;
};

const HeroSection = () => {
  const [heroSocialIcon, setHeroSocialIcon] = useState<HeroSocialIcon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");

        if (!res.ok) {
          throw new Error("Failed to fetch hero data");
        }

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
      <div className="container portfolio-container">
        <div className="hero-banner">
          <Image
            src="/images/hero-sec/banner.png"
            alt="banner"
            width={1080}
            height={267}
            className="w-100"
          />
        </div>

        <div className="panel-frame hero-panel">
          <div className="section-content hero-card">
            <div className="hero-avatar-wrap">
              <Image
                src="/images/hero-sec/user.jpg"
                alt="Tanmay"
                width={150}
                height={150}
                className="hero-avatar rounded-circle"
              />
              <span className="hero-status" />
            </div>

            <div className="row mt-1 g-4 align-items-start justify-content-between">
              <div className="col col-md-auto">
                <div className="d-flex flex-column gap-4 align-items-center align-items-sm-start text-center text-sm-start">
                  <div className="d-flex flex-column gap-2">
                    <h1 className="mb-0">Tanmay</h1>
                    <p className="mb-0 hero-tagline">Exploring. Learning. Creating. ✨</p>
                  </div>

                  <div className="d-flex flex-column gap-2">
                    <div className="hero-meta">
                      <Image
                        src="/images/icon/educap-icon.svg"
                        alt="education"
                        width={20}
                        height={20}
                      />
                      <p className="mb-0">SRM Ramapuram</p>
                    </div>

                    <div className="hero-meta">
                      <Image
                        src="/images/icon/map-icon.svg"
                        alt="location"
                        width={20}
                        height={20}
                      />
                      <p className="mb-0">Chennai, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm col-md-auto">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-end gap-3">
                  <div className="d-flex flex-wrap justify-content-center justify-content-lg-end gap-2 p-0">
                    {heroSocialIcon.map((item) => (
                      <Link
                        key={`${item.label}-${item.href}`}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`icon-button ${
                          item.label === "Email"
                            ? "btn bg-dark p-2"
                            : "btn btn-outline-dark p-1"
                        }`}
                        aria-label={item.label}
                        title={item.label}
                      >
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={50}
                          height={50}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
