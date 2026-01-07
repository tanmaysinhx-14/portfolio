import Image from "next/image"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="-translate-y-[1px] bg-white border-t border-primary/10">
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex items-center justify-center gap-2 max-w-3xl mx-auto px-4 sm:px-7 py-4 md:py-7">
            <p>{currentYear} — Made with</p>
            <Image
              src="/images/icon/heart-icon.svg"
              alt="heart-icon"
              width={18}
              height={18}
            />
            <p>by Tanmay</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer