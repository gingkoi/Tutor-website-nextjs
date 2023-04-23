import React from "react";
import {
  RiFacebookFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiPinterestFill,
  RiSendPlane2Fill,
} from "react-icons/ri";

import { BsGeoAlt, BsFillTelephoneFill, BsEnvelopeAt } from "react-icons/bs";

const Footer = () => {
  const socials = [
    {
      icon: <RiFacebookFill className="text-white" size={30} />,
      href: "https://www.facebook.com/",
    },
    {
      icon: <RiLinkedinFill className="text-white" size={30} />,
      href: "https://sg.linkedin.com/",
    },
    {
      icon: <RiPinterestFill className="text-white" size={30} />,
      href: "https://www.pinterest.com/",
    },
    {
      icon: <RiTwitterFill className="text-white" size={30} />,
      href: "https://twitter.com/?lang=en",
    },
  ];

  const contact = [
    {
      name: "Noida Sector 110",
      icon: <BsGeoAlt className="text-white" size={20} />,
    },
    {
      name: "+65 6189 9654",
      icon: <BsFillTelephoneFill className="text-white" size={20} />,
    },
    {
      name: "learningHub@gmail.com",
      icon: <BsEnvelopeAt className="text-white" size={20} />,
    },
  ];

  return (
    <section className="bg-primaryText font-urban text-white">
      <div className="max-w-[1200px] mx-auto lg:pt-36 py-20 font-urban px-5">
        <div className="grid lg:grid-cols-2 lg:space-x-20 space-y-10 lg:space-y-0">
          <div className="flex flex-col justify-between space-y-5 lg:space-y-0">
            <div className="font-bold text-3xl">LearningHub</div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.
            </p>
            <div className="flex items-center space-x-3">
              {socials.map((item, index) => (
                <a
                  href={item.href}
                  className="p-3 bg-white/20 hover:bg-primaryPurple rounded-md duration-300"
                  key={index}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="grid lg:grid-cols-2 space-y-10 lg:space-y-0">
            <div className="lg:space-y-10 space-y-5">
              <p className="text-3xl font-bold">Explore</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 hover:text-primaryPurple duration-300">
                  <RiSendPlane2Fill />
                  <p className="font-bold">Home</p>
                </div>
                <div className="flex items-center space-x-3 hover:text-primaryPurple duration-300">
                  <RiSendPlane2Fill />
                  <p className="font-bold">About Us</p>
                </div>
                <div className="flex items-center space-x-3 hover:text-primaryPurple duration-300">
                  <RiSendPlane2Fill />
                  <p className="font-bold">Courses</p>
                </div>
                <div className="flex items-center space-x-3 hover:text-primaryPurple duration-300">
                  <RiSendPlane2Fill />
                  <p className="font-bold">Why Us</p>
                </div>
                <div className="flex items-center space-x-3 hover:text-primaryPurple duration-300">
                  <RiSendPlane2Fill />
                  <p className="font-bold">Testimonials</p>
                </div>
              </div>
            </div>
            <div className="lg:space-y-10 space-y-5">
              <p className="text-3xl font-bold">Contact Info</p>
              <div className="space-y-3">
                {contact.map((item, index) => (
                  <div
                    className="flex items-center space-x-3 hover:text-primaryPurple duration-300"
                    key={index}
                  >
                    {item.icon}
                    <p className="font-medium">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-20">
          <p>Copyright 2023 LearningHub. All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
