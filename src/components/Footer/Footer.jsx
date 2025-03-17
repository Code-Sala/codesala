import { Link } from "react-router-dom";
import logo1 from "../../assets/img/logo/logo1.png";
import SocialMediaCard from "./SocialMediaCard";

function Footer() {
  return (
    <footer className="footer py-12 bg-gradient-to-tr from-[#138bffcc] to-[#ec07c7cc] text-center">
      <div className="container_lg p-10 flex flex-wrap justify-between gap-8 mx-auto text-center md:text-left ">
        <aside className="w-full md:w-1/3 lg:w-1/4">
          <Link to="/">
            <img
              src={logo1}
              alt="footer logo"
              className="max-w-36 mx-auto md:mx-0 mb-2"
            />
          </Link>
          <p className="text-white italic">Providing tech since 2024</p>

          <div>
            <SocialMediaCard />
          </div>
        </aside>

        {/* Services Section */}
        <nav className="w-full md:w-auto flex flex-col gap-2 text-sm">
          <h6 className="text-xl text-zinc-200 font-semibold  ">Services</h6>
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

        {/* Company Section */}
        <nav className="w-full md:w-auto flex flex-col gap-2">
          <h6 className="text-xl text-zinc-200 font-semibold  ">Company</h6>
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

        {/* Legal Section */}
        <nav className="w-full md:w-auto flex flex-col gap-2">
          <h6 className="text-xl text-zinc-200 font-semibold">Legal</h6>
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
      <div className="flex items-center justify-center text-center w-full">
        <p className=" text-white">Copyright @2024 All Right Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
