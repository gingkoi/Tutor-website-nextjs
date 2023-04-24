import CoursesPage from "@/components/CoursesPage/CoursesPage";
import React from "react";
import courses from "@/components/CoursesPage/data";

const Page1 = () => {
  return (
    <>
      <CoursesPage course={courses[0]} />
    </>
  );
};

export default Page1;
