import { useEffect, useState } from "react";
import CourseForm from "./CourseForm";
import { toast } from "react-toastify";
import * as courseAction from "../actions/courseAction";
import courseStore from "../stores/courseStore";

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
      setCourse(courseStore.getCourseBySlug(slug));
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
  
    courseAction.saveCourse(course).then(() => {
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
