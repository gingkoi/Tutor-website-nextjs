import React from "react";
import Image from "next/image";
import {
  BsEasel2Fill,
  BsRocketTakeoffFill,
  BsFillTrophyFill,
  BsStars,
  BsEmojiSmileFill,
} from "react-icons/bs";

const About = () => {
  const data = [
    {
      title: "40+ Global Hiring Partners",
      description:
        "Get hired by our top hiring partners with ease and super flexblitiy",
      icon: (
        <BsEasel2Fill
          className="text-white bg-primaryOrange p-4 rounded-full"
          size={60}
        />
      ),
    },
    {
      title: "World-Class Instructors",
      description:
        "Comes with world class Instructors to guide at every single stage during your journey",
      icon: (
        <BsFillTrophyFill
          className="text-white bg-primaryOrange p-4 rounded-full"
          size={60}
        />
      ),
    },
    {
      title: "1:1 with Industry Mentors",
      description: "Get Mentor guidance and support at any time and anywhere",
      icon: (
        <BsStars
          className="text-white bg-primaryOrange p-4 rounded-full"
          size={60}
        />
      ),
    },
    {
      title: "55% Avg. Salary Hike",
      description:
        "Avg. Salary hikes will keep you up and running for next goal",
      icon: (
        <BsRocketTakeoffFill
          className="text-white bg-primaryOrange p-4 rounded-full"
          size={60}
        />
      ),
    },
  ];
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto lg:py-36 py-20 font-urban px-5">
        <div className="grid lg:grid-cols-2">
          <div className="lg:grid grid-cols-2 mr-16 gap-3 items-end relative hidden">
            <Image
              src={"/assets/about/gallery-1.jpeg"}
              alt="gallery-1"
              width={200}
              height={230}
              className="ml-10"
            />
            <Image
              src={"/assets/about/gallery-2.jpeg"}
              alt="gallery-2"
              width={315}
              height={315}
            />
            <div className="col-span-2">
              <Image
                src={"/assets/about/gallery-3.jpeg"}
                alt="gallery-3"
                width={400}
                height={220}
                className="mx-20"
              />
            </div>
            <div className="flex items-center space-x-2 bg-white absolute px-6 py-3 rounded-xl bottom-[10%] shadow-2xl animate-bounce">
              <BsEmojiSmileFill
                size={40}
                className="text-white bg-[#f5baa5] p-2 rounded-full"
              />
              <div>
                <p className="text-primaryOrange text-2xl font-bold">10K</p>
                <p className="font-semibold text-primaryGray">Total Students</p>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-10 md:mx-8 lg:mx-0">
              <div className="space-y-3">
                <h3 className="text-primaryPurple uppercase font-bold tracking-widest">
                  About Us
                </h3>
                <h3 className="text-primaryText font-black md:text-5xl text-3xl">
                  Creating A Community Of Life Long Learners
                </h3>
              </div>
              <div className="grid md:grid-cols-2 md:gap-10 gap-y-8">
                {data.map((item, index) => (
                  <div className="flex flex-row md:space-x-10 space-x-8">
                    <div key={index}>{item.icon}</div>
                    <div>
                      <p className="text-primaryText font-bold md:text-2xl text-lg">
                        {item.title}
                      </p>
                      <p className="text-primaryGray md:text-base text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
