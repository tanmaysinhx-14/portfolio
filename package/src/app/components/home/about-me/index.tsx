import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
  const activeDomains = ["Server Scripting Languages", "Database Management"];
  const coreExpertise = ["UI/UX Development", "Bootstrap Framework"]
  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
            <div className="flex flex-col gap-4">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">About Me</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                Hey there. I'm Tanmay — a Computer Science student based in Chennai, currently&nbsp;
                <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">
                  building production-grade digital applications,
                </span>
                &nbsp;with a strong emphasis on scalability and intuitive design.
              </h2>

              {/*<h5 className="text-secondary font-normal">Previously at Oak Studio, and creator of DesignKit and MentalWell.</h5>*/}
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-primary uppercase font-medium">Active Domains</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {activeDomains?.map((value, index) => {
                  return (
                    <Badge variant={"outline"} key={index} className="py-1.5 px-3 rounded-lg">
                      <p className="text-xs sm:text-sm font-medium text-primary">{value}</p>
                    </Badge>
                  )
                })}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-primary uppercase font-medium">Core Expertise</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {coreExpertise?.map((value, index) => {
                  return (
                    <Badge variant={"outline"} key={index} className="py-1.5 px-3 rounded-lg">
                      <p className="text-xs sm:text-sm font-medium text-primary">{value}</p>
                    </Badge>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe