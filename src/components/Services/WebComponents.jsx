import React from "react";

const WebComponents = () => {
  return (
    <div>
      <div className="container bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] min-h-[40vh] flex-col items-center justify-center px-4 sm:px-8 text-center">
        <div className="container_lg">
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight pt-10 ">
            Web Development
          </h1>
          <p className="text-white font-semibold text-base sm:text-lg md:text-xl mt-6 px-2 sm:px-10 ">
            We create fast, responsive, and scalable websites tailored to your
            needs. Whether it's a sleek business site, an eCommerce platform, or
            a dynamic web app, we use cutting-edge technologies to deliver
            high-performance solutions. Let’s build a website that sets you
            apart!
          </p>
        </div>
        {/* <div className="mt-8 flex justify-center">
          <button className="bg-white text-[#892890] font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:bg-transparent hover:text-white hover:border-2 border-white">
            Book a Call
          </button>
        </div> */}
      </div>
      <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Hello there</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebComponents;
