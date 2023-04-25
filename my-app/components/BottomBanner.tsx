"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { BsArrowRight, BsFillTelephoneFill } from "react-icons/bs";
import SignUpModal from "./modal/SignUpModal";
import SignUpModal2 from "./modal/SignUpModal2";

const BottomBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="bg-primaryPurple font-urban">
      <div
        className="max-w-[1200px] mx-auto lg:py-24 py-20 font-urban px-5"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-5 lg:space-y-0">
          <div className="space-y-3">
            <h4 className="text-white uppercase font-bold tracking-widest lg:text-left text-center">
              LET US HELP
            </h4>
            <h4 className="text-white font-black md:text-5xl text-3xl md:text-left text-center">
              Finding Your Right Courses
            </h4>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-10 space-y-5 lg:space-y-0">
            <SignUpModal2 />
            <div className="text-white font-bold flex items-center space-x-1">
              <BsFillTelephoneFill size={25} />
              <p className="text-lg">+65 6189 9654</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;
