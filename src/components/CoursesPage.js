import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

const CoursesPage = (props) => {
  const [courses, setCourses] = useState([]);
  debugger;

  console.log("Path variable: ", props.match.params.slug);
  console.log("Query Parameter: ", props.location.search);
  console.log("Query Parameter: ", props.location.pathname);

  useEffect(() => {
    getCourses().then((_c) => {
      setCourses(_c);
      console.log(courses, _c);
    });
  }, []);

  return (
    <>
      <h1>Courses</h1>
      <Link to="/course" className="btn btn-primary">Add Course</Link>
      <CourseList courses={courses} />
    </>
  );
};
export default CoursesPage;
