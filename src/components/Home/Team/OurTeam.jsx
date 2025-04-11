// import img from "../../../assets/img/teams/Baibhav.jpg"
// ./src\assets\img\teams\Baibhav.JPG
//
import SiddhantImage from "../../../assets/img/teams/Siddhnt.jpg";
import BaibhavImage from "../../../assets/img/teams/Baibhav.png";
import SadipImage from "../../../assets/img/teams/Sadip.jpg";
import SimantImage from "../../../assets/img/teams/Simant.png";

const teamMembers = [
  {
    name: "Siddhant Pandey",
    role: "Fullstack Developer",
    image: SiddhantImage,
    social: {
      facebook: "#",
      twitter: "#",
      github: "#",
      dribbble: "#",
    },
  },
  {
    name: "Baibhav Nepal",
    role: "Frontend Developer",
    image: BaibhavImage,
    social: {
      facebook: "#",
      twitter: "#",
      github: "#",
      dribbble: "#",
    },
  },
  {
    name: "Sadip Khatri",
    role: "Frontend Developer",
    image: SadipImage,
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
    image: SimantImage,
    social: {
      facebook: "#",
      twitter: "#",
      github: "#",
      dribbble: "#",
    },
  },
];
function OurTeam() {
  return (
    <section className="bg-transparent ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-6 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-800 ">
            Our Team
          </h1>
          <p className="font-light text-gray-700 sm:text-xl ">
            Meet the passionate individuals behind our success. Our team is
            dedicated to innovation, collaboration, and excellence.
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center text-gray-500">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full "
                src={member.image}
                alt={member.name}
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                <a href="#">{member.name}</a>
              </h3>
              <p>{member.role}</p>
              <ul className="flex justify-center mt-4 space-x-4 ">
                {Object.entries(member.social).map(([platform, link]) => (
                  <li key={platform}>
                    <a href={link} className="hover:text-gray-900 ">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        {/* Icons can be dynamically rendered here based on platform */}
                        <div>{}</div>
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
