import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="md:my-[130px] mt-[130px] max-w-[1200px] mx-auto font-urban relative px-5">
        <div className="md:h-[600px] h-full flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:space-y-10 space-y-8">
            <div className="md:w-[700px] space-y-3">
              <div className="flex items-center w-full space-x-3">
                <div className="bg-primaryPurple h-[2px] w-[8%]" />
                <h1 className="text-primaryPurple md:text-base text-sm tracking-widest font-black">
                  BETTER LEARNING FUTURE WITH US
                </h1>
              </div>
              <h1 className="text-primaryText text-6xl font-black">
                Committed To Learn Excellence In Education
              </h1>
            </div>
            <div>
              <ul className="list-disc ml-5 text-primaryGray space-y-2">
                <li>Industry Experts with 8+ years of experience</li>
                <li>Courses designed as per the Industry demand</li>
                <li>Robust Industry Support</li>
                <li>Career Assistance</li>
              </ul>
            </div>
            <button className="bg-primaryPurple w-[250px] text-white font-bold py-4 px-4 rounded-lg text-lg hover:bg-primaryText duration-300">
              Get Started Today
            </button>
          </div>
          <div>
            <Image
              src={"/assets/hero/banner-01.png"}
              width={600}
              height={600}
              alt="Banner girl"
              className="md:absolute md:z-1 md:bottom-[-22%] md:right-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;