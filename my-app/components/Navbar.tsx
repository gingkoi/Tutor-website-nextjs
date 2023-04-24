"use client";
import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { IoIosCafe } from "react-icons/io";
import { Link } from "react-scroll/modules";
import disableScroll from "disable-scroll";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      href: "hero",
      offset: -100,
    },
    {
      name: "About",
      href: "about",
      offset: 0,
    },
    {
      name: "Courses",
      href: "courses",
      offset: 0,
    },
    {
      name: "Testimonial",
      href: "testimonial",
      offset: 0,
    },
    {
      name: "Why Us",
      href: "why-us",
      offset: 0,
    },
  ];

  const [nav, useNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [shadow, setShadow] = useState("0 0 #0000");
  const [opacity, setOpacity] = useState(false);
  const handleNav = () => {
    useNav(!nav);
  };
  const closeNav = () => {
    useNav(false);
  };

  nav ? disableScroll.on() : disableScroll.off();

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setShadow(
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
        );
        setOpacity(true);
      } else {
        setColor("transparent");
        setShadow("0 0 #0000");
        setOpacity(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{
        backgroundColor: `${color}`,
        boxShadow: `${shadow}`,
      }}
      className="w-screen top-0 left-0 fixed duration-300 ease-in-out z-10"
    >
      <div className="max-w-[1600px] mx-auto py-6 font-urban">
        <div className="flex flex-row justify-between items-center px-5 ">
          <Link
            to={"hero"}
            smooth={true}
            duration={500}
            offset={-100}
            href={"/"}
            className="font-bold text-2xl text-primaryPurple hover:text-primaryText cursor-pointer flex flex-row items-center space-x-1 duration-300"
          >
            <p>LearningHub</p>
            <IoIosCafe size={30} />
          </Link>
          <div className="space-x-12 font-semibold hidden lg:block">
            {links.map((item, index) => (
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                offset={item.offset}
                href={item.href}
                key={index}
                className="text-primaryText text-base hover:text-primaryPurple"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link
            to={"contact"}
            smooth={true}
            duration={500}
            offset={0}
            href={"/"}
            className="font-semibold py-3 px-7 bg-primaryPurple text-white rounded-md hidden lg:block hover:bg-primaryText cursor-pointer duration-300"
          >
            Contact Us
          </Link>
          <div className="bg-white p-3 rounded-xl lg:hidden shadow-2xl border">
            <AiOutlineMenu
              className="text-black"
              size={25}
              onClick={handleNav}
            />
          </div>
          <div
            className={
              nav
                ? `bg-black/80 fixed top-0 left-0 w-[100%] h-screen z-10 p-5 duration-500 ease-out lg:hidden`
                : `right-[-100%] top-0 z-10 h-screen fixed duration-500 lg:hidden`
            }
          >
            <div
              className={
                nav
                  ? `bg-white fixed top-0 left-0 w-[83%] h-screen z-10 p-5 duration-500 ease-out lg:hidden`
                  : `left-[-100%] top-0 z-10 h-screen fixed duration-500 ease-out lg:hidden`
              }
            >
              <div>
                <div className="flex flex-row items-center justify-between border-b pb-5 my-3">
                  <div className="flex flex-row items-center space-x-1">
                    <p className="font-bold text-primaryPurple text-xl">
                      LearningHub
                    </p>
                    <IoIosCafe size={30} className="text-primaryPurple" />
                  </div>
                  <div className="bg-white border rounded-full p-3 shadow-2xl">
                    <AiOutlineClose
                      className="text-black"
                      size={20}
                      onClick={handleNav}
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  {links.map((item, index) => (
                    <Link
                      to={item.href}
                      smooth={true}
                      duration={500}
                      offset={item.href === "hero" ? -100 : -30}
                      href={"/"}
                      key={index}
                      className="text-primaryGray border-b py-2 font-medium"
                      onClick={closeNav}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    to={"contact"}
                    smooth={true}
                    duration={500}
                    offset={0}
                    href={"/"}
                    className="text-primaryGray border-b py-2 font-medium"
                    onClick={closeNav}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link
        to={"hero"}
        smooth={true}
        duration={500}
        offset={-100}
        href={"/"}
        className={`fixed z-[30] bottom-[5%] right-[5%] bg-primaryOrange p-3 rounded-full shadow-2xl duration-300 ease-in ${
          opacity ? "opacity-100" : "opacity-0"
        }`}
      >
        <AiOutlineArrowUp className="text-white" size={30} />
      </Link>
    </div>
  );
};

export default Navbar;
