import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseList from "./CourseList";
import courseStore from "../stores/courseStore";
import { loadCourses } from "../actions/courseAction";

const CoursesPage = () => {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  return (
    <>
      <h1>Courses</h1>
      <Link to="/course" className="btn btn-primary">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
};
export default CoursesPage;
