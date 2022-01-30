import { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";

function ManageCoursePage(props) {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  function handleChange({ target }) {
    setCourse({ ...course, [target.name]: target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
    });
  }

  return (
    <div>
      <h1>Manage Course</h1>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default ManageCoursePage;
