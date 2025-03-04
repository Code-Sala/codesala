import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Sophia Martinez",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&auto=format&fit=crop&q=60",
    quote:
      "Fantastic experience! The team was professional, and their attention to detail made all the difference. Highly recommend!",
  },
  {
    name: "James Anderson",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60",
    quote:
      "Unmatched professionalism and attention to detail. Exceeded my expectations. Highly recommend their service!",
  },
  {
    name: "Emma Johnson",
    image:
      "https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=600&auto=format&fit=crop&q=60",
    quote:
      "Great results! The team cares about clients and goes above and beyond. Very satisfied with the service!",
  },
  {
    name: "Daniel Roberts",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=60",
    quote:
      "Excellent service and support! They understood my needs and delivered exactly what I was looking for. 10/10!",
  },
  {
    name: "Ava Wilson",
    image:
      "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=600&auto=format&fit=crop&q=60",
    quote:
      "Professional and high quality. Their dedication to exceptional service was clear at every step. Highly recommend!",
  },
  {
    name: "Michael Thompson",
    image:
      "https://images.unsplash.com/photo-1522091066250-665186289043?w=600&auto=format&fit=crop&q=60",
    quote:
      "Above and beyond! The team's dedication and expertise were impressive. Everything was handled with care.",
  },
  {
    name: "Olivia Davis",
    image:
      "https://images.unsplash.com/photo-1513379733131-47fc74b45fcf?w=600&auto=format&fit=crop&q=60",
    quote:
      "Amazing experience! Their professionalism and creativity really stood out. Highly impressed with the outcome!",
  },
  {
    name: "Liam Harris",
    image:
      "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=600&auto=format&fit=crop&q=60",
    quote:
      "Great communication and excellent results. The process was seamless, and I felt valued as a customer!",
  },
  {
    name: "Emily White",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60",
    quote:
      "Best decision I've made! Exceeded my expectations. The team is friendly, responsive, and dedicated.",
  },
  {
    name: "Noah Green",
    image:
      "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?w=600&auto=format&fit=crop&q=60",
    quote:
      "Superb service and support. Felt well taken care of, and the results speak for themselves.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Recommended</h2>
        <p className="italic text-2xl text-gray-300 mb-8">by our members</p>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Urna, in est malesuada arcu massa posuere convallis. Id tristique sed
          velit tellus lorem pellentesque id ut ultrices.
        </p>

        {/* Swiper Container */}
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="swiper-container"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              {/* 🟢 Add "group" class to enable hover effect */}
              <div className="relative bg-zinc-900 p-2 rounded-lg shadow-lg overflow-hidden ">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-80 object-cover rounded-lg mb-4 transition-transform duration-500 ease-in-out hover:scale-105"
                />

                {/* Review text with slide-up effect */}
                <div className="absolute bottom-0 left-0 w-full bg-zinc-900 bg-opacity-70 h-full text-white text-center p-4 transform translate-y-50 opacity-100 transition-all duration-800 ease-in-out  group-hover:opacity-100 group-hover:translate-y-0">
                  <h1 className="pb-5 text-2xl">{testimonial.name}</h1>

                  <p className="text-sm">“{testimonial.quote}”</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swipe hint for users */}
        <div className="mt-4 text-lg text-gray-300 italic">
          Swipe for more reviews →
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
