import React from "react";
import Navbar from "../CoursesPage/Navbar";
import CourseDetails from "./CourseDetails";
import CourseHero from "./CourseHero";
import Footer from "../Footer";

const CoursesPage = ({ course }: { course: any }) => {
  return (
    <div>
      <Navbar />
      <CourseDetails />
      <CourseHero
        heading={course.name}
        description={course.description}
        why={course.why}
        certificate={course.certificate}
        curriculum={course.curriculum}
        details={course.details}
      />
      <Footer />
    </div>
  );
};

export default CoursesPage;
