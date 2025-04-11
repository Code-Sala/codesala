import niraj from "../../../assets/img/teams/niraj.png";
import prabal from "../../../assets/img/teams/prabal.png";
import pulav from "../../../assets/img/teams/pulove.jpg";
function BoardAdvisory() {
  const advisors = [
    {
      name: "Prabal Bajagain",
      role: "Strategic Advisor",
      image:
      prabal,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Niraj Gautam",
      role: "Financial Advisor",
      image:
      niraj,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Pulav Raj Giri",
      role: "Technology Consultant",
      image:
      pulav,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <section className="bg-transparent">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-6 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-800 ">
            Board Advisory
          </h1>
          <p className="font-light text-gray-700 sm:text-xl ">
            Our advisors bring expertise to drive innovation and strategy.
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="text-center text-gray-500 "
            >
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
                src={advisor.image}
                alt={advisor.name}
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                {advisor.name}
              </h3>
              <p>{advisor.role}</p>
              <ul className="flex justify-center mt-4 space-x-4">
                {Object.entries(advisor.social).map(([platform, link]) => (
                  <li key={platform}>
                    <a
                      href={link}
                      className="hover:text-gray-900 "
                    >
                      <svg className="w-6 h-6" fill="currentColor">
                        {/* Add icons dynamically */}
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BoardAdvisory;
