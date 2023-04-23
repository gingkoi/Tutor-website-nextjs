import Image from "next/image";
import React from "react";
import { BsEmojiSmile, BsClock, BsHeadset } from "react-icons/bs";
import WhyUsCard from "./whyUs/WhyUsCard";
import CountUp from "./CountUp";

const WhyUs = () => {
  const data = [
    {
      title: "Learners & counting",
      image: "/assets/about/whyUs/about-image-01.png",
      number: 449,
    },
    {
      title: "Courses & Video",
      image: "/assets/about/whyUs/about-image-02.png",
      number: 330,
    },
    {
      title: "Certification",
      image: "/assets/about/whyUs/about-image-03.png",
      number: 275,
    },
    {
      title: "Certified Students",
      image: "/assets/about/whyUs/about-image-04.png",
      number: 378,
    },
  ];

  return (
    <section className="bg-white font-urban">
      <div className="max-w-[1200px] mx-auto lg:py-36 py-20 font-urban px-5">
        <div className="grid lg:grid-cols-2 md:space-x-16 space-y-10 md:space-y-0">
          <div className="grid md:grid-cols-2 gap-5">
            {data.map((item, index) => (
              <WhyUsCard
                title={item.title}
                image={item.image}
                number={item.number}
                key={index}
              />
            ))}
          </div>
          <div>
            <div className="space-y-10 md:mx-8 lg:mx-0">
              <div className="space-y-3">
                <h4 className="text-primaryPurple uppercase font-bold tracking-widest">
                  Why choose us
                </h4>
                <h4 className="text-primaryText font-black md:text-5xl text-3xl">
                  Creating A Community Of Life Long Learners
                </h4>
              </div>
              <div className="space-y-5">
                <p className="text-primaryGray">
                  Learn from the World's Best Faculty & Industry Experts
                </p>
                <div className="grid space-y-5">
                  <div className="flex items-center space-x-10">
                    <div className="bg-[#fdf1ed] p-3 rounded-full">
                      <BsEmojiSmile className="text-primaryOrange" size={30} />
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-primaryText font-bold md:text-2xl text-lg">
                        World Class Pedagogy
                      </h5>
                      <p className="text-primaryGray md:text-base text-sm">
                        Learn with fun Hands-on Exercises & Assignments
                        Participate in Hackathons & Group Activities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-10">
                    <div className="bg-[#ece9fc] p-3 rounded-full">
                      <BsHeadset className="text-primaryPurple" size={30} />
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-primaryText font-bold md:text-2xl text-lg">
                        Personalized Guidance with 24*7 Support
                      </h5>
                      <p className="text-primaryGray md:text-base text-sm">
                        Dedicated Learning Managers 24*7 learning Support
                        Network with Peers & Interact with Industry Leaders
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-10">
                    <div className="bg-[#fdf1ed] p-3 rounded-full">
                      <BsClock className="text-primaryOrange" size={30} />
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-primaryText font-bold md:text-2xl text-lg">
                        Career Assistance
                      </h5>
                      <p className="text-primaryGray md:text-base text-sm">
                        Resume Building & Mock Interview Prep Exclusive access
                        to Intellipaat Job Portal 400+ Hiring Partners
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
