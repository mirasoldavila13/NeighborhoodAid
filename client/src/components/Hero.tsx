import React from "react";
import communityImage from "../assets/community_2.svg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
        <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
          <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
            Building Stronger Communities Together!
          </h1>
          <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
            A platform where community members can report issues like potholes,
            streetlight outages, or vandalism to local governments.
          </p>
        </div>
        <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
          <img
            src={communityImage}
            alt="Community Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
