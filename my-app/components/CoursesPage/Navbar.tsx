import React from "react";
import { IoIosCafe } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-screen top-0 left-0 fixed duration-300 ease-in-out z-10 bg-white">
      <div className="max-w-[1600px] mx-auto py-6 font-urban px-5">
        <a
          href={"/"}
          className="font-bold text-2xl text-primaryPurple hover:text-primaryText cursor-pointer flex flex-row items-center space-x-1 duration-300 "
        >
          <p>LearningHub</p>
          <IoIosCafe size={30} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
