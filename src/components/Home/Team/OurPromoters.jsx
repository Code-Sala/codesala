function OurPromoters() {
  const promoters = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Jane Smith",
      role: "Co-Founder & COO",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ];

  return (
    <section className="bg-transparent dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-6 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Our Promoters
          </h1>
          <p className="font-light text-gray-700 sm:text-xl dark:text-gray-400">
            Meet the visionaries who guide our company&apos;s success.
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2">
          {promoters.map((promoter, index) => (
            <div
              key={index}
              className="text-center text-gray-500 dark:text-gray-400"
            >
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={promoter.image}
                alt={promoter.name}
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {promoter.name}
              </h3>
              <p>{promoter.role}</p>
              <ul className="flex justify-center mt-4 space-x-4">
                {Object.entries(promoter.social).map(([platform, link]) => (
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

export default OurPromoters;
