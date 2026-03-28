import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-shell">
      <div className="container portfolio-container">
        <div className="panel-frame">
          <div className="section-content py-4">
            <div className="d-flex flex-wrap align-items-center justify-content-center gap-2 footer-copy text-center">
              <p className="mb-0">{currentYear} - Made with</p>
              <Image
                src="/images/icon/heart-icon.svg"
                alt="heart icon"
                width={18}
                height={18}
              />
              <p className="mb-0">by Tanmay</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
