import { useState, useEffect } from "react";

const sections = [
  { id: "hero", name: "Hero" },
  { id: "whatwedo", name: "Offers" },
  { id: "homeservices", name: "Services" },
  { id: "team", name: "Team" },
  { id: "culture", name: "Culture" },
  { id: "testimonials", name: "Testimonials" },
];

const SidebarNav = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Find the name of the active section
  const activeSectionName =
    sections.find((s) => s.id === activeSection)?.name || "";

  return (
    <>
      {activeSectionName && (
        <div className=" fixed top-1/2 -right-8 flex items-center justify-center mb-4 text-white text-sm   bg-gradient-to-br from-[#ec07c7cc] to-[#138bffcc] rotate-90 w-24 h-8 text-center py-1 px-1 rounded-b-xl z-90 tracking-wider">
          {activeSectionName}
        </div>
      )}

      <nav className="fixed left-2 lg:left-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-6 z-90">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="relative group"
          >
            <span
              className={`hidden md:block lg:block w-2 h-2 rounded-full transition-all ${
                activeSection === section.id
                  ? "bg-gradient-to-br from-[#ec07c7cc] to-[#138bffcc] w-4 h-4 border-gray-200 border-2 "
                  : " bg-gradient-to-br from-[#ec07c7cc] to-[#138bffcc]"
              }`}
            ></span>

            <span className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-transparent text-vibrant-pink text-xs px-2 py-1 rounded">
              {section.name}
            </span>
          </a>
        ))}
      </nav>
    </>
  );
};

export default SidebarNav;
