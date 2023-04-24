"use client";
import React, { useState } from "react";
import { BsFileText, BsFillStarFill, BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const CourseCard = ({
  course,
  rating,
  image,
  alt,
  lesson,
  description,
  href,
}: {
  course: string;
  rating: number;
  image: string;
  alt: string;
  lesson: number;
  description: string;
  href: string;
}) => {
  const [hover, setHover] = useState(false);
  const onMouse = () => {
    setHover(!hover);
  };
  return (
    <div className="rounded-md shadow-xl relative group" onMouseOver={onMouse}>
      <div className="bg-primaryPurple absolute top-0 left-0 right-0 bottom-0 z-3 rounded-md duration-300 ease-in-out -translate-y-[5px] group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
        <div className="mt-5 mx-8 space-y-8">
          <div className="my-6 space-y-5">
            <p className="text-white text-xl font-bold">{course}</p>
            <p className="text-white">{description}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-white">By LearningHub</p>
            <div className="flex items-center space-x-2">
              <BsFileText className="text-white" size={20} />
              <p className="text-white font-medium">{lesson} Lessons</p>
            </div>
          </div>
          <div className="my-5 flex group">
            <a
              className="font-bold bg-white text-primaryPurple p-4 rounded-lg flex items-center space-x-2 hover:bg-primaryOrange hover:text-white duration-300 "
              href={href}
            >
              <p>Know more</p>
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={image}
          width={360}
          height={260}
          alt={alt}
          className="w-full rounded-t-md"
        />
      </div>
      <div>
        <div className="mt-5 mx-8">
          <div className="flex justify-between">
            <p className="font-medium text-primaryGray">By LearningHub</p>
            <div className="flex items-center space-x-2">
              <BsFileText className="text-primaryPurple" size={20} />
              <p className="text-primaryGray font-medium">{lesson} Lessons</p>
            </div>
          </div>
          <div className="my-6">
            <p className="text-primaryText text-xl font-bold">{course}</p>
          </div>
          <div className="border" />
        </div>
        <div className="flex items-center justify-between m-7">
          <a
            className="font-bold bg-primaryPurple md:bg-white md:text-primaryPurple text-white p-4 rounded-lg"
            href={href}
          >
            Know more
          </a>
          <div className="flex space-x-2 items-center">
            <div className="flex space-x-1">
              <BsFillStarFill className="text-[#f4a334]" />
              <BsFillStarFill className="text-[#f4a334]" />
              <BsFillStarFill className="text-[#f4a334]" />
              <BsFillStarFill className="text-[#f4a334]" />
              <BsFillStarFill className="text-[#f4a334]" />
            </div>
            <p className="font-medium text-primaryGray">({rating})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
