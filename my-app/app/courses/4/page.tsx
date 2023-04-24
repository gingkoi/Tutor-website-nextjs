import CoursesPage from "@/components/CoursesPage/CoursesPage";
import React from "react";
import courses from "@/components/CoursesPage/data";

const Page4 = () => {
  return (
    <>
      <CoursesPage course={courses[3]} />
    </>
  );
};

export default Page4;
