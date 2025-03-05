import { Link } from "react-router-dom";
import logo1 from "../../assets/img/logo/logo1.png";
function Footer() {
  return (
    <footer className="footer bg-base-200 text-base-content py-12 relative container">
      <div className="container_lg p-10 flex justify-between  mx-auto z-50">
        <aside className="text-lg">
          <Link to="/">
            <img src={logo1} alt="footer logo" className="max-w-36 mb-2" />
          </Link>
          <p className="text-vibrant-pink">
            Providing reliable tech since 2024
          </p>
        </aside>
        <nav className="flex flex-col gap-2">
          <h6 className="footer-title">Services</h6>
          <Link to="/webcomponent" className="link link-hover">
            Web Development
          </Link>
          <Link to="/mobilecomponent" className="link link-hover">
            App Development
          </Link>
          <Link to="/softwarecomponent" className="link link-hover">
            Software Integration
          </Link>
          <Link to="/skillrentcomponent" className="link link-hover">
            Skill Rent
          </Link>
        </nav>
        <nav className="flex flex-col gap-2">
          <h6 className="footer-title">Company</h6>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/blog" className="link link-hover">
            Blogs
          </Link>
          <Link to="/services" className="link link-hover">
            Services
          </Link>
        </nav>
        <nav className="flex flex-col gap-2">
          <h6 className="footer-title">Legal</h6>
          <Link to="/terms" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/privacy" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/cookies" className="link link-hover">
            Cookie policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
