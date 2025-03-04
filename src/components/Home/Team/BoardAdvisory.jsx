function BoardAdvisory() {
  const advisors = [
    {
      name: "Dr. Alex Johnson",
      role: "Strategic Advisor",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Emily Roberts",
      role: "Financial Advisor",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Mark Williams",
      role: "Technology Consultant",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/steve-job.png",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <section className="bg-transparent dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-6 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Board Advisory
          </h1>
          <p className="font-light text-gray-700 sm:text-xl dark:text-gray-400">
            Our advisors bring expertise to drive innovation and strategy.
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="text-center text-gray-500 dark:text-gray-400"
            >
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={advisor.image}
                alt={advisor.name}
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {advisor.name}
              </h3>
              <p>{advisor.role}</p>
              <ul className="flex justify-center mt-4 space-x-4">
                {Object.entries(advisor.social).map(([platform, link]) => (
                  <li key={platform}>
                    <a
                      href={link}
                      className="hover:text-gray-900 dark:hover:text-white"
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
