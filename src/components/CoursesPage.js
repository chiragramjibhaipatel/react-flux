import React, { useEffect, useState } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_c) => {
      setCourses(_c);
      console.log(courses, _c);
    });
  }, []);

  return (
    <>
      <h1>Courses</h1>
      <CourseList courses={courses} />
    </>
  );
};
export default CoursesPage;
