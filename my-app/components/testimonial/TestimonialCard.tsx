import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const TestimonialCard = ({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="flex flex-col p-10 space-y-5 bg-white rounded-md shadow-2xl justify-center">
      <div className="flex flex-row space-x-5 items-center">
        <img src={image} alt="/" width={80} height={80} />
        <p className="text-primaryText font-bold text-2xl">{name}</p>
      </div>
      <div>
        <p className="text-primaryGray text-justify">{description}</p>
      </div>
      <div className="flex space-x-1">
        <BsFillStarFill className="text-[#f4a334]" />
        <BsFillStarFill className="text-[#f4a334]" />
        <BsFillStarFill className="text-[#f4a334]" />
        <BsFillStarFill className="text-[#f4a334]" />
        <BsFillStarFill className="text-[#f4a334]" />
      </div>
    </div>
  );
};

export default TestimonialCard;
