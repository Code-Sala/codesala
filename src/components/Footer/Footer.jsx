
import { motion } from "framer-motion";


import { Link } from "react-router-dom";

function Footer() {
  return (


    <motion.footer
      className="footer bg-base-200 text-base-content py-12 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container_lg p-10 flex flex-col md:flex-row justify-between container mx-auto z-50">
        <motion.aside
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >

    <footer className="footer bg-base-200 text-base-content py-12 relative">

      <div className="container_lg p-10 flex justify-between container mx-auto z-50">
        <aside>

          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current"
            fill="#ed1d7e"
          >
            <path d="M22.672 15.226l-2.432.811..." />
          </svg>
          <p>
            CodeSala
            <br /> Providing reliable tech since 2024
          </p>
        </motion.aside>

        {[
          {
            title: "Services",
            links: [
              "Web Development",
              "App Development",
              "Marketing",
              "Skill Rent",
            ],
            paths: ["/branding", "/design", "/marketing", "/advertisement"],
          },
          {
            title: "Company",
            links: ["About us", "Contact", "Blogs", "Services"],
            paths: ["/about", "/contact", "/blog", "/services"],
          },
          {
            title: "Legal",
            links: ["Terms of use", "Privacy policy", "Cookie policy"],
            paths: ["/terms", "/privacy", "/cookies"],
          },
        ].map((section, index) => (
          <motion.nav
            key={section.title}
            className="flex flex-col"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
          >
            <h6 className="footer-title">{section.title}</h6>
            {section.links.map((link, i) => (
              <Link key={i} to={section.paths[i]} className="link link-hover">
                {link}
              </Link>
            ))}
          </motion.nav>
        ))}
      </div>

      <motion.aside
        className="text-center mt-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by
          CodeSala
        </p>
      </motion.aside>
    </motion.footer>
  );
}

export default Footer;