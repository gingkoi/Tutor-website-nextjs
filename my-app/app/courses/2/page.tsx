import CoursesPage from "@/components/CoursesPage/CoursesPage";
import React from "react";
import courses from "@/components/CoursesPage/data";

const Page2 = () => {
  return (
    <>
      <CoursesPage course={courses[1]} />
    </>
  );
};

export default Page2;
2;
