"use client";
import React, { useState } from "react";
import {
  BsChevronDown,
  BsChevronUp,
  BsLayoutTextSidebar,
} from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";

const Curriculum = ({ curriculum }: { curriculum: any }) => {
  const [click, setClick] = useState(50);
  const handleClick = (index: number) => {
    setClick(index);
  };
  return (
    <div className="space-y-5">
      {curriculum.map((item: any, index: number) => (
        <div
          className="border p-8 cursor-pointer"
          onClick={() => handleClick(index)}
          key={index}
        >
          <div className="flex justify-between items-center">
            <p
              className={`font-bold text-black text-xl ${
                click === index && "text-primaryPurple"
              }`}
            >
              {item.name}
            </p>
            <div className="p-2 border rounded-full">
              {click ? <BsChevronUp /> : <BsChevronDown />}
            </div>
          </div>
          {click === index &&
            item.lesson.map((lesson: string, key: number) => (
              <div className={"mt-5"} key={key}>
                <div className="flex justify-between items-center text-primaryGray border-b py-5">
                  <div className="flex items-center space-x-3">
                    <BsLayoutTextSidebar size={20} />
                    <p className="font-medium">{lesson}</p>
                  </div>
                  <AiOutlineLock size={20} />
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Curriculum;
