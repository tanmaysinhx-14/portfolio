"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

const communicationMethods = () => {
  const [communicationMethods, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setUserData(data?.communicationMethods)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-9 md:py-16 ">
            <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
              <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">Social Media</p>
              <div className="grid grid-cols-2 gap-4 place-items-start">
                {communicationMethods?.map((value: any, index: number) => (
                  <Link key={index}
                        href={value.url}
                        target="_blank"
                        className="group inline-flex w-fit items-center gap-2 px-3 py-2 rounded-md border border-primary/10 hover:bg-primary/5 transition-all whitespace-nowrap">
                    <Image src={value.icon}
                           alt={`${value.name}-icon`}
                           width={20}
                           height={20} />

                    <span className="text-sm font-medium">
                      {value.name}
                    </span>

                    <Image src="/images/icon/tile-arrow-icon.svg"
                           alt="arrow-icon"
                           width={18}
                           height={18}
                           className="transition-all duration-300 ease-in group-hover:translate-x-1 group-hover:rotate-45" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default communicationMethods