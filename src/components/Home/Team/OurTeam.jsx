function OurTeam() {
  const teamMembers = [
    {
      name: "Siddhant Pandey",
      role: "Backend Developer",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
      social: {
        facebook: "#",
        twitter: "#",
        github: "#",
        dribbble: "#",
      },
    },
    {
      name: "Baibav Nepal",
      role: "Frontend Developer",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
      social: {
        facebook: "#",
        twitter: "#",
        github: "#",
        dribbble: "#",
      },
    },
    {
      name: "Sadip Khatri",
      role: "FullStack Developer",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      social: {
        facebook: "#",
        twitter: "#",
        github: "#",
        dribbble: "#",
      },
    },
    {
      name: "Simant Pandey",
      role: "Graphic Designer",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
      social: {
        facebook: "#",
        twitter: "#",
        github: "#",
        dribbble: "#",
      },
    },
  ];

  return (
    <section className="bg-transparent dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-6 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h1 className="text-3xl sm:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Our Team
          </h1>
          <p className="font-light text-gray-700 sm:text-xl dark:text-gray-400">
            Meet the passionate individuals behind our success. Our team is
            dedicated to innovation, collaboration, and excellence.
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center text-gray-500 dark:text-gray-400"
            >
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={member.image}
                alt={member.name}
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">{member.name}</a>
              </h3>
              <p>{member.role}</p>
              <ul className="flex justify-center mt-4 space-x-4">
                {Object.entries(member.social).map(([platform, link]) => (
                  <li key={platform}>
                    <a
                      href={link}
                      className="hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        {/* Icons can be dynamically rendered here based on platform */}
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

export default OurTeam;
