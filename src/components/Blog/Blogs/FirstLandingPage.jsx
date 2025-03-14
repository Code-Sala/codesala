import React from "react";
import { Link } from "react-router-dom";

const FirstLandingPage = () => {
  return (
    <div className="justify-center items-center flex-col mx-[45%] w-90 my-50  ">
      <div className=" text-4xl ">Coming Soon!!</div>
      <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl  w-50 my-10 mx-3 ">
        <Link to="/">Home Page </Link>
      </div>
    </div>
  );
};

export default FirstLandingPage;
