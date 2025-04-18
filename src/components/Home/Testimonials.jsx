import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { MoveRight } from "lucide-react";
import dipeshImage from "../../assets/img/testimonials/dipesh.jpg";
import bikkyImage from "../../assets/img/testimonials/bikky.jpg";


const testimonials = [
  {
    text: "Joining this company has been a game-changer for my career. The collaborative environment, cutting-edge projects, and focus on continuous learning make it an ideal workplace for tech enthusiasts.",
    author: "Dipesh Khatiwada",
    position: "Founder at RadhaKrishna Synthetic",
    image: dipeshImage,
  },
  {
    text: "Innovation is at the heart of everything we do. The leadership empowers employees to take ownership of their work, and the company culture fosters creativity and problem-solving.",
    author: "Bikki Shah",
    position: "Chairman at Bhuikhel F.C",
    image: bikkyImage,
  },
  // {
  //   text: "A fantastic place to work with a strong emphasis on work-life balance. The team is highly supportive, and the opportunities for growth are endless.",
  //   author: "Emily Roberts",
  //   position: "UX Designer at BrightLabs",
  //   image: "https://randomuser.me/api/portraits/women/53.jpg",
  // },
];

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-18 sm:py-32 lg:px-8 mt-6">
      <div className="absolute inset-0 -z-10 opacity-20"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-vibrant-pink/20 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h1 className="mx-auto text-3xl lg:text-5xl font-bold text-center pb-8  leading-tight   bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] bg-clip-text text-transparent animate-fadeInUp">
          What our clients think
        </h1>
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="mt-6"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <figure>
                <blockquote className="text-center italic text-gray-700 sm:text-2xl/9">
                  <p>“{testimonial.text}”</p>
                </blockquote>
                <figcaption className="mt-10 flex flex-col items-center">
                  <img
                    className="size-10 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="mt-4 text-center">
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600">{testimonial.position}</div>
                  </div>
                  <div className="flex gap-150">
                    <span className="text-center">
                      <MoveRight />
                    </span>
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
