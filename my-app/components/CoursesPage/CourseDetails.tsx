import React from "react";
import { BsChevronRight } from "react-icons/bs";

const CourseDetails = () => {
  return (
    <section className="">
      <div className="md:mt-[50px] mt-[80px] max-w-[1600px] mx-auto font-urban relative lg:py-16 py-10 px-5">
        <div className="space-y-2">
          <h1 className="text-primaryText md:text-4xl text-3xl font-bold">
            Course Details
          </h1>
          <div className="flex items-center space-x-1 text-primaryGray">
            <a href="/" className="hover:underline">
              Home
            </a>
            <BsChevronRight />
            <p>Course Details</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
