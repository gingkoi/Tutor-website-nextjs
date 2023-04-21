"use client";
import React, { useState } from "react";
import db from "./course/dataCard";
import CourseCard from "./course/CourseCard";

const Courses = () => {
  const [click, setClick] = useState(0);
  const handleClick = (index: number) => {
    setClick(index);
  };
  const category = ["All", "Popularity", "Trending", "Featured"];

  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto lg:py-36 py-20 font-urban px-5">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="space-y-3">
            <h4 className="text-primaryPurple uppercase font-bold tracking-widest">
              WHO WE ARE
            </h4>
            <h4 className="text-primaryText font-black md:text-4xl text-3xl">
              We Offer The Best Carrier
            </h4>
          </div>
          <div className="flex flex-row flex-wrap gap-3 my-3">
            {category.map((item, index) => (
              <div
                className={`${
                  click === index
                    ? "bg-primaryPurple text-white"
                    : "bg-[#f5f5f5] text-black"
                }  px-6 py-2 rounded font-bold cursor-pointer hover:bg-primaryPurple hover:text-white duration-300`}
                key={index}
                onClick={() => {
                  handleClick(index);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:my-10 my-5 gap-8">
          {click === 0 &&
            db.map((item, index) => (
              <CourseCard
                course={item.course}
                rating={item.rating}
                image={item.image}
                alt={item.alt}
                lesson={item.lesson}
                key={index}
                description={item.description}
              />
            ))}
          {click === 1 &&
            db.map((item, index) => {
              if (item.genre === "Popularity") {
                return (
                  <CourseCard
                    course={item.course}
                    rating={item.rating}
                    image={item.image}
                    alt={item.alt}
                    lesson={item.lesson}
                    key={index}
                    description={item.description}
                  />
                );
              }
            })}
          {click === 2 &&
            db.map((item, index) => {
              if (item.genre === "Trending") {
                return (
                  <CourseCard
                    course={item.course}
                    rating={item.rating}
                    image={item.image}
                    alt={item.alt}
                    lesson={item.lesson}
                    key={index}
                    description={item.description}
                  />
                );
              }
            })}
          {click === 3 &&
            db.map((item, index) => {
              if (item.genre === "Featured") {
                return (
                  <CourseCard
                    course={item.course}
                    rating={item.rating}
                    image={item.image}
                    alt={item.alt}
                    lesson={item.lesson}
                    key={index}
                    description={item.description}
                  />
                );
              }
            })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
