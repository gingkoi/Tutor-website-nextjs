import React from "react";
import Image from "next/image";

const Overview = ({
  description,
  why,
  certificate,
}: {
  description: string;
  why: string;
  certificate: string;
}) => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-primaryText text-2xl font-bold">
          Course Description
        </h2>
        <p className="text-primaryGray text-justify md:text-left">
          {description}
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-primaryText text-2xl font-bold">
          Why LearningHub?
        </h2>
        <p className="text-primaryGray text-justify md:text-left">{why}</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-primaryText text-2xl font-bold">Certification</h2>
        <p className="text-primaryGray text-justify md:text-left">
          {certificate}
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          src={"/assets/certificate.jpeg"}
          width={600}
          height={400}
          alt="certificate"
        />
      </div>
    </div>
  );
};

export default Overview;
