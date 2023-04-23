import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import TestimonialCard from "./testimonial/TestimonialCard";

const Testimonial = () => {
  const data = [
    {
      name: "Saloni Arora",
      image: "/assets/clients/client-01.jpeg",
      description: `"Before joining LearningCafe I had been working as a BD
      Executive. I have always found AI-ML to be a confusing and
      intricate subject. But LearningCafe AI-ML course was so well
      structured and elaborative that from the very initial lectures
      the concepts started becoming clear."`,
    },
    {
      name: "Abhishek Tripathi",
      image: "/assets/clients/client-02.jpeg",
      description: `"LearningCafe Faculty is very approachable and always ready to lend a hand with doubts Best part of training was working on easy to intricate practical sessions to apply our learnings. Implementing what I learnt helped me gain confidence and my learning experience, more exciting."`,
    },
    {
      name: "Vaibhav Ranjha",
      image: "/assets/clients/client-03.jpeg",
      description: `"After completing Post Grad I was looking for a job opportunity in the field of data science. I got rejected at 80 companies. Then I decided to join LearningCafe data science program. The course was extensively comprehensive and detailed. I got so much confidence and motivated to work hard."`,
    },
  ];
  return (
    <section>
      <div className="max-w-[1200px] mx-auto lg:py-36 py-20 font-urban px-5">
        <div className="flex flex-col items-center justify-center">
          <div className="space-y-3">
            <h4 className="text-primaryPurple uppercase font-bold tracking-widest text-center">
              TESTIMONIAL
            </h4>
            <h4 className="text-primaryText font-black md:text-4xl text-3xl md:text-left text-center">
              Our Lovely Students Feedback
            </h4>
          </div>
          <div className="my-10 grid md:grid-cols-3 gap-10">
            {data.map((item, index) => (
              <TestimonialCard
                name={item.name}
                image={item.image}
                description={item.description}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
