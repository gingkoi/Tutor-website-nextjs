import React from "react";
import { BsEasel2Fill } from "react-icons/bs";

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
  ];
  return (
    <section className="">
      <div className="max-w-[1200px] mx-auto py-36 font-urban">
        <div className="grid grid-cols-2">
          <div>Picture</div>
          <div>
            <div className="space-y-10">
              <div className="space-y-3">
                <h3 className="text-primaryPurple uppercase font-bold tracking-widest">
                  About Us
                </h3>
                <h3 className="text-primaryText font-black text-5xl">
                  Creating A Community Of Life Long Learners
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-10">
                {data.map((item, index) => (
                  <div className="flex flex-row space-x-10">
                    <div key={index}>{item.icon}</div>
                    <div>
                      <p className="text-primaryText font-bold text-2xl">
                        {item.title}
                      </p>
                      <p className="text-primaryGray">{item.description}</p>
                    </div>
                  </div>
                ))}
                <div className="flex flex-row space-x-10">
                  <div>
                    <BsEasel2Fill
                      className="text-white bg-primaryOrange p-4 rounded-full"
                      size={60}
                    />
                  </div>
                  <div className="shrink">
                    <p className="text-primaryText font-bold text-2xl">
                      40+ Global Hiring Partners
                    </p>
                    <p className="text-primaryGray">
                      Get hired by our top hiring partners with ease and super
                      flexblitiy
                    </p>
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

export default About;
