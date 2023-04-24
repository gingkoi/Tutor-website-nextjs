import CoursesPage from "@/components/CoursesPage/CoursesPage";
import React from "react";
import courses from "@/components/CoursesPage/data";
const page = () => {
  return (
    <>
      <CoursesPage course={courses[4]} />
    </>
  );
};

export default page;
