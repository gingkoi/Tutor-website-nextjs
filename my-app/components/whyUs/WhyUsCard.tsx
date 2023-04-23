import React from "react";
import Image from "next/image";
import CountUp from "../CountUp";

const whyUsCard = ({
  image,
  title,
  number,
}: {
  image: string;
  title: string;
  number: number;
}) => {
  return (
    <div className="bg-white shadow-xl rounded-md flex flex-col justify-center items-center space-y-10 p-10">
      <div className="flex justify-center items-center">
        <Image src={image} alt="about us" width={49} height={60} />
      </div>
      <div className="text-center space-y-2">
        <div className="text-primaryText font-bold text-5xl">
          <CountUp end={number} />
        </div>
        <p className="text-primaryGray text-lg">{title}</p>
      </div>
    </div>
  );
};

export default whyUsCard;
