import { useEffect, useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

function ManageCoursePage(props) {
  const [error, setError] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    const slug = props.match.params.slug;
    if (slug) {
      courseApi.getCourseBySlug(slug).then((_course) => setCourse(_course));
    }
  }, [props.match.params.slug]);

  function handleChange(e) {
    setCourse({ ...course, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formIsValid()) {
      return;
    }
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course Saved");
    });
  }

  function formIsValid() {
    let _error = {};
    if (!course.title) {
      _error.title = "Title can not be blank";
    }
    if (!course.authorId) {
      _error.authorId = "Please select author";
    }
    if (!course.category) {
      _error.category = "Category can not be blank";
    }

    setError(_error);
    return Object.keys(_error).length === 0;
  }

  return (
    <div>
      <h1>Manage Course</h1>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
        error={error}
      />
    </div>
  );
}

export default ManageCoursePage;
