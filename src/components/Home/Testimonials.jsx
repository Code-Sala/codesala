import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    text: "Joining this company has been a game-changer for my career. The collaborative environment, cutting-edge projects, and focus on continuous learning make it an ideal workplace for tech enthusiasts.",
    author: "Sarah Williams",
    position: "Software Engineer at DevSolutions",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    text: "Innovation is at the heart of everything we do. The leadership empowers employees to take ownership of their work, and the company culture fosters creativity and problem-solving.",
    author: "Michael Johnson",
    position: "CTO at FutureTech",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    text: "A fantastic place to work with a strong emphasis on work-life balance. The team is highly supportive, and the opportunities for growth are endless.",
    author: "Emily Roberts",
    position: "UX Designer at BrightLabs",
    image: "https://randomuser.me/api/portraits/women/53.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h1 className="mx-auto text-3xl lg:text-5xl font-bold text-center pb-12">
          What our clients think
        </h1>
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="mt-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <figure>
                <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                  <p>“{testimonial.text}”</p>
                </blockquote>
                <figcaption className="mt-10 flex flex-col items-center">
                  <img
                    className="size-10 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="mt-4 text-center">
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600">{testimonial.position}</div>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
