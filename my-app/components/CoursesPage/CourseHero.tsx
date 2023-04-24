"use client";
import React, { useState } from "react";
import Overview from "./Overview";
import Curriculum from "./Curriculum";
import Image from "next/image";
import {
  AiOutlineClockCircle,
  AiOutlineUsergroupAdd,
  AiOutlineFileText,
  AiOutlineRead,
  AiOutlineCrown,
} from "react-icons/ai";
import { TbLanguage } from "react-icons/tb";

const CourseHero = ({
  heading,
  description,
  why,
  certificate,
  curriculum,
  details,
}: {
  heading: string;
  description: string;
  why: string;
  certificate: string;
  curriculum: any;
  details: any;
}) => {
  const [click, setClick] = useState(0);
  const handleClick = (index: number) => {
    setClick(index);
  };
  return (
    <section className="bg-white">
      <div className="max-w-[1600px] mx-auto font-urban relative md:py-20 py-10 px-5">
        <h1 className="text-5xl font-bold text-primaryText md:text-center lg:text-left">
          {heading}
        </h1>
        <div className="grid lg:grid-cols-2 lg:space-x-10 space-y-10 lg:space-y-0 my-10">
          <div className="space-y-10">
            <div className="bg-[#f5f5f5] flex items-center space-x-3 px-3">
              <div
                className={`text-black text-lg font-bold px-8 py-5 hover:text-primaryPurple duration-300 cursor-pointer ${
                  click === 0 &&
                  "border-b-4 border-b-primaryPurple text-primaryPurple"
                }`}
                onClick={() => handleClick(0)}
              >
                Overview
              </div>
              <div
                className={`text-black text-lg font-bold px-8 py-5 hover:text-primaryPurple duration-300 cursor-pointer ${
                  click === 1 &&
                  "border-b-4 border-b-primaryPurple text-primaryPurple"
                }`}
                onClick={() => handleClick(1)}
              >
                Curriculum
              </div>
            </div>
            {click === 0 ? (
              <Overview
                description={description}
                why={why}
                certificate={certificate}
              />
            ) : (
              <Curriculum curriculum={curriculum} />
            )}
          </div>
          <div className="order-first lg:order-last lg:absolute lg:z-[20] lg:left-[54%] lg:top-[-5%]">
            <div className="lg:w-[400px] bg-white rounded-md p-5 flex flex-col shadow-xl">
              <div className="flex justify-center">
                <Image
                  src={"/assets/courses/page/course-01.jpeg"}
                  alt="course 01"
                  width={400}
                  height={300}
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between p-5 border-b">
                  <div className="flex items-center space-x-2">
                    <AiOutlineClockCircle
                      className="text-primaryPurple"
                      size={20}
                    />
                    <p className="font-semibold text-primaryGray">Duration</p>
                  </div>
                  <div className="text-primaryGray font-bold">
                    {details.duration}
                  </div>
                </div>
                <div className="flex justify-between p-5 border-b">
                  <div className="flex items-center space-x-2">
                    <AiOutlineUsergroupAdd
                      className="text-primaryPurple"
                      size={20}
                    />
                    <p className="font-semibold text-primaryGray">Enrolled</p>
                  </div>
                  <div className="text-primaryGray font-bold">
                    {details.enrolled}
                  </div>
                </div>
                <div className="flex justify-between p-5 border-b">
                  <div className="flex items-center space-x-2">
                    <AiOutlineFileText
                      className="text-primaryPurple"
                      size={20}
                    />
                    <p className="font-semibold text-primaryGray">Lectures</p>
                  </div>
                  <div className="text-primaryGray font-bold">
                    {details.lectures}
                  </div>
                </div>
                <div className="flex justify-between p-5 border-b">
                  <div className="flex items-center space-x-2">
                    <TbLanguage className="text-primaryPurple" size={20} />
                    <p className="font-semibold text-primaryGray">Language</p>
                  </div>
                  <div className="text-primaryGray font-bold">
                    {details.language}
                  </div>
                </div>
                <div className="flex justify-between p-5 border-b">
                  <div className="flex items-center space-x-2">
                    <AiOutlineRead className="text-primaryPurple" size={20} />
                    <p className="font-semibold text-primaryGray">Quizzes</p>
                  </div>
                  <div className="text-primaryGray font-bold">
                    {details.quizzes}
                  </div>
                </div>
                <div className="flex justify-between p-5 border-b">
                  <div className="flex items-center space-x-2">
                    <AiOutlineCrown className="text-primaryPurple" size={20} />
                    <p className="font-semibold text-primaryGray">
                      Certificate
                    </p>
                  </div>
                  <div className="text-primaryGray font-bold">
                    {details.certificate}
                  </div>
                </div>
                <div className="bg-primaryPurple text-white rounded-lg p-5 text-xl text-center font-bold hover:bg-primaryOrange hover:text-white duration-300 cursor-pointer">
                  Contact Us
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
