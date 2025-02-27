import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const services = [
  "ui/ux design",
  "web development",
  "app development",
  "domain hosting",
];

const Hero = () => {
  const [currentService, setCurrentService] = useState("");
  const serviceIndexRef = useRef(0);
  const letterIndexRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const typeLetter = () => {
      const currentServiceText = services[serviceIndexRef.current];
      if (letterIndexRef.current < currentServiceText.length) {
        setCurrentService(() =>
          currentServiceText.slice(0, letterIndexRef.current + 1)
        );
        letterIndexRef.current++;
        timeoutRef.current = setTimeout(typeLetter, 150);
      } else {
        setTimeout(() => {
          letterIndexRef.current = 0;
          serviceIndexRef.current =
            (serviceIndexRef.current + 1) % services.length;
          setCurrentService("");
          timeoutRef.current = setTimeout(typeLetter, 1000);
        }, 700);
      }
    };

    typeLetter();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="container min-h-[80vh] flex items-center justify-center px-4 container_lg ">
      <div className="max-w-2xl text-center space-y-6">
        <p className="text-gray-600 text-lg">CodeSala - Your digital partner</p>
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          At CodeSala, we specialize <br /> in{" "}
          <span className="text-vibrant-pink">{currentService}</span> services
        </h1>
        <Link
          to="/contact"
          className="inline-block bg-vibrant-pink text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-deep-purple mt-2"
        >
          Let&apos;s start a project!
        </Link>
      </div>
    </div>
  );
};

export default Hero;
