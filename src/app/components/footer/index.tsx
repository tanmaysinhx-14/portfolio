import { footerData } from "@/data/portfolio";

const Footer = () => {
  return (
    <footer className="footer-shell">
      <div className="container portfolio-container">
        <div className="panel-frame">
          <div className="section-content py-4">
            <div className="align-items-center justify-content-center text-center">
              <p className="mb-0 footer-meta">{footerData.note}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
