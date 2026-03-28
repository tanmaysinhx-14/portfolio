"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type CommunicationMethod = {
  icon: string;
  name: string;
  url: string;
};

const CommunicationMethods = () => {
  const [communicationMethods, setCommunicationMethods] = useState<CommunicationMethod[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();
        setCommunicationMethods(data?.communicationMethods ?? []);
      } catch (error) {
        console.error("Error fetching communication methods:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="container portfolio-container">
        <div className="panel-frame">
          <div className="section-content">
            <div className="row g-4 align-items-start">
              <div className="col-12 col-sm-4 col-lg-3">
                <p className="section-heading">Social Media</p>
              </div>

              <div className="col-12 col-sm-8 col-lg-9">
                <div className="row row-cols-1 row-cols-sm-2 g-3">
                  {communicationMethods.map((value) => (
                    <div key={value.url} className="col">
                      <Link
                        href={value.url}
                        target="_blank"
                        rel="noreferrer"
                        className="social-tile w-100 justify-content-between text-decoration-none"
                      >
                        <span className="d-inline-flex align-items-center gap-2">
                          <Image
                            src={value.icon}
                            alt={`${value.name} icon`}
                            width={20}
                            height={20}
                          />
                          <span>{value.name}</span>
                        </span>

                        <Image
                          src="/images/icon/tile-arrow-icon.svg"
                          alt="open profile"
                          width={18}
                          height={18}
                          className="social-tile-arrow"
                        />
                      </Link>
                    </div>
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

export default CommunicationMethods;
