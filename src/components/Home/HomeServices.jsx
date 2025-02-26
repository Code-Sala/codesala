import { Link } from "react-router-dom";
import { Code, Smartphone, PanelsTopLeft, Server } from "lucide-react";

const HomeServices = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We build responsive and scalable websites to enhance your online presence.",
      icon: Code,
      link: "/services/web-development",
    },
    {
      title: "App Development",
      description:
        "Custom mobile and web applications tailored to your business needs.",
      icon: Smartphone,
      link: "/services/app-development",
    },
    {
      title: "UI/UX Design",
      description: "Creating visually appealing and user-friendly interfaces.",
      icon: PanelsTopLeft,
      link: "/services/ui-ux-design",
    },
    {
      title: "Domain & Hosting",
      description:
        "Secure and reliable domain registration and hosting services.",
      icon: Server,
      link: "/services/domain-hosting",
    },
  ];

  return (
    <div className="container min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-6">
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 w-full max-w-6xl">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Link
              key={index}
              to={service.link}
              className="card bg-base-100 w-96 shadow-sm border border-gray-200 transition-transform transform hover:scale-105"
            >
              <figure className="px-10 pt-10">
                <Icon className="h-14 w-14 text-blue-500" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-xl font-semibold text-blue-500">
                  {service.title}
                </h2>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <div className="card-actions mt-4">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomeServices;
