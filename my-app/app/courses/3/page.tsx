import CoursesPage from "@/components/CoursesPage/CoursesPage";
import React from "react";
import courses from "@/components/CoursesPage/data";

const Page3 = () => {
  return (
    <>
      <CoursesPage course={courses[2]} />
    </>
  );
};

export default Page3;
