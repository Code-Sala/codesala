import {} from "react-router-dom";

function AboutHero() {
  return <div>
    <>
    <div className="bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] ... h-130">
         <div className="content container_lg">
          <div className="heading text-white font-extrabold text-5xl  pb-0 font pt-20"> 
              <h1 className="text-center">Your Partner for Ultimate <br /> Success</h1>
          </div> 
          <div className="paragraph font-semibold w-250 ml-50 text-white text-[17px] pt-8 text-center">
            <p>Welcome to CODESALA, where innovation meets practicality. We are a dynamic digital solutions company dedicated to helping businesses thrive in the ever-evolving digital world. With expertise in UI/UX design, web development, domain and hosting, software integration, and skill rental, we offer a full range of services tailored <br /> to meet your unique needs.</p>
          </div>
          <div className="button pt-6">
            <button className="bg-white cursor-pointer rounded-sm w-35 pt-3 pb-3 mt-4 justify-center ml-154 hover:bg-transparent hover:text-white hover:border-2 border-bright-purple-800">Book A Call</button>
          </div>
         </div>
    </div>
    </>
  </div>;
}

export default AboutHero;
